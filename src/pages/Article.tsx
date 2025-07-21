import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { getArticleById, articles } from "@/data/articles";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const article = id ? getArticleById(id) : null;

  if (!article) {
    return (
      <div className="min-h-screen pt-20 bg-background">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-light mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Article link has been copied to your clipboard",
    });
  };

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* Back Navigation */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-gradient-glass backdrop-blur-glass border-white/20">
                {article.category}
              </Badge>
              {article.featured && (
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-border/50">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <Card className="p-8 lg:p-12 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-premium">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-light tracking-tight text-foreground mb-6">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-medium text-foreground mt-12 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-medium text-foreground mt-8 mb-3">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-muted-foreground leading-relaxed mb-6">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-foreground">{children}</em>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </Card>

          {/* Tags */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-muted/50 text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-light tracking-tight mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card 
                    key={relatedArticle.id}
                    className="p-6 bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-premium transition-all duration-300 group cursor-pointer"
                    onClick={() => navigate(`/article/${relatedArticle.id}`)}
                  >
                    <div className="space-y-4">
                      <Badge variant="outline" className="bg-gradient-glass backdrop-blur-glass border-white/20">
                        {relatedArticle.category}
                      </Badge>
                      
                      <h4 className="text-lg font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/10">
                        <span>{relatedArticle.author}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedArticle.readTime}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <Card className="mt-16 p-8 bg-gradient-apple border border-white/10 shadow-premium text-center">
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-glass border border-white/20">
                  <BookOpen className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-foreground/80">Stay Updated</span>
                </div>
                <h3 className="text-2xl font-light text-foreground">
                  Get more insights like this
                </h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for the latest articles and industry insights
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
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Article;