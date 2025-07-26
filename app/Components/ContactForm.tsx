import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, SendIcon, Twitch, Twitter } from "lucide-react";
import { useState, type FormEvent } from "react";
import { cn } from "~/lib/utils";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ContactForm = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ACCESS_KEY = 'c2f7b7bc-fe38-4d1d-8b30-feb4fe53fca9';

        setIsSubmit(true);

        formData.append('access_key', ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json'
            },
            body: json
        }).then((res) => res.json());

        if(res.success) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            navigate('#home')
            
        }
        
        setIsSubmit(false);
    }

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 flex flex-col justify-around">
                <h3 className="text-2xl text-semibold mb-6">Contact Information</h3>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-4 rounded-4xl bg-primary/10 card-hover">
                            <Mail className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:b.kalemtzis@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    b.kalemtzis@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-4 rounded-4xl bg-primary/10 card-hover">
                            <Phone className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+306942774258" className="text-muted-foreground hover:text-primary transition-colors">
                                    +30-694-277-4258
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-4 rounded-4xl bg-primary/10 card-hover">
                            <MapPin className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground">
                                    Thessaloniki, Central Macedonia, Greece
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl text-semibold mb-6">Send a Message</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id='name' 
                                name='name' 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="Vasilis Kalemtzis..." 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                            <input 
                                type="email" 
                                id='email' 
                                name='email' 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                placeholder="john@gmail.com..." 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="message">Your Name</label>
                            <textarea 
                                id='message' 
                                name='message' 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                placeholder="Send a Message" 
                            />
                        </div>

                        <button type='submit' disabled={isSubmit} className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",

                        )}>
                            {isSubmit ? "Sending...." : "Send Message"}
                            <SendIcon size={16} />
                        </button>
                    </form>
                </div>
        </div>
        <div className="pt-8 flex flex-col justify-center items-center mt-4">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" target="_blank" className="hover:text-primary transition-colors duration-100">
                                <Linkedin />
                            </a>
                            <a href="#" target="_blank" className="hover:text-primary transition-colors duration-100">
                                <Twitter />
                            </a>
                            <a href="#" target="_blank" className="hover:text-primary transition-colors duration-100">
                                <Instagram />
                            </a>
                            <a href="#" target="_blank" className="hover:text-primary transition-colors duration-100">
                                <Facebook />
                            </a>
                            <a href="#" target="_blank" className="hover:text-primary transition-colors duration-100">
                                <Twitch />
                            </a>
                        </div>
                    </div>
        </>
    )
}

export default ContactForm;