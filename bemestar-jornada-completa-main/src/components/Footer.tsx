import { Heart, Mail, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Wellness Store
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Transformamos a vida de mulheres através de produtos digitais práticos, 
              acessíveis e eficazes. Sua jornada de bem-estar começa aqui.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:bg-background/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#desincha" className="text-background/80 hover:text-background transition-colors">
                  Desincha Express
                </a>
              </li>
              <li>
                <a href="#skindetox" className="text-background/80 hover:text-background transition-colors">
                  SkinDetox
                </a>
              </li>
              <li>
                <a href="#fitness" className="text-background/80 hover:text-background transition-colors">
                  Corpo Mais Firme
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center">
            Feito com <Heart className="w-4 h-4 mx-2 text-red-400" /> para mulheres que querem se transformar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;