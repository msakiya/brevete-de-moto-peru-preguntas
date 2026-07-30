let currentIndex = 0;
let questions = [];

document.addEventListener('DOMContentLoaded', () => {
    // Check if questionsData is loaded from data.js
    if (typeof questionsData !== 'undefined' && questionsData.length > 0) {
        questions = questionsData;
        document.getElementById('total-pages').textContent = questions.length;
        renderQuestion(currentIndex);
    } else {
        document.getElementById('question-text').textContent = "No se pudieron cargar las preguntas.";
        document.getElementById('answer-text').textContent = "Verifique que el archivo data.js exista y contenga los datos.";
    }

    // Event listeners for buttons
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    btnNext.addEventListener('click', () => {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            renderWithAnimation();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderWithAnimation();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentIndex < questions.length - 1) {
                currentIndex++;
                renderWithAnimation();
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex--;
                renderWithAnimation();
            }
        }
    });
});

function renderWithAnimation() {
    const cardContent = document.getElementById('card-content');
    // Reset animation
    cardContent.style.animation = 'none';
    cardContent.offsetHeight; // trigger reflow
    cardContent.style.animation = 'fadeIn 0.4s ease-out';
    
    renderQuestion(currentIndex);
}

function renderQuestion(index) {
    const q = questions[index];
    
    // Update text
    document.getElementById('question-text').textContent = q.question;
    
    // Handle answers that might be empty or unparsed
    const answerEl = document.getElementById('answer-text');
    if (q.answer.trim()) {
        answerEl.textContent = q.answer;
        answerEl.style.display = 'block';
    } else {
        answerEl.style.display = 'none';
    }

    // Update progress
    document.getElementById('current-page').textContent = index + 1;
    const progressPercent = ((index + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;

    // Update buttons state
    document.getElementById('btn-prev').disabled = index === 0;
    document.getElementById('btn-next').disabled = index === questions.length - 1;
    
    // If it's the last question, change next button text slightly
    const btnNext = document.getElementById('btn-next');
    if (index === questions.length - 1) {
        btnNext.innerHTML = 'Finalizado <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg>';
    } else {
        btnNext.innerHTML = 'Siguiente <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
    }
}
