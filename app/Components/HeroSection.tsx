import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled])

    return (
        <section id='home' className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Vasilis</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2 ml-2"> Kalemtzis</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create web sites experiences with modern technologies.
                        Specializing in full-stack development, I build interfaces that are 
                        both functional and beautiful.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {!isScrolled &&
                <div className="absolute bottom-8 left-1/2 -transform-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            }
        </section>
    )
}

export default HeroSection;