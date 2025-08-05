import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Wellness Store
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('beneficios')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('produtos')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection('produtos-detalhes')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Detalhes
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </button>
        </nav>

        <Button
          variant="cta"
          size="sm"
          onClick={() => scrollToSection('produtos')}
        >
          Ver Produtos
        </Button>
      </div>
    </header>
  );
};

export default Header;