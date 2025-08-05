import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Shield, Clock, Download } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a entrega dos produtos?",
      answer: "Todos os nossos produtos são 100% digitais! Após a confirmação do pagamento, você recebe o acesso imediatamente no seu e-mail. Não há frete e você pode começar sua transformação na mesma hora.",
      icon: <Download className="w-5 h-5 text-primary" />
    },
    {
      question: "Quanto tempo tenho acesso aos materiais?",
      answer: "O acesso é VITALÍCIO! Uma vez que você adquire qualquer produto, ele é seu para sempre. Pode repetir quantas vezes quiser e acessar quando precisar.",
      icon: <Clock className="w-5 h-5 text-primary" />
    },
    {
      question: "E se eu não gostar ou não tiver resultados?",
      answer: "Oferecemos 7 dias de garantia incondicional! Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro, sem perguntas. Sua satisfação é nossa prioridade.",
      icon: <Shield className="w-5 h-5 text-primary" />
    },
    {
      question: "Os produtos funcionam para qualquer idade?",
      answer: "Sim! Nossos métodos são naturais e seguros para mulheres de 16 a 50+ anos. Cada produto indica a faixa etária ideal, mas os princípios funcionam para todas as idades.",
      icon: <HelpCircle className="w-5 h-5 text-primary" />
    },
    {
      question: "Preciso de equipamentos ou produtos caros?",
      answer: "Não! Todos os nossos métodos usam apenas o que você já tem em casa ou ingredientes naturais e acessíveis. O foco é na simplicidade e economia.",
      icon: <HelpCircle className="w-5 h-5 text-primary" />
    },
    {
      question: "Posso fazer os 3 programas ao mesmo tempo?",
      answer: "Recomendamos começar com um de cada vez para melhores resultados. Mas se quiser otimizar sua transformação, o Kit Completo com desconto especial é perfeito para você!",
      icon: <HelpCircle className="w-5 h-5 text-primary" />
    },
    {
      question: "Como faço o pagamento?",
      answer: "Aceitamos PIX (aprovação imediata), cartão de crédito e boleto bancário. O pagamento é 100% seguro através da nossa plataforma certificada.",
      icon: <HelpCircle className="w-5 h-5 text-primary" />
    },
    {
      question: "Vou ter suporte durante o programa?",
      answer: "Sim! Além dos materiais completos, você entra em nossa comunidade exclusiva no WhatsApp onde tiramos dúvidas e compartilhamos resultados.",
      icon: <HelpCircle className="w-5 h-5 text-primary" />
    },
    {
      question: "É seguro compartilhar meus dados?",
      answer: "Absolutamente! Utilizamos criptografia de ponta e seguimos todas as normas da LGPD. Seus dados são protegidos e jamais compartilhados com terceiros.",
      icon: <Shield className="w-5 h-5 text-primary" />
    },
    {
      question: "Posso presentear alguém com os produtos?",
      answer: "Claro! Basta informar o e-mail da pessoa presenteada na finalização da compra. É o presente perfeito para quem você ama se cuidar!",
      icon: <HelpCircle className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-hero text-white border-0 px-4 py-2">
            FAQ - Tire suas dúvidas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Separamos as principais dúvidas para você ficar tranquila antes de começar sua transformação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-soft border-0 shadow-elegant">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border/50 rounded-2xl px-6 bg-background/50 backdrop-blur"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4 text-left">
                        {faq.icon}
                        <span className="font-semibold text-foreground">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 px-9">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <div className="bg-gradient-cta p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ainda tem dúvidas? 🤔
              </h3>
              <p className="text-white/90 mb-6">
                Nossa equipe está pronta para te ajudar! Mande sua pergunta no WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre os produtos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  📱 Falar no WhatsApp
                </a>
                <span className="text-white/80 text-sm">
                  Respondemos em até 2 horas!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;