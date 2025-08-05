import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-soft pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-hero text-primary-foreground">
            <Star className="w-4 h-4 mr-2" />
            Transformação Completa
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme Seu
            <span className="bg-gradient-hero bg-clip-text text-transparent block">
              Bem-Estar
            </span>
            em 5-7 Dias
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra nossa coleção de produtos digitais para desinchar, cuidar da pele e firmar o corpo. 
            Resultados reais, métodos simples, transformação garantida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="cta"
              size="lg"
              onClick={scrollToProducts}
              className="w-full sm:w-auto"
            >
              <Heart className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span>Resultados em dias, não meses</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5-7</div>
              <div className="text-muted-foreground">Dias para resultados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Digital e acessível</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-muted-foreground">Produtos transformadores</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;