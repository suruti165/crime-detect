"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Report = {
  _id: string;
  trackingId: string;
  crimeType: string;
  location: string;
  dateTime: string;
  description: string;
  reporterName: string;
  reporterPhone: string;
  status: string;
  evidenceUrl: string;
};

export default function DashboardPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const router = useRouter();

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

  async function deleteReport(id: string) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/reports/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        fetchReports();
      }
    } catch (error) {
      console.log("Delete failed", error);
    }
  }

  const filteredReports = reports.filter((report) =>
    `${report.crimeType} ${report.location} ${report.reporterName} ${report.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  useEffect(() => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    router.push("/login");
    return;
  }

  const parsedUser = JSON.parse(user);

  if (parsedUser.role !== "admin") {
    alert("Access denied! Admin only.");
    router.push("/");
    return;
  }

  fetchReports();
}, [router]);
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8">
      <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">
             Crime Reports Dashboard
          </h1>

          <button
             onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                router.push("/login");
          }}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
       >
         Logout
      </button>
    </div>

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

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by crime type, location, reporter, status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500"
        />
      </div>

      {loading ? (
        <p className="text-gray-400">Loading reports...</p>
      ) : reports.length === 0 ? (
        <p className="text-gray-400">No reports found.</p>
      ) : (
        <div className="overflow-x-auto bg-[#111827] rounded-xl border border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-[#1F2937] text-gray-300">
              <tr>
                <th className="p-4">Crime Type</th>
                <th className="p-4">Tracking ID</th>
                <th className="p-4">Location</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Reporter</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Status</th>
                <th className="p-4">Evidence</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredReports.map((report) => (
                <tr
                  key={report._id}
                  className="border-t border-gray-800 hover:bg-[#1F2937]"
                >
                  <td className="p-4">{report.crimeType}</td>
                  <td className="p-4">{report.trackingId}</td>
                  <td className="p-4">{report.location}</td>
                  <td className="p-4">{report.dateTime}</td>
                  <td className="p-4">{report.reporterName}</td>
                  <td className="p-4">{report.reporterPhone}</td>

                  <td className="p-4">
                    <select
                      value={report.status}
                      onChange={(e) =>
                        updateStatus(report._id, e.target.value)
                      }
                      className="bg-[#1F2937] text-white border border-gray-700 rounded-lg p-2"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Investigating">Investigating</option>
                      <option value="Solved">Solved</option>
                    </select>
                  </td>

                  <td className="p-4">
                    {report.evidenceUrl ? (
                      <a
                        href={report.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm inline-block"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-gray-500">No evidence</span>
                    )}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => deleteReport(report._id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}