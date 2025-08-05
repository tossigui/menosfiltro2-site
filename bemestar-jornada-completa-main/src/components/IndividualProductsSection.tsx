import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, CheckCircle, Heart, Zap } from "lucide-react";
import heroDesincha from "@/assets/hero-desincha.jpg";
import heroSkindetox from "@/assets/hero-skindetox.jpg";
import heroFitness from "@/assets/hero-fitness.jpg";

const IndividualProductsSection = () => {
  const testimonials = {
    desincha: [
      {
        name: "Marina S.",
        age: 24,
        text: "Em 3 dias já senti a diferença! Não acreditava que seria tão simples. Perdi 2kg de inchaço e me sinto incrível!",
        rating: 5,
        city: "São Paulo"
      },
      {
        name: "Juliana R.",
        age: 28,
        text: "Finalmente um plano que funciona! Segui tudo certinho e em 5 dias estava com a barriga chapada. Já recomendei para todas as amigas.",
        rating: 5,
        city: "Rio de Janeiro"
      }
    ],
    skindetox: [
      {
        name: "Beatriz L.",
        age: 22,
        text: "Minha pele mudou completamente! Agora saio sem base e me sinto confiante. O protocolo é simples e realmente funciona.",
        rating: 5,
        city: "Belo Horizonte"
      },
      {
        name: "Camila F.",
        age: 19,
        text: "Sofria com espinhas desde os 15 anos. Em 1 semana minha pele estava mais limpa do que em anos de dermatologista!",
        rating: 5,
        city: "Brasília"
      }
    ],
    fitness: [
      {
        name: "Priscila M.",
        age: 32,
        text: "15 minutos que mudaram minha vida! Meu bumbum está mais durinho e minha postura melhorou muito. Super recomendo!",
        rating: 5,
        city: "Porto Alegre"
      },
      {
        name: "Amanda C.",
        age: 26,
        text: "Treino em casa há 2 semanas seguindo o plano. Já vejo diferença no corpo e na autoestima. Melhor investimento que fiz!",
        rating: 5,
        city: "Fortaleza"
      }
    ]
  };

  const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
    <Card className="bg-gradient-soft p-6 border-0">
      <CardContent className="p-0">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-muted-foreground text-sm">{testimonial.age} anos, {testimonial.city}</p>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Verificado
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  const UrgencyBanner = ({ timeLeft }: { timeLeft: string }) => (
    <div className="bg-gradient-cta text-white p-4 rounded-2xl text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="w-5 h-5" />
        <span className="font-bold">OFERTA POR TEMPO LIMITADO</span>
      </div>
      <p className="text-sm opacity-90">Apenas {timeLeft} restantes com desconto especial!</p>
    </div>
  );

  const SocialProof = ({ count, product }: { count: number, product: string }) => (
    <div className="flex items-center justify-center gap-6 py-6 bg-muted/50 rounded-2xl">
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-primary" />
        <span className="font-semibold">{count}+ mulheres</span>
      </div>
      <div className="flex items-center gap-2">
        <Heart className="w-5 h-5 text-primary" />
        <span className="font-semibold">já transformaram</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-primary" />
        <span className="font-semibold">suas vidas com {product}</span>
      </div>
    </div>
  );

  return (
    <section id="produtos-detalhes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Descubra Cada
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Transformação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mergulhe nos detalhes de cada produto e veja como milhares de mulheres já mudaram suas vidas
          </p>
        </div>

        <Tabs defaultValue="desincha" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-2 bg-background/50 backdrop-blur">
            <TabsTrigger value="desincha" className="py-4 px-6 data-[state=active]:bg-gradient-coral data-[state=active]:text-white">
              Desincha Express
            </TabsTrigger>
            <TabsTrigger value="skindetox" className="py-4 px-6 data-[state=active]:bg-gradient-wellness data-[state=active]:text-white">
              SkinDetox
            </TabsTrigger>
            <TabsTrigger value="fitness" className="py-4 px-6 data-[state=active]:bg-gradient-hero data-[state=active]:text-white">
              Corpo Mais Firme
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desincha" className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={heroDesincha} 
                  alt="Desincha Express" 
                  className="w-full rounded-3xl shadow-elegant object-cover h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-gradient-coral text-white border-0">
                    MAIS VENDIDO 🔥
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">Desincha Express</h3>
                  <p className="text-xl text-muted-foreground mb-6">
                    Sua Rotina Antiinchaço em 5 Dias
                  </p>
                </div>
                
                <UrgencyBanner timeLeft="23 horas" />
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Por que funciona tão bem?
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Combate as 3 causas do inchaço:</strong> sódio, açúcar e industrializados de forma científica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Resultados em 72 horas:</strong> você sente a diferença já no 3º dia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Sem fome, sem sofrimento:</strong> refeições gostosas que cabem na sua rotina</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-coral/10 p-6 rounded-2xl">
                  <h4 className="font-bold mb-3 text-lg">⚡ TRANSFORMAÇÃO RÁPIDA</h4>
                  <p className="text-foreground">
                    Mais de <strong>15.000 mulheres</strong> já desincharam com este método. 
                    Em apenas 5 dias você volta a caber nas suas roupas favoritas!
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-primary">R$ 27</span>
                    <p className="text-sm text-muted-foreground line-through">R$ 47</p>
                  </div>
                  <Button variant="cta" size="lg" className="flex-1">
                    Começar Agora - R$ 27
                  </Button>
                </div>
              </div>
            </div>
            
            <SocialProof count={15000} product="Desincha" />
            
            <div>
              <h4 className="text-2xl font-bold text-center mb-8">💬 O que nossas alunas dizem</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.desincha.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skindetox" className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={heroSkindetox} 
                  alt="SkinDetox" 
                  className="w-full rounded-3xl shadow-elegant object-cover h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-gradient-wellness text-white border-0">
                    PELE PERFEITA ✨
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">SkinDetox</h3>
                  <p className="text-xl text-muted-foreground mb-6">
                    Sua Pele Mais Leve em 7 Dias
                  </p>
                </div>
                
                <UrgencyBanner timeLeft="18 horas" />
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    A revolução da sua pele
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Protocolo testado:</strong> reduz oleosidade e espinhas em 7 dias usando apenas ingredientes naturais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Adeus maquiagem pesada:</strong> recupere a confiança para sair sem filtro</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Economia garantida:</strong> pare de gastar fortunas em produtos que não funcionam</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-wellness/10 p-6 rounded-2xl">
                  <h4 className="font-bold mb-3 text-lg">🌟 PELE NATURAL</h4>
                  <p className="text-foreground">
                    <strong>8.500+ mulheres</strong> já conquistaram a pele dos sonhos. 
                    Desperte sua beleza natural sem depender de filtros ou maquiagem!
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-primary">R$ 37</span>
                    <p className="text-sm text-muted-foreground line-through">R$ 57</p>
                  </div>
                  <Button variant="cta" size="lg" className="flex-1">
                    Transformar Minha Pele - R$ 37
                  </Button>
                </div>
              </div>
            </div>
            
            <SocialProof count={8500} product="SkinDetox" />
            
            <div>
              <h4 className="text-2xl font-bold text-center mb-8">💬 Transformações reais</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.skindetox.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fitness" className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={heroFitness} 
                  alt="Corpo Mais Firme" 
                  className="w-full rounded-3xl shadow-elegant object-cover h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-gradient-hero text-white border-0">
                    CORPO FIRME 💪
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">Corpo Mais Firme</h3>
                  <p className="text-xl text-muted-foreground mb-6">
                    Firmeza e Autoestima em 15 Min/Dia
                  </p>
                </div>
                
                <UrgencyBanner timeLeft="12 horas" />
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Seu corpo mais firme sem academia
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Apenas 15 minutos:</strong> treinos rápidos que cabem em qualquer rotina</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>100% em casa:</strong> sem equipamentos, sem desculpas, só resultados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Foco na autoestima:</strong> não é sobre perfeição, é sobre se sentir bem</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-hero/10 p-6 rounded-2xl">
                  <h4 className="font-bold mb-3 text-lg">🔥 TRANSFORMAÇÃO TOTAL</h4>
                  <p className="text-foreground">
                    <strong>12.000+ mulheres</strong> já fortaleceram corpo e mente. 
                    Descubra como 15 minutos por dia podem mudar tudo!
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-primary">R$ 47</span>
                    <p className="text-sm text-muted-foreground line-through">R$ 67</p>
                  </div>
                  <Button variant="cta" size="lg" className="flex-1">
                    Fortalecer Meu Corpo - R$ 47
                  </Button>
                </div>
              </div>
            </div>
            
            <SocialProof count={12000} product="fitness" />
            
            <div>
              <h4 className="text-2xl font-bold text-center mb-8">💬 Resultados que inspiram</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.fitness.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default IndividualProductsSection;