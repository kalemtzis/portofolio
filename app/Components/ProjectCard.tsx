import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    info: {
        id: number;
        title: string;
        description: string;
        image: string;
        tags: string[];
        demoUrl: string;
        githubUrl: string;
    }
}

const ProjectCard = ({ info }: ProjectCardProps) => {
    return (
        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2 pb-2 px-4">{info.title}</h3>

            <div className="flex justify-between items-start">
                <div className="flex space-x-3 pb-4 px-4">
                    <a href={info.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                        <ExternalLink size={20}/>
                    </a>
                    <a href={info.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                        <Github size={20} />
                    </a>
                </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4 px-4">{info.description}</p>

            <div className="h-48 overflow-hidden">
                <img src={info.image} alt={info.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {info.tags.map((tag, index) => (
                        <span key={`${info.id}-${tag}-${index}`} className="px-2 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;