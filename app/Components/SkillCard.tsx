interface SkillCardProps {
    title: string;
    level: number;
}

const SkillCard = ({ title, level }: SkillCardProps) => {
    return (
        <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
            <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className={`bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]`} style={{width: `${level}%`}}/>
            </div>
            <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{level}%</span>
            </div>
        </div>
    )
}

export default SkillCard;