import Card from "./Card";
import { CardInformation } from "constants/index";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Passionate Web Developer & ML expert</h3>
                        <p className="text-muted-foreground">
                            With over _ years of experience in web development and machine learning, I specialize
                            in creating responsive, accessible and performant web apps using modern technologies,
                            learning and creating NN models, including LLM functionalities.
                        </p>
                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex problems, and I'm constantly 
                            learning new technologies and techniques to stay at the forefront.    
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download  CV
                            </a>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6"> 
                        {CardInformation.map((info, key) => (
                            <Card info={info} key={key} />
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default AboutSection;