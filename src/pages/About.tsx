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
      <h1 className="text-5xl font-bold mb-6">
        About <span className="text-gradient">E-Scrap Electronics</span>
      </h1>

      <p className="text-xl text-muted-foreground mb-12">
        Your trusted platform for selling used electronics and scrap with free
        doorstep pickup across Andhra Pradesh & Telangana.
      </p>

      <div className="text-left bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur">
        
        <p className="text-lg leading-relaxed text-gray-200 mb-6">
          Whether your device is <strong>old, new, damaged, or unused</strong>,
          E-Scrap Electronics offers the easiest and most reliable way to sell
          your electronics and scrap responsibly with instant support and the
          best prices.
        </p>

        <ul className="space-y-5 text-gray-300 text-lg">
         
          <li>
            <strong className="text-white">Easy online submission</strong><br />
            Enter your device or scrap details in just a few clicks — fast and simple.
          </li>

          <li>
            <strong className="text-white">Instant response from our team</strong><br />
            Get quick price quotes and pickup details from our support team.
          </li>

          <li>
            <strong className="text-white">Direct call support</strong><br />
            Need help? Call us directly for immediate assistance and faster processing.
          </li>

          <li>
            <strong className="text-white">WhatsApp support</strong><br />
            Chat with us anytime for price updates, pickup scheduling, or questions.
          </li>

          <li>
            <strong className="text-white">Free doorstep pickup</strong><br />
            We pick up your electronics or scrap from your home or office at
            no extra cost.
          </li>

          <li>
            <strong className="text-white">Best prices in AP & Telangana</strong><br />
            We offer transparent pricing and the best value for your devices 
            and scrap across <strong>Andhra Pradesh & Telangana</strong>.
          </li>

          <li>
            <strong className="text-white">Eco-friendly recycling</strong><br />
            Your e-waste is processed safely through certified recycling partners.
          </li>


        </ul>
        <div>
           <strong className="text-white">Why choose us</strong>
          <h3>  6. Wide Range of Items Accepted</h3>

<strong className="text-white">We purchase:</strong>

<ul>
 <li> Laptops, desktops, mobile phones</li>

<li>Tablets, printers, monitors
</li>
<li>All-in-One PCs, Printers & Accessories, ACs
</li>
<li>Networking Devices, Tablets, Monitors, Other Electronics, 
</li>
</ul>
          
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          { icon: Shield, title: "Trusted", desc: "Reliable Service Since 2020" },
          { icon: TrendingUp, title: "Growth", desc: "Serving Thousands Monthly" },
          { icon: Users, title: "Community", desc: "10k+ Happy Customers" },
          { icon: Award, title: "Quality", desc: "Top-Rated Pickup Service" },
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
