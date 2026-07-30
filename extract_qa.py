import pypdf
import re
import json
import os

def extract():
    pdf_path = 'Balotario de Estudio - Licencia Clase B V4.pdf'
    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} not found")
        return
        
    reader = pypdf.PdfReader(pdf_path)
    text = ''
    for page in reader.pages:
        text += page.extract_text() + '\n'

    questions = []
    current_q = None

    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue
        # Skip header/footer if any (like "Balotario de Estudio...")
        if "Balotario de Estudio" in line or "Este documento contiene" in line or "correctas, correspondientes" in line:
            continue
            
        # Check if line starts with a number followed by a dot
        match = re.match(r'^(\d+)\.\s+(.*)', line)
        if match:
            if current_q:
                questions.append(current_q)
            current_q = {
                'num': match.group(1),
                'lines': [match.group(2)]
            }
        else:
            if current_q:
                current_q['lines'].append(line)
            
    if current_q:
        questions.append(current_q)
        
    processed = []
    for q in questions:
        q_text = ""
        a_text = ""
        lines = q['lines']
        
        split_idx = -1
        for i, l in enumerate(lines):
            if l.endswith(':') or l.endswith('?') or l.endswith('_____') or l.endswith('PARE?'):
                split_idx = i
                break
        
        if split_idx != -1 and split_idx < len(lines) - 1:
            q_text = " ".join(lines[:split_idx+1])
            a_text = " ".join(lines[split_idx+1:])
        else:
            q_text = " ".join(lines[:-1])
            a_text = lines[-1] if lines else ""
            
        processed.append({
            'num': q['num'],
            'question': q['num'] + ". " + q_text,
            'answer': a_text
        })

    with open('data.js', 'w', encoding='utf-8') as f:
        f.write('const questionsData = ' + json.dumps(processed, indent=2, ensure_ascii=False) + ';')
    print(f"Extracted {len(processed)} questions to data.js")

if __name__ == '__main__':
    extract()
