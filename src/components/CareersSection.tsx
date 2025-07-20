import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight, Briefcase, Coffee, Heart } from "lucide-react";

const CareersSection = () => {
  const openPositions = [
    {
      title: "Senior QA Engineer",
      department: "Engineering",
      location: "Remote / London",
      type: "Full-time",
      description: "Lead the development of our next-generation QA algorithms and validation systems.",
      tags: ["Python", "Machine Learning", "AEC Industry"]
    },
    {
      title: "AEC Industry Specialist",
      department: "Product",
      location: "Remote / Amsterdam",
      type: "Full-time", 
      description: "Shape our product roadmap with deep AEC industry knowledge and client insights.",
      tags: ["BIM", "Construction", "Product Strategy"]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, intuitive interfaces for our QA dashboard and reporting tools.",
      tags: ["React", "TypeScript", "Design Systems"]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Berlin",
      type: "Full-time",
      description: "Help design teams succeed with our platform and drive adoption across organizations.",
      tags: ["Client Relations", "AEC Knowledge", "Growth"]
    }
  ];

  const benefits = [
    { icon: Coffee, title: "Flexible Work", description: "Remote-first with optional office access" },
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health coverage" },
    { icon: Users, title: "Learning Budget", description: "€2,000 annual learning & development" },
    { icon: Briefcase, title: "Equity Package", description: "Share in our success with equity options" }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-apple relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-glass border border-white/20">
            <Briefcase className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground/80">Join Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Build the{" "}
            <span className="font-medium bg-gradient-premium bg-clip-text text-transparent">
              future of QA
            </span>{" "}
            with us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Join a team of passionate engineers and AEC experts reshaping how the industry approaches quality assurance
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-premium transition-all duration-300 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Culture Section */}
        <Card className="p-8 mb-16 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-premium">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary border-0">
                Our Culture
              </Badge>
              <h3 className="text-3xl font-light text-foreground">
                Where innovation meets{" "}
                <span className="font-medium">collaboration</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We're building something that's never existed before. That requires a team that's 
                curious, collaborative, and committed to excellence. We value diverse perspectives 
                and believe the best solutions come from bringing together different experiences.
              </p>
              <Button variant="outline" className="bg-gradient-glass backdrop-blur-glass border-white/20">
                Learn About Our Values
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-glass backdrop-blur-glass border border-white/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                <span className="text-foreground/80">Remote-first, globally distributed</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-glass backdrop-blur-glass border border-white/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" style={{ animationDelay: '-1s' }} />
                <span className="text-foreground/80">Quarterly team gatherings</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-glass backdrop-blur-glass border border-white/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" style={{ animationDelay: '-2s' }} />
                <span className="text-foreground/80">Focus time, minimal meetings</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Open Positions */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-light text-foreground mb-4">
              Open <span className="font-medium">Positions</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to make an impact? Check out our current openings
            </p>
          </div>

          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-premium transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {position.title}
                      </h4>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        {position.department}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground">{position.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {position.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="outline" 
                          className="bg-gradient-glass backdrop-blur-glass border-white/20 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="lg:ml-6 bg-gradient-premium shadow-button hover:shadow-premium transition-all duration-300">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-premium">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                Don't see a perfect match?
              </h3>
              <p className="text-muted-foreground">
                We're always looking for exceptional talent. Send us your details and we'll keep you in mind for future opportunities.
              </p>
              <Button variant="outline" className="bg-gradient-glass backdrop-blur-glass border-white/20">
                Send General Application
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;