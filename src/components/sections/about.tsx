import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group mx-auto">
                        <div className="relative rounded-lg overflow-hidden shadow-lg w-fit">
                             <Image
                                src="/docs/about.png"
                                alt="About me"
                                width={600}
                                height={700}
                                className="object-cover max-w-sm h-auto"
                                data-ai-hint="designer workspace"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                        <h3 className="text-2xl font-semibold text-foreground/80 mb-6">AKA Oddprani</h3>
                        <p className="text-lg text-muted-foreground mb-4">
                            Yes, I am looking forward to learn new things along with my studies. As a freelancer I have created some intermediate level posters and artworks, and yes I am open to work!
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                           I am passionate about building beautiful and functional digital experiences. From designing intuitive user interfaces to developing robust back-end systems, I love bringing ideas to life through code and design.
                        </p>
                        <Button size="lg">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
