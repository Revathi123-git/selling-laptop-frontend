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
  status?: "Pending" | "Interested" | "Rejected"; // ✅ ADD THIS
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

  const handleDelete = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this submission?"
  );

  if (!confirmDelete) return;

  try {
    const response = await fetch(`${apiBase}/api/sell-device/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete");
    }

    // Remove from UI instantly
    setSubmissions((prev) => prev.filter((item) => item._id !== id));

    alert("Submission deleted successfully");
  } catch (error) {
    console.error("Delete error:", error);
    alert("Error deleting submission");
  }
};

const handleReview = async (
  id: string,
  decision: "Interested" | "Rejected"
) => {
  try {
    const response = await fetch(
      `${apiBase}/api/sell-device/review/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ decision }),
      }
    );

    if (!response.ok) {
  const errorData = await response.json();
  throw new Error(errorData.message || "Failed to update status");
}
    // Update UI instantly
    setSubmissions((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, status: decision } : item
      )
    );

    alert("Status updated and email sent successfully");
  }catch (error: any) {
  console.error("Review error:", error.message);
  alert(error.message);
}
};

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
                  <th className="p-3 border border-gray-700">Actions</th>
                  <th className="p-3 border border-gray-700">Status</th>
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
                    <td className="p-2 flex border border-gray-700">
                      
  {/* Interested Button */}
  <button 
    disabled={s.status === "Interested"}
    onClick={() => handleReview(s._id, "Interested")}
    className="m-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded disabled:opacity-50"
  >
    Approve
  </button>

  {/* Not Interested Button */}
  <button
    disabled={s.status === "Rejected"}
    onClick={() => handleReview(s._id, "Rejected")}
    className="m-2 bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded disabled:opacity-50"
  >
    Reject
  </button>
                      <button onClick={()=>handleDelete(s._id)} className="m-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
                       Delete
                      </button>
                       
                    </td>
                    <td className="p-2 border border-gray-700 text-center">
  <span
    className={`px-2 py-1 rounded text-xs font-semibold ${
      s.status === "Interested"
        ? "bg-green-600"
        : s.status === "Rejected"
        ? "bg-yellow-600"
        : "bg-gray-600"
    }`}
  >
    {s.status || "Pending"}
  </span>
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
