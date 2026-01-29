
"use client"

import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PortfolioCard from "../portfolio-card";
import { Card, CardContent } from "@/components/ui/card";
import { codingProjects, uiUxDesigns, videoEditing, graphicDesigns } from "@/data/portfolio-data";

export default function PortfolioSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="portfolio" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">My <span className="text-primary">Portfolio</span></h2>
                <Tabs defaultValue="graphics" className="w-full">
                    <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 h-auto md:h-12 mb-8">
                        <TabsTrigger value="coding">Coding</TabsTrigger>
                        <TabsTrigger value="ui-ux">UI/UX Design</TabsTrigger>
                        <TabsTrigger value="video">Video Editing</TabsTrigger>
                        <TabsTrigger value="graphics">Graphic Design</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="coding" className="fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {codingProjects.map((project, i) => <PortfolioCard key={i} {...project} />)}
                        </div>
                    </TabsContent>

                    <TabsContent value="ui-ux" className="fade-in">
                        <Carousel className="w-full max-w-4xl mx-auto">
                            <CarouselContent>
                                {uiUxDesigns.map((design, i) => (
                                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                                        <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col" onClick={() => setSelectedImage(design.image)}>
                                            <CardContent className="p-0 relative">
                                                <Image src={design.image} alt={design.title} width={800} height={600} className="object-cover w-full h-auto aspect-video group-hover:scale-105 transition-transform duration-500" data-ai-hint={design.aiHint}/>
                                            </CardContent>
                                            <div className="p-4 flex-grow">
                                                 <h4 className="text-md font-semibold text-foreground truncate">{design.title}</h4>
                                            </div>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </TabsContent>
                    
                    <TabsContent value="video" className="fade-in">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videoEditing.map((video, i) => <PortfolioCard key={i} {...video} />)}
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="graphics" className="fade-in">
                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                           {graphicDesigns.map((design, i) => <PortfolioCard key={i} {...design} />)}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            {selectedImage && (
                <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
                    <DialogContent className="max-w-3xl p-0">
                         <Image src={selectedImage} alt="Selected UI/UX Design" width={1200} height={800} className="rounded-lg object-contain" />
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
}
