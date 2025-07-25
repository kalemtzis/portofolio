import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <ContactForm />
        </section>
    )
}

export default ContactSection;