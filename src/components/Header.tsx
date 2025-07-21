import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, ChevronDown, Home, Users, DollarSign, HelpCircle, Briefcase, FileText, Settings, ExternalLink } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const sections = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Trust & Testimonials", href: "#trust", icon: Users },
    { name: "About Us", href: "#about", icon: Users },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
    { name: "Careers", href: "#careers", icon: Briefcase },
    { name: "Articles", href: "#articles", icon: FileText },
  ];

  const services = [
    { name: "Drawing Validation", href: "/report/drawing-validation" },
    { name: "Model QA", href: "/report/model-qa" },
    { name: "Specification Review", href: "/report/specification-review" },
    { name: "Clash Detection", href: "/report/clash-detection" },
    { name: "Custom Validation", href: "/report/custom-validation" },
  ];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold">VALIBLOX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* All Sections Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  All Sections
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 bg-background border border-border shadow-lg z-[100]"
                sideOffset={8}
              >
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <DropdownMenuItem key={section.name} asChild>
                      <a 
                        href={section.href} 
                        className="w-full cursor-pointer flex items-center py-2 px-2 hover:bg-muted transition-colors"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {section.name}
                      </a>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a 
                    href="#contact" 
                    className="w-full cursor-pointer flex items-center py-2 px-2 hover:bg-muted transition-colors"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-56 bg-background border border-border shadow-lg z-[100]"
                sideOffset={8}
              >
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <a 
                      href={service.href} 
                      className="w-full cursor-pointer flex items-center py-2 px-2 hover:bg-muted transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side - Theme toggle and buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden sm:flex">
              Login
            </Button>
            <Button className="hidden sm:flex">
              Get Started
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-border z-[100]">
                <SheetHeader>
                  <SheetTitle className="text-left">Navigation</SheetTitle>
                  <SheetDescription className="text-left">
                    Navigate to different sections of the website
                  </SheetDescription>
                </SheetHeader>
                
                <div className="mt-8 space-y-6">
                  {/* Main Sections */}
                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                      Main Sections
                    </h3>
                    <div className="space-y-2">
                      {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <a
                            key={section.name}
                            href={section.href}
                            onClick={handleLinkClick}
                            className="flex items-center py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <Icon className="mr-3 h-4 w-4" />
                            {section.name}
                          </a>
                        );
                      })}
                      <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="flex items-center py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Settings className="mr-3 h-4 w-4" />
                        Contact
                      </a>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                      Services & Reports
                    </h3>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          onClick={handleLinkClick}
                          className="flex items-center py-3 px-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <ExternalLink className="mr-3 h-4 w-4" />
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons for mobile */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;