import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import heroDesincha from "@/assets/hero-desincha.jpg";
import heroSkindetox from "@/assets/hero-skindetox.jpg";
import heroFitness from "@/assets/hero-fitness.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: "desincha",
      title: "Desincha Express",
      subtitle: "Sua Rotina Antiinchaço em 5 Dias",
      image: heroDesincha,
      price: "R$ 27,00",
      originalPrice: "R$ 47,00",
      duration: "5 dias",
      target: "Para mulheres entre 18-30 anos com inchaço abdominal, retenção de líquidos e falta de tempo para dietas complicadas.",
      features: [
        "Plano alimentar completo de 5 dias",
        "Refeições organizadas (café, almoço, lanche, jantar)",
        "Sugestões de substituição personalizadas",
        "Checklist diário imprimível",
        "Lista de mercado completa e acessível",
        "Dicas rápidas de preparo"
      ],
      bonus: [
        "Cardápio R$10/dia - refeições econômicas",
        "Playlist Desincha - músicas energizantes",
        "Receitas Detox - sucos, chás e águas saborizadas"
      ],
      gradient: "coral" as const
    },
    {
      id: "skindetox",
      title: "SkinDetox",
      subtitle: "Sua Pele Mais Leve em 7 Dias",
      image: heroSkindetox,
      price: "R$ 37,00",
      originalPrice: "R$ 57,00", 
      duration: "7 dias",
      target: "Para mulheres de 16-35 anos com pele oleosa, acneica ou com cravos que buscam soluções naturais e acessíveis.",
      features: [
        "E-book PDF interativo completo",
        "Protocolo diário SkinDetox detalhado",
        "Sugestões de ingredientes caseiros",
        "Checklist imprimível de 7 dias",
        "Explicação sobre causas da acne",
        "Rotina prática de 10 minutos por dia"
      ],
      bonus: [
        "Guia de Maquiagem Leve",
        "Desafio #SemFiltro7Dias para stories",
        "Receitas Naturais Extras (máscaras caseiras)",
        "Técnicas de relaxamento facial"
      ],
      gradient: "wellness" as const
    },
    {
      id: "fitness",
      title: "Corpo Mais Firme",
      subtitle: "Firmeza e Autoestima em 15 Min/Dia",
      image: heroFitness,
      price: "R$ 47,00",
      originalPrice: "R$ 67,00",
      duration: "7 dias",
      target: "Para mulheres entre 18-40+ anos que se sentem com o corpo flácido e desejam melhorar glúteos, barriga e postura.",
      features: [
        "Plano de treino 15 min/dia por 7 dias",
        "Treinos 100% em casa, sem equipamentos",
        "Guia visual com exercícios ilustrados",
        "Dicas de postura e respiração",
        "Checklists diários de acompanhamento",
        "Foco em autoestima e bem-estar"
      ],
      bonus: [
        "Cremes naturais anti-flacidez + automassagem",
        "Desafio #CorpoConfiante - evolução em 7 dias",
        "Checklist imprimível/digital personalizado"
      ],
      gradient: "hero" as const
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha Sua
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Transformação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Produtos digitais criados especialmente para mulheres que querem resultados reais, 
            rápidos e acessíveis sem sair de casa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-soft p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎁 Oferta Especial</h3>
            <p className="text-muted-foreground mb-6">
              Adquira os 3 produtos juntos e economize R$ 30! 
              Transformação completa: corpo, pele e bem-estar.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-2xl font-bold text-foreground">R$ 81,00</span>
              <span className="text-lg text-muted-foreground line-through">R$ 111,00</span>
            </div>
            <Button variant="cta" size="lg">
              Quero o Kit Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;