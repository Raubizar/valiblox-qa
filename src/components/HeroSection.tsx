import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Rocket, Phone, CheckCircle2, XCircle } from "lucide-react";
import qaReportHero from "@/assets/qa-report-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                We help Design Managers get project deliverables{" "}
                <span className="text-primary">fully QA‑validated</span> in 48 hours
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                — with zero setup, full data security, and a seamless experience.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground">
                We review your drawings, specifications and models with machine-level precision and expert QA oversight.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>• No software. No training. No IT dependency.</p>
                <p>• Your data stays fully under your control, NDA-covered and encrypted.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="shadow-premium">
                <Download className="mr-2 h-5 w-5" />
                Download Sample QA Report
              </Button>
              <Button variant="outline" size="lg" className="shadow-card">
                <Rocket className="mr-2 h-5 w-5" />
                Submit Your Project for QA
              </Button>
              <Button variant="outline" size="lg" className="shadow-card">
                <Phone className="mr-2 h-5 w-5" />
                Book Free Discovery Call
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-premium transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video relative">
                <img 
                  src={qaReportHero} 
                  alt="Valiblox QA Report Dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">QA Validation Report</h3>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">48h delivery</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium">128 Passed</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <XCircle className="h-4 w-4 text-destructive" />
                    </div>
                    <p className="text-sm font-medium">3 Issues</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <div className="h-4 w-4 rounded-full bg-yellow-500" />
                    </div>
                    <p className="text-sm font-medium">5 Attention</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;