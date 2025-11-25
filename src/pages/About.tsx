import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About <span className="text-gradient">TechHub</span></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Your trusted platform for buying and selling high-quality electronic devices since 2020
            </p>
            <div className="text-left bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur">
        <p className="text-lg leading-relaxed text-gray-200 mb-6">
          Whether your device is <strong>old, new, damaged, or unused</strong>, we make the selling process simple and hassle-free.
        </p>

          

        <ul className="space-y-5 text-gray-300 text-lg">
          <li>
            <strong className="text-white"> Upload your details & device information</strong><br />
            Our easy form lets you submit your device with just a few clicks.
          </li>

          <li>
            <strong className="text-white"> Instant response from our team</strong><br />
            Our support team replies quickly with price quotes and next steps.
          </li>

          <li>
            <strong className="text-white"> Direct call support</strong><br />
            Customers can reach us directly through phone calls for faster assistance.
          </li>

          <li>
            <strong className="text-white"> WhatsApp chat support</strong><br />
            Chat with us anytime — our team responds instantly to help you with pricing, pickup, or questions.
          </li>

          <li>
            <strong className="text-white"> Free doorstep pickup</strong><br />
            We pick up your electronic device from your home at no extra cost.
          </li>

          <li>
            <strong className="text-white"> Best reasonable prices</strong><br />
            We ensure transparent pricing with the best value for your device across 
            <strong> Andhra Pradesh & Telangana</strong>.
          </li>
        </ul>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Trusted", desc: "100% Verified Products" },
                { icon: TrendingUp, title: "Growth", desc: "50% YoY Growth" },
                { icon: Users, title: "Community", desc: "10k+ Users" },
                { icon: Award, title: "Quality", desc: "Premium Service" },
              ].map((item, i) => (
                <Card key={i} className="glass-card p-6 text-center glow-hover">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
