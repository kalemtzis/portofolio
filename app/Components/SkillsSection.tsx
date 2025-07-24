import { skills, type Skill, websiteLinks } from "constants/index";
import SkillCard from "./SkillCard";
import SkillSelectionBar from "./SkillSelectionBar";
import { useEffect, useState } from "react";

const SkillsSection = () => {
    const [activeCategory, setActiveCatergory] = useState('All');
    const [activeSkills, setActiveSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const filteredSkills = skills.filter(skill => activeCategory === 'All' || activeCategory === skill.category);
        setActiveSkills(filteredSkills);
    }, [activeCategory])    

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <SkillSelectionBar activeCategory={activeCategory} setActiveCategory={setActiveCatergory} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeSkills.map((skill, key) => (
                        <a href={`${websiteLinks.at(key)}`} target="_blank" rel="noopener noreferrer">
                            <SkillCard title={skill.name} level={skill.level} key={key} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;