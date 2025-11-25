
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

import laptop1 from "@/assets/laptop-1.jpg";

import printer1 from "@/assets/printer1.jpeg";
import Desktop1 from "@/assets/Desktop1.jpg";
import Mobile1 from "@/assets/Mobile1.jpg";
import allinonepc from "@/assets/allinonepc.jpg"
import elecronics from "@/assets/elecronics.jpg"
const FeaturedLaptops = () => {
  const laptops = [
    {
      id: 1,
      name: "All Laptops",
     
      image: laptop1,
      
    },
    {
      id: 2,
      name: "Desktops",
     
      image: Desktop1,
    
    },
    {
      id: 3,
      name: "Printers",
     
      image: printer1,
     
    },
    {
      id: 4,
      name: "Mobiles",
     image:  Mobile1,
    },
     {
      id: 4,
      name: "All In One PCs",
     image: allinonepc,
    },
     {
      id: 5,
      name: "All Electronic Devices ",
     image: elecronics,
    },
     

  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Devices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
Every device here comes from users who upgraded and trusted us for a smooth selling experience.
We inspect, verify, and showcase only the best.          </p>
        </div>

        {/* Laptops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {laptops.map((laptop, index) => (
            <Card
              key={laptop.id}
              className="glass-card glow-hover group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0 relative">
               
                <div className="overflow-hidden h-64">
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-2xl text-center font-bold mb-2">{laptop.name}</h3>
               

              </CardContent>

           
            </Card>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default FeaturedLaptops;
