import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Contact <span className="text-gradient">Us</span></h1>
            <p className="text-xl text-muted-foreground mb-12">Get in touch with our team</p>
            <div className="grid gap-6">
              {[
                { icon: Mail, title: "Email", value: "krkcomputercare@gmail.com" },
                { icon: Phone, title: "Phone", value: "+91 8985756868" },
                { icon: MapPin, title: "Address", value: "Telangana & Andhra Pradesh" },
              ].map((item, i) => (
                <Card key={i} className="glass-card glow-hover">
                  <CardContent className="flex items-center gap-4 p-6">
                    <item.icon className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </CardContent>
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

export default Contact;
