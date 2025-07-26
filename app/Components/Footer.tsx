import { ArrowUp } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative borded-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Kalem.co, All rights reserved.
            </p>

            <a href="#home" className="rounded-full p-2 bg-primary/10 hover:bg-primary/20 text-primary transition-colors"><ArrowUp size={20} /></a>
        </footer>
    )
}

export default Footer;