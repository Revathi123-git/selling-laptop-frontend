import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface DeviceSubmission {
  _id: string;
  deviceType: string;
  name: string;
  email: string;
  phone?: string;
  condition?: string;
  price?: string;
  description?: string;
  details?: Record<string, string>;
  images?: string[];
  createdAt: string;
}

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<DeviceSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 const apiBase = import.meta.env.VITE_API_BASE || "http://localhost:5000";
  useEffect(() => {
    fetch(`${apiBase}/api/sell-device`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setSubmissions(data);
        } else {
          setError("Invalid data format from server");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch submissions");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Seller Submissions</h1>

        {loading ? (
          <p className="text-center text-gray-400">Loading submissions...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : submissions.length === 0 ? (
          <p className="text-center text-gray-400">No submissions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border border-gray-700">Device Type</th>
                  <th className="p-3 border border-gray-700">Name</th>
                  <th className="p-3 border border-gray-700">Email</th>
                  <th className="p-3 border border-gray-700">Phone</th>
                  <th className="p-3 border border-gray-700">Condition</th>
                  <th className="p-3 border border-gray-700">Price</th>
                  <th className="p-3 border border-gray-700">Description</th>
                  <th className="p-3 border border-gray-700">Details</th>
                  <th className="p-3 border border-gray-700">Images</th>
                  <th className="p-3 border border-gray-700">Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s._id} className="odd:bg-gray-800 even:bg-gray-700">
                    <td className="p-2 border border-gray-700">{s.deviceType}</td>
                    <td className="p-2 border border-gray-700">{s.name}</td>
                    <td className="p-2 border border-gray-700">{s.email}</td>
                    <td className="p-2 border border-gray-700">{s.phone || "-"}</td>
                    <td className="p-2 border border-gray-700">{s.condition || "-"}</td>
                    <td className="p-2 border border-gray-700">{s.price ? `₹${s.price}` : "-"}</td>
                    <td className="p-2 border border-gray-700">{s.description || "-"}</td>

                    {/* Details field — dynamically list all details like brand, model, RAM, etc. */}
                    <td className="p-2 border border-gray-700">
                      {s.details && Object.keys(s.details).length > 0 ? (
                        <ul className="list-disc pl-4">
                          {Object.entries(s.details).map(([key, value]) => (
                            <li key={key}>
                              <strong>{key}:</strong> {value}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* Display images if available */}
                    <td className="p-2 border border-gray-700">
                      {s.images && s.images.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {s.images.map((img, i) => (
                           <img
                                key={i}
                                src={`${apiBase}/uploads/${img}`}
                               alt="device"
                                className="w-16 h-16 object-cover rounded"
                                 />

                          ))}
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="p-2 border border-gray-700">
                      {new Date(s.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
