export const projectsData = [
    {
        id: 1,
        name: 'Jackbot - AI Legal Assistant',
        description: "Intelligent conversational assistant specializing in French administrative law and government processes. This project deploys a complete RAG (Retrieval-Augmented Generation) pipeline using the Qwen LLM and BGE-M3 embedding with ChromaDB for accurate and contextualized responses. The entire infrastructure is containerized with Docker and Docker Compose, ensuring isolated and scalable deployment.",
        tools: ['Qwen LLM', 'BGE-M3', 'RAG', 'Docker', 'Docker Compose', 'ChromaDB', 'Nginx', 'FastAPI', 'Ollama'],
        role: 'Full Stack Developer / MLOps',
        code: 'https://github.com/SlashFR1/chatbot.git',
        demo: '',
    },
    {
        id: 2,
        name: 'AMICI - Intelligent Assistant (Microservices)',
        description: "Development of an intelligent assistant application. The Backend (Python/FastAPI/Transformers) is dedicated to analysis (e.g., sentiment analysis), and the Frontend (Nginx/Vanilla JS) offers a modern interface with real-time chat and warm/dark theme support. The application uses local LLM models (Ollama /phi-3/bert) for an external-API-free solution, orchestrated via Docker Compose.",
        tools: ['Python', 'FastAPI', 'Transformers', 'Docker', 'Docker Compose', 'Nginx', 'Vanilla JavaScript', 'Ollama', 'phi-3', 'bert'],
        role: 'Full Stack Developer / Microservices Architect',
        code: 'https://github.com/SlashFR1/AMICI.git',
        demo: '',
    },
    {
        id: 3,
        name: 'ingenapp - Engineering Toolbox (CLI)',
        description: "A command-line based engineering toolbox (CLI) designed to assist engineering students in their daily tasks. The program provides a collection of practical utilities accessible directly from the terminal, prioritizing efficiency and the lack of a graphical interface.",
        tools: ['Command-Line Interface (CLI)', 'Python', 'Utilities'],
        role: 'Software Developer',
        code: 'https://github.com/SlashFR1/InGenApp.git',
        demo: '',
    },
    {
        id: 4,
        name: 'Literary Project: Une fleur de réflexion',
        description: "This project involves the writing of the book 'Une fleur de réflexion' (A Flower of Reflection), which articulates a personal vision of the world. It also encompasses participation in  Eloquence and Writing Competitions  ('concours'), demonstrating advanced skills in creative writing, public speaking, and French literary expression.",
        tools: ['Creative Writing', 'Public Speaking (Eloquence)', 'Literary Competition', 'French Expression'],
        role: 'Writer / Orator',
        code: '',
        demo: '',
    }
];