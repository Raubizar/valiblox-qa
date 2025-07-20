import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate is your QA validation?",
      answer: "Our machine-level precision algorithms combined with expert oversight achieve 99.7% accuracy in identifying compliance issues, significantly outperforming manual QA processes."
    },
    {
      question: "What file formats do you support?",
      answer: "We support all major AEC formats including DWG, RVT, IFC, PDF, and proprietary BIM formats. Our platform automatically processes and validates across multiple software platforms."
    },
    {
      question: "How secure is my project data?",
      answer: "All data is encrypted end-to-end with enterprise-grade security. We're ISO 27001 certified and comply with GDPR. Your files are processed in secure environments and permanently deleted after delivery."
    },
    {
      question: "Can you integrate with our existing workflow?",
      answer: "Yes, we offer API integrations with major project management platforms, BIM software, and cloud storage solutions. Custom integrations are available for enterprise clients."
    },
    {
      question: "What happens if issues are found?",
      answer: "Our detailed reports include precise issue locations, severity ratings, and recommended fixes. Critical issues receive priority flagging with direct contact from our expert team."
    },
    {
      question: "Do you offer rush processing?",
      answer: "Yes, we offer 24-hour rush processing for urgent projects. Enterprise clients can access same-day processing for critical deliverables."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-apple relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-glass border border-white/20">
            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground/80">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Everything you need to{" "}
            <span className="font-medium bg-gradient-premium bg-clip-text text-transparent">know</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Get answers to common questions about our QA validation process
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-glass overflow-hidden transition-all duration-300 hover:shadow-premium"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between group"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-border/50 mb-4" />
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;