// State
let user = {
    name: '',
    email: '',
    studyIndex: 0,
    lastScore: null
};

let examState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    failed: []
};

// DOM Elements
const views = {
    landing: document.getElementById('view-landing'),
    dashboard: document.getElementById('view-dashboard'),
    study: document.getElementById('view-study'),
    exam: document.getElementById('view-exam'),
    result: document.getElementById('view-result')
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic year
    document.getElementById('dynamic-year').textContent = new Date().getFullYear();

    // Check if data exists
    if (typeof questionsData === 'undefined' || questionsData.length === 0) {
        alert("Error: No se pudo cargar el balotario de preguntas. Verifica data.js");
        return;
    }

    loadUser();

    // Set totals
    document.getElementById('study-total').textContent = questionsData.length;

    // Events
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    document.getElementById('btn-logout').addEventListener('click', handleLogout);
    document.getElementById('card-study').addEventListener('click', () => switchView('study', initStudy));
    document.getElementById('card-exam').addEventListener('click', () => switchView('exam', initExam));
    
    // Study Mode Events
    document.getElementById('btn-study-next').addEventListener('click', studyNext);
    document.getElementById('btn-study-prev').addEventListener('click', studyPrev);
    
    // Exam Mode Events
    document.getElementById('btn-exam-next').addEventListener('click', examNext);
    document.getElementById('btn-abort-exam').addEventListener('click', () => {
        if(confirm("¿Seguro que deseas abandonar el simulacro?")) switchView('dashboard', updateDashboard);
    });

    // Global Nav Events
    document.querySelectorAll('.btn-home').forEach(btn => {
        btn.addEventListener('click', () => switchView('dashboard', updateDashboard));
    });
});

// --- NAVIGATION & STATE ---
function loadUser() {
    const saved = localStorage.getItem('moto_user');
    if (saved) {
        user = JSON.parse(saved);
        switchView('dashboard', updateDashboard);
    } else {
        switchView('landing');
    }
}

function saveUser() {
    localStorage.setItem('moto_user', JSON.stringify(user));
}

function switchView(viewName, callback = null) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[viewName].classList.add('active');
    
    // Restart animation
    views[viewName].style.animation = 'none';
    views[viewName].offsetHeight;
    views[viewName].style.animation = 'fadeIn 0.4s ease-out forwards';

    if (callback) callback();
}

function handleRegister(e) {
    e.preventDefault();
    user.name = document.getElementById('reg-name').value.trim();
    user.email = document.getElementById('reg-email').value.trim();
    user.studyIndex = 0;
    user.lastScore = null;
    saveUser();
    switchView('dashboard', updateDashboard);
}

function handleLogout() {
    localStorage.removeItem('moto_user');
    user = { name: '', email: '', studyIndex: 0, lastScore: null };
    document.getElementById('register-form').reset();
    switchView('landing');
}

function updateDashboard() {
    document.getElementById('dash-name').textContent = user.name;
    
    // Study Progress
    const progressPercent = Math.round((user.studyIndex / questionsData.length) * 100);
    document.getElementById('study-progress-text').textContent = `${progressPercent}%`;
    document.getElementById('study-progress-fill').style.width = `${progressPercent}%`;

    // Exam stats
    if (user.lastScore !== null) {
        const examPercent = Math.round((user.lastScore / 40) * 100);
        document.getElementById('last-score-text').textContent = `${user.lastScore}/40 (${examPercent}%)`;
        document.getElementById('last-score-text').style.color = examPercent >= 80 ? 'var(--success)' : 'var(--error)';
    } else {
        document.getElementById('last-score-text').textContent = 'N/A';
        document.getElementById('last-score-text').style.color = 'inherit';
    }
}

// --- STUDY MODE ---
function initStudy() {
    renderStudyQuestion();
}

function renderStudyQuestion() {
    const q = questionsData[user.studyIndex];
    document.getElementById('study-q-text').textContent = `${q.id}. ${q.question}`;
    
    const optionsContainer = document.getElementById('study-options');
    optionsContainer.innerHTML = '';

    for (const [key, val] of Object.entries(q.options)) {
        const div = document.createElement('div');
        div.className = 'option';
        if (key === q.answer) div.classList.add('highlighted-correct');
        
        div.innerHTML = `<span class="option-letter">${key})</span> <span>${val}</span>`;
        optionsContainer.appendChild(div);
    }

    // Update Progress
    document.getElementById('study-current').textContent = user.studyIndex + 1;
    document.getElementById('study-fill').style.width = `${((user.studyIndex + 1) / questionsData.length) * 100}%`;

    // Buttons
    document.getElementById('btn-study-prev').disabled = user.studyIndex === 0;
    document.getElementById('btn-study-next').disabled = user.studyIndex === questionsData.length - 1;
}

