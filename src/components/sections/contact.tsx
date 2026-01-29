import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact <span className="text-primary">Me!</span></h2>
                <div className="max-w-3xl mx-auto border rounded-lg p-8 md:p-12 shadow-sm">
                    <form action="https://formspree.io/f/myzkaonq" method="POST">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="full_name" className="block text-sm font-medium mb-2 text-muted-foreground">Full Name</label>
                                <Input type="text" name="full_name" id="full_name" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email Address</label>
                                <Input type="email" name="email" id="email" placeholder="you@example.com" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="mobile_number" className="block text-sm font-medium mb-2 text-muted-foreground">Mobile Number (Optional)</label>
                                <Input type="tel" name="mobile_number" id="mobile_number" placeholder="(123) 456-7890" />
                            </div>
                            <div>
                                <label htmlFor="email_subject" className="block text-sm font-medium mb-2 text-muted-foreground">Email Subject</label>
                                <Input type="text" name="email_subject" id="email_subject" placeholder="Regarding..." required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Your Message</label>
                            <Textarea name="message" id="message" rows={5} placeholder="Your message here..." required />
                        </div>
                        <div className="text-center">
                            <Button type="submit" size="lg" className="px-10 text-lg">Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
