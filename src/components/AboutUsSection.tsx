import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const AboutUsSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Design Teams", description: "Trust our platform" },
    { icon: Award, value: "99.7%", label: "Accuracy", description: "QA validation rate" },
    { icon: Clock, value: "48h", label: "Delivery", description: "Guaranteed timeline" },
    { icon: Globe, value: "15+", label: "Countries", description: "Global presence" }
  ];

  const values = [
    {
      title: "Precision First",
      description: "Every project deserves machine-level accuracy combined with human expertise."
    },
    {
      title: "Speed Matters",
      description: "48-hour delivery without compromising on quality or thoroughness."
    },
    {
      title: "Trust & Security",
      description: "Enterprise-grade security with complete data confidentiality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-glass border border-white/20">
            <Users className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground/80">About Valiblox</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Redefining{" "}
            <span className="font-medium bg-gradient-premium bg-clip-text text-transparent">
              quality assurance
            </span>{" "}
            for AEC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Founded by industry veterans who experienced the pain of manual QA firsthand
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-premium transition-all duration-300 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-light text-foreground">{stat.value}</p>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-0">
                Our Story
              </Badge>
              <h3 className="text-3xl font-light text-foreground leading-tight">
                Born from frustration with{" "}
                <span className="font-medium">manual QA processes</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  After years in major AEC firms, our founders witnessed the same story repeatedly: 
                  brilliant designs delayed by weeks of manual quality checks, with critical issues 
                  still slipping through.
                </p>
                <p>
                  The industry needed something better. Not just faster, but fundamentally more 
                  reliable. That's why we built Valiblox.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-premium shadow-button hover:shadow-premium transition-all duration-300">
              Learn More About Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-premium">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow" />
                  <h4 className="text-lg font-medium text-foreground">Our Mission</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "To eliminate the bottleneck of manual QA and empower design teams to deliver 
                  exceptional projects with confidence."
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-muted-foreground">
                    — Valiblox Founding Team
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-light text-foreground mb-4">
              Our <span className="font-medium">Core Values</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-premium transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;