import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, Clock, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  originalPrice?: string;
  features: string[];
  bonus: string[];
  gradient: "hero" | "wellness" | "coral";
  duration: string;
  target: string;
}

const ProductCard = ({
  id,
  title,
  subtitle,
  image,
  price,
  originalPrice,
  features,
  bonus,
  gradient,
  duration,
  target
}: ProductCardProps) => {
  const gradientClasses = {
    hero: "bg-gradient-hero",
    wellness: "bg-gradient-wellness", 
    coral: "bg-gradient-coral"
  };

  const buttonVariants = {
    hero: "cta",
    wellness: "wellness",
    coral: "coral"
  } as const;

  return (
    <Card className="group hover:shadow-glow transition-all duration-500 transform hover:scale-105 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 ${gradientClasses[gradient]} opacity-80`}></div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-background/90 text-foreground">
              <Clock className="w-3 h-3 mr-1" />
              {duration}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/90 text-sm">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-6">
          <p className="text-muted-foreground mb-4">{target}</p>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-foreground">{price}</span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through ml-2">
                  {originalPrice}
                </span>
              )}
            </div>
            <Badge variant="secondary" className="flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Oferta
            </Badge>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">O que você recebe:</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 flex items-center">
              <Gift className="w-4 h-4 mr-2 text-accent" />
              Bônus Exclusivos:
            </h4>
            <ul className="space-y-1">
              {bonus.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button
          variant={buttonVariants[gradient]}
          size="lg"
          className="w-full"
        >
          Quero Começar Agora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;