import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-bg z-0" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
            <TrendingUp className="h-4 w-4 text-primary animate-glow" />
            <span className="text-sm font-medium">Premium Tech Marketplace</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sell
            <span className="block text-gradient animate-scale-in">
              Premium Devices
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sell your device with confidence. Your trusted tech marketplace for quality and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
           {/*  <Link to="/laptops">
              <Button size="lg" className="glow-primary w-full sm:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Browse Laptops
              </Button>
            </Link> */}
            <Link to="/sell">
              <Button size="lg" variant="secondary" className="glow-hover w-full sm:w-auto">
                Sell Your Device
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Products" },
              { value: "1000+", label: "Happy Customers" },
              { value: "50+", label: "Brands" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-lg glow-hover animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
