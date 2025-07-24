import type { LucideIcon } from "lucide-react";

interface CardProps {
    title: string;
    desc: string;
    icon: LucideIcon;
}

const Card = ({ title, desc, icon: Icon }: CardProps) => {
    return (
        <a href="#" className="card-hover p-6 gradient-border cursor-pointer">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="text-primary h-6 w-6" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{desc}</p>
                </div>
            </div>
        </a>
    )
}

export default Card;