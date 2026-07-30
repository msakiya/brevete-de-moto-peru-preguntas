import pypdf
import re
import json
import os

def extract():
    pdf_path = 'balotario_Compressed.pdf'
    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} not found")
        return
        
    reader = pypdf.PdfReader(pdf_path)
    text = ''
    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text + '\n'

    questions = []
    current_q = None

    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check if line starts with a number followed by '.-'
        match = re.match(r'^(\d+)\.-\s+(.*)', line)
        if match:
            if current_q:
                questions.append(current_q)
            current_q = {
                'num': match.group(1),
                'question_lines': [match.group(2)],
                'options': {},
                'answer': ''
            }
            continue
            
        if not current_q:
            continue
            
        # Check if it's an option (a), b), c), d))
        opt_match = re.match(r'^([a-d])\)\s+(.*)', line)
        if opt_match:
            current_q['options'][opt_match.group(1)] = opt_match.group(2)
            continue
            
        # Check if it's the answer line
        ans_match = re.match(r'^Respuesta:\s+([a-d])', line, re.IGNORECASE)
        if ans_match:
            current_q['answer'] = ans_match.group(1).lower()
            continue
            
        # If it's none of the above, but we haven't seen any options yet, it's likely part of the question text
        if not current_q['options'] and not current_q['answer'] and "El Peruano" not in line and "NORMAS LEGALES" not in line:
             current_q['question_lines'].append(line)

    if current_q:
        questions.append(current_q)
        
    processed = []
    for q in questions:
        # Only add questions that have options and an answer
        if q['options'] and q['answer']:
            processed.append({
                'id': int(q['num']),
                'question': " ".join(q['question_lines']),
                'options': q['options'],
                'answer': q['answer']
            })

    # Due to some OCR/pdf extraction issues, some questions might be missing options. Let's just output what we got successfully.
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write('const questionsData = ' + json.dumps(processed, indent=2, ensure_ascii=False) + ';')
    
    print(f"Extracted {len(processed)} questions to data.js")

if __name__ == '__main__':
    extract()
