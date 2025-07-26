import { Briefcase, Code, User } from "lucide-react";

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
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export interface Skill {
    name: string;
    level: number;
    category: string;
    url: string;
}

export const skills: Skill[] = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend", url: 'https://en.wikipedia.org/wiki/HTML' },
    { name: "JavaScript", level: 90, category: "frontend", url: 'https://en.wikipedia.org/wiki/JavaScript' },
    { name: "React", level: 90, category: "frontend", url: 'https://react.dev/' },
    { name: "TypeScript", level: 85, category: "frontend", url: 'https://www.typescriptlang.org/' },
    { name: "Tailwind CSS", level: 90, category: "frontend", url: 'https://tailwindcss.com/' },
    { name: "Next.js", level: 80, category: "frontend", url: 'https://nextjs.org/' },

    // Backend
    { name: "Node.js", level: 80, category: "backend", url: 'https://nodejs.org/en' },
    { name: "Express", level: 75, category: "backend", url: 'https://expressjs.com/' },
    { name: "MongoDB", level: 70, category: "backend", url: 'https://www.mongodb.com/' },
    { name: "PostgreSQL", level: 65, category: "backend", url: 'https://www.postgresql.org/' },
    { name: "GraphQL", level: 60, category: "backend", url: 'https://graphql.org/' },
    
    // AI-ML
    {name: 'TensorFlow', level: 95, category: 'ML', url: 'https://www.tensorflow.org/'},
    {name: 'PyTorch', level: 95, category: 'ML', url: 'https://pytorch.org/'},
    {name: 'Jax', level: 95, category: 'ML', url: 'https://docs.jax.dev/en/latest/index.html'},
    {name: 'Scikit-Learn', level: 95, category: 'ML', url: 'https://scikit-learn.org/stable/'},
    {name: 'Optuna', level: 95, category: 'ML', url: 'https://optuna.org/'},

    // Data Analysis
    { name: 'NumPy', level: 95, category: 'data', url: 'https://numpy.org/' },
    { name: 'Seaborn', level: 95, category: 'data', url: 'https://seaborn.pydata.org/' },
    { name: 'Matplotlib', level: 95, category: 'data', url: 'https://matplotlib.org/' },
    { name: 'Pandas', level: 95, category: 'data', url: 'https://pandas.pydata.org/' },
    { name: 'Streamlit', level: 95, category: 'data', url: 'https://streamlit.io/' },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools", url: 'https://git-scm.com/' },
    { name: "Docker", level: 70, category: "tools", url: 'https://www.docker.com/' },
    { name: "Figma", level: 85, category: "tools", url: 'https://www.figma.com/' },
    { name: 'Jupyter Notebook', level: 90, category: 'tools', url: 'https://jupyter.org/' },
    { name: "VS Code", level: 95, category: "tools", url: 'https://code.visualstudio.com/' },
]

export const projects = [
    {
        id: 1,
        title: 'Saas Landing Page',
        description: 'A beautiful landing page app using React and Tailwind CSS.',
        image: "/projects/project1.png",
        tags: ['React', 'TailwindCSS', 'Superbase'],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Orbit Analytics Dashboard",
        description:
        "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/projects/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "E-commerce Platform",
        description:
        "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/project3.png",
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
    },
]