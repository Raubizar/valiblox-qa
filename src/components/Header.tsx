import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo placeholder - will be replaced when logos work */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold">VALIBLOX</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  Sections
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-48 bg-background/95 backdrop-blur-md border border-border/50 shadow-lg z-50"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <a href="#hero" className="w-full cursor-pointer hover:bg-muted/50 transition-colors">
                    Home
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#trust" className="w-full cursor-pointer hover:bg-muted/50 transition-colors">
                    Trust
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#about" className="w-full cursor-pointer hover:bg-muted/50 transition-colors">
                    About Us
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#pricing" className="w-full cursor-pointer hover:bg-muted/50 transition-colors">
                    Pricing
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#faq" className="w-full cursor-pointer hover:bg-muted/50 transition-colors">
                    FAQ
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#careers" className="w-full cursor-pointer hover:bg-muted/50 transition-colors">
                    Careers
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#articles" className="w-full cursor-pointer hover:bg-muted/50 transition-colors">
                    Articles
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden sm:flex">
              Login
            </Button>
            <Button>
              Get Started
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;