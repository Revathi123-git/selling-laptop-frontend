import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Admin = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);

  const cards = [
    { icon: Users, title: "Seller Submissions", desc: "Review Requests", route: "/AdminSubmissions" },
    { icon: Settings, title: "Settings", desc: "Configure System", route: "/AdminSettings" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/admin/dashboard-data`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch data");
        setDashboardData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminEmail");
  navigate("/admin-login"); // redirect to login
};
  return (
    <div className="min-h-screen">

      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
                      <div className="flex justify-between items-center mb-8">
  <h1 className="text-4xl font-bold">
    Admin <span className="text-gradient">Dashboard</span>
  </h1>
  <Button
    size="sm"
    className="bg-red-600 hover:bg-red-700 text-white"
    onClick={handleLogout}
  >
    Logout
  </Button>
</div>
        {dashboardData && (
  <div className="my-4 p-4 bg-gray-800 rounded text-white text-center">
    {dashboardData.msg}
  </div>
)}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((item, i) => (
              <Card key={i} className="glass-card p-6 glow-hover">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <Button size="sm" className="w-full" onClick={() => navigate(item.route)}>
                  Open
                </Button>
              </Card>
            ))}
     
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;
