const langData = {
    'pt': {
        'nav_about': 'Sobre',
        'nav_skills': 'Habilidades',
        'nav_design': 'Design & Mídia',
        'hero_title': 'Olá, sou <span class="highlight-name">Nayane Rios</span>',
        'hero_subtitle': 'Tecnologia da Informação & Design',
        'hero_desc': 'Estudante da UFMS, explorando o universo do código e da criatividade.',

        // Novas chaves de Habilidades
        'skill_python_title': 'Python / JS',
        'skill_python_desc': 'Desenvolvimento Web & Automação',
        'skill_office': 'Análise de Dados (Básico) & Pacote Office',
        'skill_ia': 'Prompt Engineering & Copywriting',
        'skill_lang_title': 'Idiomas',
        'lang_en': 'Inglês (Avançado)',
        'lang_es': 'Espanhol (Intermediário)',

        'sec_design': 'Portfólio Criativo',
        'card_video': 'Edição de Vídeo',
        'card_art': 'Design Gráfico',
        'btn_projects': 'Ver Projetos →',
        'btn_arts': 'Ver Artes →',

        'video_details': `
            <li>Tratamento de Cor (Color Grading)</li>
            <li>Tratamento de Áudio & Mixagem</li>
            <li>Transições Avançadas</li>
            <li>Legendas Dinâmicas</li>`,

        'design_details': `
            <li>Identidade Visual</li>
            <li>Social Media Design</li>
            <li>Criação de Logos</li>
            <li>Estilos Diversos & Criativos</li>`,

        'sec_education': 'Formação & Cursos',
        // Novas chaves de Educação
        'edu_title': 'Graduação',
        'edu_course': 'Tecnologia da Informação',
        'edu_location': 'UFMS - Campo Grande/MS',
        'course_title': 'Certificações',
        'course_list': `
            <li>Pacote Office Profissional</li>
            <li>Formação Social Media Marketing</li>
            <li>Copywriting Avançado com IA</li>
            <li>QA: Qualidade de Software</li>
            <li>Gestão de Tráfego Pago e Mídia</li>`
    },
    'en': {
        'nav_about': 'About',
        'nav_skills': 'Skills',
        'nav_design': 'Design & Media',
        'hero_title': 'Hello, I am <span class="highlight-name">Nayane Rios</span>',
        'hero_subtitle': 'Information Technology & Design',
        'hero_desc': 'UFMS student, exploring the universe of code and creativity.',

        // Tradução das Habilidades
        'skill_python_title': 'Python / JS',
        'skill_python_desc': 'Web Development & Automation',
        'skill_office': 'Data Analysis (Basic) & Office Suite',
        'skill_ia': 'Prompt Engineering & Copywriting',
        'skill_lang_title': 'Languages',
        'lang_en': 'English (Advanced)',
        'lang_es': 'Spanish (Intermediate)',

        'sec_design': 'Creative Portfolio',
        'card_video': 'Video Editing',
        'card_art': 'Graphic Design',
        'btn_projects': 'View Projects →',
        'btn_arts': 'View Arts →',

        'video_details': `
            <li>Color Grading</li>
            <li>Audio Mixing & Treatment</li>
            <li>Advanced Transitions</li>
            <li>Dynamic Subtitles</li>`,

        'design_details': `
            <li>Visual Identity</li>
            <li>Social Media Design</li>
            <li>Logo Creation</li>
            <li>Diverse & Creative Styles</li>`,

        'sec_education': 'Education & Courses',
        // Tradução da Educação
        'edu_title': 'Degree',
        'edu_course': 'Information Technology',
        'edu_location': 'UFMS - Brazil',
        'course_title': 'Certifications',
        'course_list': `
            <li>Professional Office Suite</li>
            <li>Social Media Marketing Training</li>
            <li>Advanced Copywriting with AI</li>
            <li>QA: Software Quality</li>
            <li>Paid Traffic & Media Management</li>`
    }
};

let currentLang = 'pt';

document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    document.getElementById('lang-switch').innerText = currentLang === 'pt' ? 'EN / PT' : 'PT / EN';

    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(el => {
        const key = el.getAttribute('data-lang');

        if (langData[currentLang][key]) {
            const keysWithHtml = [
                'hero_title',
                'video_details',
                'design_details',
                'course_list'
            ];

            if (keysWithHtml.includes(key)) {
                el.innerHTML = langData[currentLang][key];
            } else {
                el.innerText = langData[currentLang][key];
            }
        }
    });
});