import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Rocket, Phone, CheckCircle2, XCircle } from "lucide-react";
import qaReportHero from "@/assets/qa-report-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-apple flex items-center overflow-hidden">
      {/* Apple-style background blur effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-glass border border-white/20 shadow-glass">
                <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground/80">Trusted by 500+ Design Teams</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight text-foreground">
                Project deliverables{" "}
                <span className="font-medium bg-gradient-premium bg-clip-text text-transparent">
                  fully validated
                </span>{" "}
                in 48 hours
              </h1>
              
              <p className="text-2xl text-muted-foreground leading-relaxed font-light">
                Machine-level precision meets expert oversight.{" "}
                <span className="text-foreground">Zero setup required.</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-glass backdrop-blur-glass border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                  <span className="text-foreground/80">No software installation</span>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-glass backdrop-blur-glass border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow" style={{ animationDelay: '-1s' }} />
                  <span className="text-foreground/80">Full data encryption</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-gradient-premium border-0 shadow-button hover:shadow-premium transition-all duration-300 text-white font-medium">
                <Download className="mr-2 h-5 w-5" />
                Download Sample Report
              </Button>
              <Button variant="outline" size="lg" className="bg-gradient-glass backdrop-blur-glass border-white/20 hover:bg-white/10 shadow-glass transition-all duration-300">
                <Rocket className="mr-2 h-5 w-5" />
                Submit Your Project
              </Button>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative group">
              {/* Apple-style glass morphism card */}
              <div className="absolute inset-0 bg-gradient-glass backdrop-blur-glass rounded-3xl border border-white/20 shadow-premium transform rotate-1 group-hover:rotate-0 transition-all duration-700" />
              
              <Card className="relative overflow-hidden bg-transparent border-0 shadow-none transform group-hover:scale-[1.02] transition-all duration-700">
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden">
                  <img 
                    src={qaReportHero} 
                    alt="Valiblox QA Report Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
                  
                  {/* Floating status indicator */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-glass backdrop-blur-glass rounded-full border border-white/30 shadow-glass">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                      <span className="text-white/90 text-sm font-medium">Live Report</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-glass backdrop-blur-glass border-t border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-xl text-foreground">QA Validation Dashboard</h3>
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">48h delivery</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <p className="text-2xl font-light text-foreground">128</p>
                      <p className="text-sm text-muted-foreground">Validated</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                          <XCircle className="h-6 w-6 text-destructive" />
                        </div>
                      </div>
                      <p className="text-2xl font-light text-foreground">3</p>
                      <p className="text-sm text-muted-foreground">Issues</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-yellow-500" />
                        </div>
                      </div>
                      <p className="text-2xl font-light text-foreground">5</p>
                      <p className="text-sm text-muted-foreground">Review</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;