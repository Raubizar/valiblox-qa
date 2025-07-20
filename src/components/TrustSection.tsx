import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const TrustSection = () => {
  const trustElements = [
    {
      icon: Users,
      title: "Trusted by design teams across the EU & UK",
      description: "Leading architecture and engineering firms rely on our expertise"
    },
    {
      icon: Shield,
      title: "Covered by NDA – your data stays secure and local",
      description: "End-to-end encryption with full data sovereignty"
    },
    {
      icon: Award,
      title: "Expert-reviewed + Machine-checked",
      description: "Combining AI precision with human expertise for unmatched accuracy"
    },
    {
      icon: Clock,
      title: "48-hour guaranteed delivery",
      description: "Consistent, reliable turnaround times you can depend on"
    }
  ];

  const testimonials = [
    {
      quote: "Valiblox caught critical issues we would have missed in our internal review. The 48-hour turnaround saved us weeks in the approval process.",
      author: "Sarah Mitchell",
      role: "Design Manager",
      company: "Foster + Partners"
    },
    {
      quote: "The level of detail in their QA reports is exceptional. Machine precision with expert insight – exactly what we needed for our complex projects.",
      author: "David Chen",
      role: "Project Director", 
      company: "Arup"
    },
    {
      quote: "Finally, a QA service that understands AEC workflows. No training required, no software to install – just results.",
      author: "Emma Rodriguez",
      role: "Technical Director",
      company: "Zaha Hadid Architects"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Trust badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustElements.map((element, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
              <CardContent className="space-y-4 p-0">
                <div className="inline-flex p-3 rounded-full bg-primary/10">
                  <element.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm leading-tight">{element.title}</h3>
                <p className="text-xs text-muted-foreground">{element.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What design teams say</h2>
            <p className="text-lg text-muted-foreground">
              Industry leaders trust Valiblox for mission-critical project validation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <blockquote className="text-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <Badge variant="secondary" className="px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            ISO 27001 Compliant
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Award className="h-4 w-4 mr-2" />
            GDPR Compliant
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Users className="h-4 w-4 mr-2" />
            NDA Protected
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;