import Link from "next/link";
import { Shield, BarChart3, Bot } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <nav className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-gray-800 bg-[#0B1120]/90 backdrop-blur-md gap-4 md:gap-0">
        <h1 className="text-2xl font-bold text-blue-500">CrimeDetect</h1>

        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-5 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition">
              Signup
            </button>
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Smart Crime Detection & FIR Management System
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          A modern AI-powered platform for crime reporting, analytics, FIR
          management, and real-time monitoring.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-10 w-full sm:w-auto items-center">
          <Link href="/report">
            <button className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-lg font-semibold">
              Report Crime
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="px-8 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition text-lg font-semibold">
              Explore Dashboard
            </button>
          </Link>
        </div>
      </section>

     <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 pb-20">
        <Link href="/report">
          <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300 cursor-pointer">
            <Shield className="text-blue-500 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              FIR Management
            </h2>

            <p className="text-gray-400">
              Easily create and manage FIR reports with document and image
              uploads.
            </p>
          </div>
        </Link>

        <Link href="/dashboard">
          <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300 cursor-pointer">
            <BarChart3 className="text-blue-500 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Crime Analytics
            </h2>

            <p className="text-gray-400">
              View area-wise crime analysis using interactive charts and
              dashboards.
            </p>
          </div>
        </Link>

        <Link href="/ai-assistant">
          <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300 cursor-pointer">
            <Bot className="text-blue-500 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              AI Assistant
            </h2>

            <p className="text-gray-400">
              AI-powered assistant for smart FIR summarization and crime
              insights.
            </p>
          </div>
        </Link>
      </section>

  <footer className="border-t border-gray-800 mt-10 py-10 px-6 md:px-10">

     <div className="flex flex-col md:flex-row justify-between items-center gap-6">

       <div>
         <h2 className="text-2xl font-bold text-blue-500">
            CrimeDetect
         </h2>

         <p className="text-gray-400 mt-2 text-center md:text-left">
           AI-powered crime reporting and analytics platform.
         </p>
        </div>

        <div className="flex gap-6 text-gray-400">
           <Link href="/dashboard" className="hover:text-blue-400 transition">
              Dashboard
           </Link>

           <Link href="/report" className="hover:text-blue-400 transition">
              Report
           </Link>

           <Link href="/admin" className="hover:text-blue-400 transition">
              Admin
           </Link>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
         © 2026 CrimeDetect. All rights reserved.
      </div>

    </footer>
    </main>
  );
}