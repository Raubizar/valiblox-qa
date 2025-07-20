import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-background">VALIBLOX</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Premium QA validation for AEC project deliverables. Machine precision meets expert oversight for faster approvals and reduced risk.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-transparent border-background/20 text-background hover:bg-background hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-background/20 text-background hover:bg-background hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Drawing Validation</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Model QA</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Specification Review</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Clash Detection</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Custom Validation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Partners</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Press</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/70">hello@valiblox.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/70">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/70">London, UK</span>
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Get Started Today
            </Button>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-background/70">
            <span>© 2024 Valiblox. All rights reserved.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="text-sm text-background/70">
            Built for AEC professionals, by AEC professionals
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;