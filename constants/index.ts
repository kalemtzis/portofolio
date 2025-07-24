import { Briefcase, Code, User, type LucideIcon } from "lucide-react";

export const CardInformation = [
    {
        title: 'Full-Stack Development & Machine Learning',
        desc: 'Creating responsive websites and web applications with modern frameworks.',
        icon: Code
    },
    {
        title: 'UI/UX Design',
        desc: 'Design intuitive user interfaces and seamless user experiences.',
        icon: User
    },
    {
        title: 'Project Manager',
        desc: 'Leading project from conception to completion with agile methodologies.',
        icon: Briefcase
    },
]

export const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#contact' },
]

export interface Skill {
    name: string;
    level: number;
    category: string;
}

export const skills: Skill[] = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    { name: "GraphQL", level: 60, category: "backend" },
    
    // AI-ML
    {name: 'TensorFlow', level: 95, category: 'ML'},
    {name: 'PyTorch', level: 95, category: 'ML'},
    {name: 'Jax', level: 95, category: 'ML'},
    {name: 'Scikit-Learn', level: 95, category: 'ML'},
    {name: 'Optuna', level: 95, category: 'ML'},

    // Data Analysis
    { name: 'NumPy', level: 95, category: 'data' },
    { name: 'Seaborn', level: 95, category: 'data' },
    { name: 'Matplotlib', level: 95, category: 'data' },
    { name: 'Pandas', level: 95, category: 'data' },
    { name: 'Streamlit', level: 95, category: 'data' },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", level: 85, category: "tools" },
    { name: 'Jupyter Notebook', level: 90, category: 'tools' },
    { name: "VS Code", level: 95, category: "tools" },
]

export const websiteLinks = [
    'https://en.wikipedia.org/wiki/HTML',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://react.dev/',
    'https://www.typescriptlang.org/',
    'https://tailwindcss.com/',
    'https://nextjs.org/',
    'https://nodejs.org/en',
    'https://expressjs.com/',
    'https://www.mongodb.com/',
    'https://www.postgresql.org/',
    'https://graphql.org/',
    'https://www.tensorflow.org/',
    'https://pytorch.org/',
    'https://docs.jax.dev/en/latest/index.html',
    'https://scikit-learn.org/stable/',
    'https://optuna.org/',
    'https://numpy.org/',
    'https://seaborn.pydata.org/',
    'https://matplotlib.org/',
    'https://pandas.pydata.org/',
    'https://streamlit.io/',
    'https://git-scm.com/',
    'https://www.docker.com/',
    'https://www.figma.com/',
    'https://jupyter.org/',
    'https://code.visualstudio.com/',
]