function studyNext() {
    if (user.studyIndex < questionsData.length - 1) {
        user.studyIndex++;
        saveUser();
        triggerCardAnimation('view-study');
        renderStudyQuestion();
    }
}

function studyPrev() {
    if (user.studyIndex > 0) {
        user.studyIndex--;
        saveUser();
        triggerCardAnimation('view-study');
        renderStudyQuestion();
    }
}

function triggerCardAnimation(viewId) {
    const card = document.querySelector(`#${viewId} .card-content`);
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'fadeIn 0.3s ease-out';
}

// --- EXAM MODE ---
function initExam() {
    // Generate 40 random questions
    let shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    examState.questions = shuffled.slice(0, 40);
    examState.currentIndex = 0;
    examState.score = 0;
    examState.failed = [];
    
    renderExamQuestion();
}

function renderExamQuestion() {
    const q = examState.questions[examState.currentIndex];
    document.getElementById('exam-q-text').textContent = `${examState.currentIndex + 1}. ${q.question}`;
    
    const optionsContainer = document.getElementById('exam-options');
    optionsContainer.innerHTML = '';
    optionsContainer.classList.remove('locked');
    
    const btnNext = document.getElementById('btn-exam-next');
    btnNext.disabled = true;
    btnNext.textContent = 'Confirmar';
    btnNext.dataset.state = 'confirm'; // confirm or next

    for (const [key, val] of Object.entries(q.options)) {
        const div = document.createElement('div');
        div.className = 'option';
        div.dataset.key = key;
        div.innerHTML = `<span class="option-letter">${key})</span> <span>${val}</span>`;
        
        div.addEventListener('click', () => {
            if (optionsContainer.classList.contains('locked')) return;
            
            // Remove selection from others
            optionsContainer.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
            div.classList.add('selected');
            btnNext.disabled = false;
        });

        optionsContainer.appendChild(div);
    }

    // Update Progress
    document.getElementById('exam-current').textContent = examState.currentIndex + 1;
    document.getElementById('exam-fill').style.width = `${((examState.currentIndex + 1) / 40) * 100}%`;
}

function examNext() {
    const btn = document.getElementById('btn-exam-next');
    const optionsContainer = document.getElementById('exam-options');
    const q = examState.questions[examState.currentIndex];

    if (btn.dataset.state === 'confirm') {
        // Lock and evaluate
        optionsContainer.classList.add('locked');
        const selected = optionsContainer.querySelector('.option.selected');
        const selectedKey = selected ? selected.dataset.key : null;
        
        if (selectedKey === q.answer) {
            examState.score++;
            selected.classList.add('correct');
        } else {
            if (selected) selected.classList.add('wrong');
            // Highlight correct one
            const correctOpt = optionsContainer.querySelector(`.option[data-key="${q.answer}"]`);
            if (correctOpt) correctOpt.classList.add('correct');
            
            // Save to failed
            examState.failed.push({
                question: q.question,
                correctVal: q.options[q.answer],
                correctKey: q.answer
            });
        }
        
        btn.textContent = examState.currentIndex === 39 ? 'Ver Resultados' : 'Siguiente Pregunta';
        btn.dataset.state = 'next';
    } else {
        // Move to next
        if (examState.currentIndex < 39) {
            examState.currentIndex++;
            triggerCardAnimation('view-exam');
            renderExamQuestion();
        } else {
            finishExam();
        }
    }
}

function finishExam() {
    // Save score
    user.lastScore = examState.score;
    saveUser();

    // Render result
    const percent = Math.round((examState.score / 40) * 100);
    document.getElementById('score-percentage').textContent = `${percent}%`;
    document.getElementById('score-correct').textContent = examState.score;
    
    // Animate circle chart (stroke-dasharray="percent, 100")
    const circle = document.getElementById('score-circle-path');
    setTimeout(() => {
        circle.setAttribute('stroke-dasharray', `${percent}, 100`);
        // Color based on score
        if (percent >= 80) circle.style.stroke = 'var(--success)';
        else if (percent >= 50) circle.style.stroke = 'var(--warning)';
        else circle.style.stroke = 'var(--error)';
    }, 100);

    // Failed list
    const failedContainer = document.getElementById('failed-questions-container');
    const failedList = document.getElementById('failed-list');
    failedList.innerHTML = '';
    
    if (examState.failed.length > 0) {
        failedContainer.style.display = 'block';
        examState.failed.forEach(f => {
            failedList.innerHTML += `
                <div class="failed-item">
                    <div class="failed-q">${f.question}</div>
                    <div class="failed-ans">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5l10 -10"/></svg>
                        ${f.correctKey.toUpperCase()}) ${f.correctVal}
                    </div>
                </div>
            `;
        });
    } else {
        failedContainer.style.display = 'none';
    }

    switchView('result');
}
