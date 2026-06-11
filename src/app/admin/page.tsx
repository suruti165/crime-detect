"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Report = {
  _id: string;
  trackingId: string;
  crimeType: string;
  location: string;
  reporterName: string;
  reporterPhone: string;
  status: string;
  evidenceUrl: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  async function fetchReports() {
    try {
      const res = await fetch("/api/reports");
      const data = await res.json();

      if (data.success) {
        setReports(data.reports);
      }
    } catch (error) {
      console.log("Failed to fetch reports", error);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const res = await fetch(`/api/reports/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (data.success) {
        fetchReports();
      }
    } catch (error) {
      console.log("Status update failed", error);
    }
  }
  
  useEffect(() => {
     const token = localStorage.getItem("token");
     const user = localStorage.getItem("user");

     console.log("ADMIN TOKEN:", token);
     console.log("ADMIN USER:", user);

     if (!token) {
        setAuthError("No token found. Please login again.");
        setLoading(false);
        return;
      }

     if (!user) {
         setAuthError("No user found. Please login again.");
         setLoading(false);
         return;
      }

      const parsedUser = JSON.parse(user);

      if (parsedUser.role !== "admin") {
          setAuthError("Access denied. Admin only.");
          setLoading(false);
          return;
      }

      fetchReports();
    }, []);
   
  
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8">
      <h1 className="text-4xl font-bold mb-10">Admin Panel</h1>
        {authError && (
            <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
               {authError}
            </div>
   )}

       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
          <p className="text-gray-400">Total Reports</p>
          <h2 className="text-3xl font-bold">{reports.length}</h2>
        </div>

        <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
          <p className="text-gray-400">Pending</p>
          <h2 className="text-3xl font-bold">
            {reports.filter((r) => r.status === "Pending").length}
          </h2>
        </div>

        <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
          <p className="text-gray-400">Investigating</p>
          <h2 className="text-3xl font-bold">
            {reports.filter((r) => r.status === "Investigating").length}
          </h2>
        </div>

        <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
          <p className="text-gray-400">Solved</p>
          <h2 className="text-3xl font-bold">
            {reports.filter((r) => r.status === "Solved").length}
          </h2>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading reports...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#111827] rounded-2xl overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-[#1F2937] text-left">
                <th className="p-4">Tracking ID</th>
                <th className="p-4">Crime Type</th>
                <th className="p-4">Location</th>
                <th className="p-4">Reporter</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Evidence</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr key={report._id} className="border-t border-gray-800">
                  <td className="p-4">{report.trackingId}</td>
                  <td className="p-4">{report.crimeType}</td>
                  <td className="p-4">{report.location}</td>
                  <td className="p-4">{report.reporterName}</td>
                  <td className="p-4">{report.reporterPhone}</td>

                  <td className="p-4">
                    {report.evidenceUrl ? (
                      <a
                        href={report.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-gray-500">No Evidence</span>
                    )}
                  </td>

                  <td className="p-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                      {report.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-3">
                    <button
                      onClick={() => updateStatus(report._id, "Investigating")}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    >
                      Investigate
                    </button>

                    <button
                      onClick={() => updateStatus(report._id, "Solved")}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                    >
                      Solve
                    </button>

                    <button
                      onClick={() => updateStatus(report._id, "Pending")}
                      className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg"
                    >
                      Pending
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {reports.length === 0 && (
            <p className="text-gray-400 mt-6">No reports found.</p>
          )}
        </div>
      )}
    </div>
  );
}