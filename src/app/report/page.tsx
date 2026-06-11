"use client";

import Link from "next/link";
import { useState } from "react";

export default function ReportPage() {
  const [file, setFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    crimeType: "",
    location: "",
    dateTime: "",
    description: "",
    reporterName: "",
    reporterPhone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let evidenceUrl = "";

      if (file) {
        const uploadData = new FormData();
        uploadData.append("file", file);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        const uploadResult = await uploadRes.json();

        if (uploadResult.success) {
          evidenceUrl = uploadResult.imageUrl;
        } else {
          setMessage("Evidence upload failed.");
          setLoading(false);
          return;
        }
      }

      const res = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          evidenceUrl,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("FIR report submitted successfully!");

        setFormData({
          crimeType: "",
          location: "",
          dateTime: "",
          description: "",
          reporterName: "",
          reporterPhone: "",
        });

        setFile(null);
      } else {
        setMessage("Failed to submit report.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-[#111827] p-8 rounded-2xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-3">Report a Crime</h1>

        <p className="text-gray-400 mb-8">
          Submit FIR details securely with crime information.
        </p>

        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
        >
          ← Back to Dashboard
        </Link>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-300">Crime Type</label>
            <input
              name="crimeType"
              value={formData.crimeType}
              onChange={handleChange}
              type="text"
              placeholder="Enter crime type"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              placeholder="Enter location"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Date & Time</label>
            <input
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              type="datetime-local"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Reporter Name</label>
            <input
              name="reporterName"
              value={formData.reporterName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Reporter Phone</label>
            <input
              name="reporterPhone"
              value={formData.reporterPhone}
              onChange={handleChange}
              type="text"
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Describe the crime..."
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Upload Evidence</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full text-gray-400"
            />

            {file && (
              <p className="text-sm text-green-400 mt-2">
                Selected: {file.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit FIR Report"}
          </button>

          {message && (
            <p className="text-center text-green-400 font-medium">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}