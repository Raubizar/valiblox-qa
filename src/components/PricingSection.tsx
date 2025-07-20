import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      title: "RIBA Stage 3",
      subtitle: "Design Planning",
      price: "€690",
      description: "Perfect for early design validation",
      features: [
        "Drawing compliance checks",
        "Basic model validation",
        "Specification review",
        "48-hour delivery",
        "Expert QA oversight"
      ],
      popular: false
    },
    {
      title: "RIBA Stage 4", 
      subtitle: "Pre-construction",
      price: "€990",
      description: "Comprehensive pre-construction validation",
      features: [
        "Full drawing audit",
        "Complete model validation",
        "Detailed specification review",
        "Clash detection analysis",
        "Construction readiness report",
        "48-hour delivery",
        "Expert QA oversight"
      ],
      popular: true
    },
    {
      title: "Custom Project",
      subtitle: "Tailored Solution",
      price: "Contact",
      description: "Bespoke QA packages for unique requirements",
      features: [
        "Multi-stage validation",
        "Custom reporting format",
        "Priority processing",
        "Dedicated QA team",
        "Flexible delivery timeline"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Stage-Based Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Faster, more accurate, and 10x clearer than internal manual QA — without hiring or training.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-premium ${
                tier.popular ? 'ring-2 ring-primary transform scale-105' : 'hover:scale-105'
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{tier.title}</CardTitle>
                <CardDescription className="text-lg">{tier.subtitle}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Contact" && <span className="text-muted-foreground">/project</span>}
                </div>
                <p className="text-sm text-muted-foreground pt-2">{tier.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                >
                  {tier.price === "Contact" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-6 bg-accent/50 border-accent">
            <p className="text-lg font-medium text-accent-foreground">
              Need a custom solution? Bundle multiple stages for additional savings.
            </p>
            <Button variant="outline" className="mt-4">
              Discuss Custom Pricing
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;