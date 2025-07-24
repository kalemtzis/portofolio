import { skills } from "constants/index";
import { cn } from "~/lib/utils";

interface SkillSelectionBarProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const SkillSelectionBar = ({ activeCategory, setActiveCategory }: SkillSelectionBarProps) => {
    const categories = ['All', ...new Set(skills.map(item => item.category))]

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button 
                    key={key} 
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                        activeCategory === category ? 'bg-primary text-primary-foreground' : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default SkillSelectionBar;