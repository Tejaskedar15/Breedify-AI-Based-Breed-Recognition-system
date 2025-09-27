import breedifyLogo from "@/assets/breedify-logo.png";
import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Centered Logo and Breedify Name */}
          <div className="flex-1"></div>
          <div className="flex items-center gap-4 flex-1 justify-center">
            <img 
              src={breedifyLogo} 
              alt="Breedify Logo" 
              className="h-16 w-auto"
            />
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Breedify
            </h1>
          </div>

          {/* Navigation - Right Corner */}
          <div className="flex-1 flex justify-end">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                Home
              </a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium text-lg">
                Features
              </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}