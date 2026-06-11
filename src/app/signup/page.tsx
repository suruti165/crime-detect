"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        "/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessage(
          "Account created successfully!"
        );

        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-3 text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Signup to access CrimeDetect
          platform.
        </p>

        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-4 rounded-xl bg-[#1F2937] border border-gray-700 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl bg-[#1F2937] border border-gray-700 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full p-4 rounded-xl bg-[#1F2937] border border-gray-700 text-white outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl text-white font-semibold"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

          {message && (
            <p className="text-center text-green-400">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}