import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  aiHint: string;
}

export default function PortfolioCard({ title, description, image, link, aiHint }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0 relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-auto aspect-video group-hover:scale-105 transition-transform duration-500"
          data-ai-hint={aiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h4 className="text-lg font-bold text-white">{title}</h4>
          <p className="text-sm text-white/80 line-clamp-2">{description}</p>
        </div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="secondary" className="rounded-full h-8 w-8">
                    <LinkIcon className="w-4 h-4" />
                </Button>
            </Link>
        </div>
      </CardContent>
    </Card>
  );
}
