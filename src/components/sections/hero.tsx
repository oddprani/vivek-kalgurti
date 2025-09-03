import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import { Download } from "lucide-react";
import TypingAnimation from "../typing-animation";

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/vivekkalgurti/", name: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@oddpranii?si=J7k5ic9GkSw2LMUu", name: "YouTube" },
    { icon: Twitter, href: "https://x.com/vivekkalgurti", name: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vivek-kalgurti-10b8b9220", name: "LinkedIn" },
    { icon: Github, href: "https://github.com/oddprani", name: "GitHub" }
];

export default function HeroSection() {
    return (
        <section id="home" className="container mx-auto px-4 py-32 min-h-screen flex items-center">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                        Vivek Kalgurti
                    </h1>
                    <h3 className="text-2xl md:text-4xl font-semibold mb-6 h-10">
                        And I am a <TypingAnimation texts={['Freelance Editor', 'Youtuber', 'Graphic Designer', 'Front-end Dev', 'UI/UX Designer']} />
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                        Crafting captivating visual narratives, I specialize in branding solutions that blend creativity with functionality. With a keen eye for detail and a passion for design, I excel in coding, UI/UX, video editing, and graphic design.
                    </p>
                    <div className="flex justify-center md:justify-start gap-3 mb-8">
                        {socialLinks.map((social) => (
                            <Link href={social.href} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:bg-secondary">
                                    <social.icon className="h-6 w-6" />
                                </Button>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="#portfolio">
                            <Button size="lg" className="w-full sm:w-auto">
                                View My Work
                            </Button>
                        </Link>
                         <a href="https://raw.githubusercontent.com/oddprani/oddprani/main/vivekkalgurti.pdf" download>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                <Download className="mr-2 h-5 w-5" />
                                Download CV
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="relative flex justify-center items-center h-full">
                     <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg p-2 z-10">
                        <Image
                            src="/docs/pfp.png"
                            alt="Vivek Kalgurti Profile Picture"
                            width={400}
                            height={400}
                            className="rounded-full object-cover w-full h-full"
                            priority
                            data-ai-hint="profile picture"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
