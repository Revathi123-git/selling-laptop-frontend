  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

  const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");

      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/admin/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Invalid credentials");
          return;
        }

        // Save token to localStorage
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminEmail", data.email);

        // Redirect to admin dashboard
        navigate("/admin");
      } catch (err) {
        console.error("Login failed:", err);
        setError("Something went wrong. Try again.");
      }
    };

    return (
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        {/* Navbar */}
        <Navigation />

        {/* Main Section */}
        <main className="flex-1 flex items-center justify-center pt-24 px-4">
          <Card className="w-full max-w-md bg-gray-800 border border-gray-700 shadow-xl rounded-2xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold text-white">
                Admin Login
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-900 text-gray-100 border-gray-700 focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-900 text-gray-100 border-gray-700 focus:border-primary focus:ring-primary"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold mt-2"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    );
  };

  export default AdminLogin;
