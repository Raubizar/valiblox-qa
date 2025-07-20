import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, Zap, Target } from "lucide-react";

const ArticlesSection = () => {
  const featuredArticle = {
    title: "The Hidden Cost of Manual QA in AEC Projects",
    excerpt: "A comprehensive analysis of how manual quality assurance processes are impacting project timelines, budgets, and team morale across the architecture, engineering, and construction industry.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    featured: true
  };

  const articles = [
    {
      title: "Machine Learning in Construction QA: What's Next?",
      excerpt: "Exploring the latest advances in AI-powered quality assurance and their potential impact on construction project delivery.",
      author: "Michael Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      title: "5 Signs Your QA Process Needs Automation",
      excerpt: "Key indicators that your manual quality assurance workflow is holding back your team's potential.",
      author: "Emma Thompson",
      date: "Dec 8, 2024", 
      readTime: "4 min read",
      category: "Best Practices"
    },
    {
      title: "RIBA Stage 4: Common Validation Challenges",
      excerpt: "Understanding the most frequent issues found in pre-construction deliverables and how to prevent them.",
      author: "James Wilson",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      category: "Process"
    },
    {
      title: "Building Information Modeling: Quality at Scale", 
      excerpt: "How modern BIM workflows can integrate automated QA for better project outcomes.",
      author: "Lisa Park",
      date: "Dec 1, 2024",
      readTime: "5 min read",
      category: "BIM"
    },
    {
      title: "Case Study: 40% Faster Project Delivery with Automated QA",
      excerpt: "Real results from a leading architecture firm that transformed their quality assurance process.",
      author: "David Kim",
      date: "Nov 28, 2024",
      readTime: "9 min read",
      category: "Case Study"
    }
  ];

  const categories = [
    { name: "All Articles", icon: BookOpen, count: 24 },
    { name: "Technology", icon: Zap, count: 8 },
    { name: "Best Practices", icon: Target, count: 12 },
    { name: "Industry Insights", icon: BookOpen, count: 4 }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-glass border border-white/20">
            <BookOpen className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-foreground/80">Knowledge Hub</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Insights &{" "}
            <span className="font-medium bg-gradient-premium bg-clip-text text-transparent">
              best practices
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Stay updated with the latest trends, insights, and best practices in AEC quality assurance
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-gradient-premium shadow-button" : "bg-gradient-glass backdrop-blur-glass border-white/20"}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white border-0">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="p-8 mb-16 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-premium hover:shadow-card transition-all duration-300 group">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                <Badge variant="outline" className="bg-gradient-glass backdrop-blur-glass border-white/20">
                  {featuredArticle.category}
                </Badge>
              </div>
              
              <h3 className="text-3xl font-light text-foreground leading-tight group-hover:text-primary transition-colors">
                {featuredArticle.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {featuredArticle.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">SC</span>
                  </div>
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredArticle.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredArticle.readTime}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <Button size="lg" className="bg-gradient-premium shadow-button hover:shadow-premium transition-all duration-300">
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-premium transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-gradient-glass backdrop-blur-glass border-white/20">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                
                <h4 className="text-xl font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                  </div>
                  
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-gradient-glass backdrop-blur-glass border-white/20 hover:bg-white/10"
          >
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 p-8 bg-gradient-apple border border-white/10 shadow-premium text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-foreground">
                Stay updated with{" "}
                <span className="font-medium">industry insights</span>
              </h3>
              <p className="text-muted-foreground">
                Get the latest articles and best practices delivered to your inbox monthly
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-premium shadow-button hover:shadow-premium transition-all duration-300">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              No spam, unsubscribe at any time. Read our privacy policy.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ArticlesSection;