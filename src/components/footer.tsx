import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
    { icon: Github, href: "https://github.com/oddprani", name: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vivek-kalgurti-10b8b9220", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/vivekkalgurti/", name: "Instagram" },
    { icon: Twitter, href: "https://x.com/vivekkalgurti", name: "Twitter" },
    { icon: Youtube, href: "https://www.youtube.com/@oddpranii?si=J7k5ic9GkSw2LMUu", name: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="bg-secondary border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Vivek Kalgurti. All Rights Reserved.</p>
                    </div>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <Link href={social.href} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary transition-colors">
                                    <social.icon className="h-5 w-5" />
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
