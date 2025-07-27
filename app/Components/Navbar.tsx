import { CircleUser, MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { HoverCard } from "radix-ui";
import { navItems } from "constants/index";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#home" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">KalemTech</span> Portofolio
                    </span>
                </a>

                {/* Desktop Navbar */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}

                    <HoverCard.Root>
                        <HoverCard.Trigger asChild>
                            <a href="https://github.com/kalemtzis" className="ImageTrigger" target="_blank">
                                <CircleUser />
                            </a>
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                            <HoverCard.Content className="HoverCardContent mt-2 px-4 shadow-xl card" sideOffset={0}>
                                <div className="flex flex-col gap-8">
                                    <CircleUser size={30} />
                                
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <div className="text-bold">KalemTech</div>
                                            <a 
                                                href="https://github.com/kalemtzis" 
                                                target="_blank" 
                                                className="text-gray-500 hover:text-primary transition-colors duration-300"
                                            >
                                                @kalemtzis
                                            </a>
                                        </div>
                                        <div>   
                                            Description
                                        </div>
                                    </div>
                                </div>
                                <HoverCard.Arrow className="HoverCardArrow" />
                            </HoverCard.Content>
                        </HoverCard.Portal>
                    </HoverCard.Root>
                </div>

                {/* Mobile Navbar */}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50" 
                    aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                    {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="space-y-8 flex flex-col text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                href={item.href} 
                                key={key} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;