import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Smartphone, Shield, Star, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description: "Veja mudanças reais em apenas 5-7 dias. Sem esperas intermináveis, transformação imediata.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "100% Digital",
      description: "Acesso instantâneo via e-mail. Compatível com celular e desktop. Use quando e onde quiser.",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Foco no Bem-Estar",
      description: "Métodos que respeitam seu corpo e sua mente. Sem dietas malucas ou promessas impossíveis.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Acesso Vitalício",
      description: "Comprou uma vez? É seu para sempre. Repita os protocolos quantas vezes precisar.",
      color: "text-wellness"
    },
    {
      icon: Star,
      title: "Preços Acessíveis",
      description: "Transformação real por menos de R$ 50. Investimento que cabe no seu orçamento.",
      color: "text-coral"
    },
    {
      icon: Zap,
      title: "Rotinas Simples",
      description: "De 10 a 15 minutos por dia. Métodos práticos que se encaixam na sua vida corrida.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por Que Nossas
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Clientes Amam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Produtos pensados para a realidade da mulher moderna: prática, eficácia e acessibilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Icon className={`w-12 h-12 mx-auto ${benefit.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-semibold">Mais de 1.000 mulheres já transformaram suas vidas</span>
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;