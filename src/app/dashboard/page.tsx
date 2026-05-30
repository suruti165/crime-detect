"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  FileText,
  Shield,
  LogOut,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    crimes: 40,
  },
  {
    month: "Feb",
    crimes: 55,
  },
  {
    month: "Mar",
    crimes: 70,
  },
  {
    month: "Apr",
    crimes: 50,
  },
  {
    month: "May",
    crimes: 90,
  },
];

export default function DashboardPage() {
  return (
  <div className="min-h-screen bg-[#0B1120] text-white flex">

    {/* Sidebar */}

    <aside className="sticky top-0 h-screen w-64 bg-[#111827] border-r border-gray-800 p-6 hidden md:block">

      <h1 className="text-3xl font-bold text-blue-500 mb-10">
        CrimeDetect
      </h1>

    <nav className="space-y-4">
         <Link
            href="/dashboard"
            className="flex items-center gap-3 bg-blue-600 px-4 py-3 rounded-xl"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
           href="/report"
           className="flex items-center gap-3 hover:bg-[#1F2937] px-4 py-3 rounded-xl transition"
        >
           <FileText size={20} />
           Reports
        </Link>

        <Link
          href="/admin"
          className="flex items-center gap-3 hover:bg-[#1F2937] px-4 py-3 rounded-xl transition"
     >
       <Shield size={20} />
       Admin Panel
     </Link>

     <Link
        href="/login"
        className="flex items-center gap-3 hover:bg-[#1F2937] px-4 py-3 rounded-xl transition"
     >
       <LogOut size={20} />
       Logout
      </Link>
    </ nav>
    </aside>

    {/* Main Content */}

    <main className="flex-1 p-8">

      <div className="flex items-center justify-between mb-10">

        <div>
            <h1 className="text-4xl font-bold">
              Crime Analytics Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
               Monitor crime reports, analytics, and case updates.
            </p>
        </div>

        <div className="bg-[#111827] border border-gray-800 px-5 py-3 rounded-xl">
           <p className="text-sm text-gray-400">
             Total Reports
           </p>

           <h2 className="text-2xl font-bold text-blue-400">
             1,248
           </h2>
        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300">
          <h2 className="text-gray-400 text-lg">
            Total Crimes
          </h2>

          <p className="text-4xl font-bold mt-4 text-red-500">
            1,248
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300">
          <h2 className="text-gray-400 text-lg">
            Active Cases
          </h2>

          <p className="text-4xl font-bold mt-4 text-yellow-400">
            312
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300">
          <h2 className="text-gray-400 text-lg">
            Solved Cases
          </h2>

          <p className="text-4xl font-bold mt-4 text-green-500">
            936
          </p>
        </div>

      </div>

      {/* Recent Activity */}

      <div className="mt-10 bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activities
        </h2>

        <div className="space-y-4 text-gray-300">

          <p>• FIR Report submitted in Patna</p>
          <p>• Theft case approved by Admin</p>
          <p>• AI generated FIR summary</p>
          <p>• Crime analytics updated</p>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-10 bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition duration-300">

        <h2 className="text-2xl font-bold mb-6">
          Monthly Crime Analysis
        </h2>

        <div className="h-[300px]">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={data}>

              <XAxis dataKey="month" stroke="#9CA3AF" />

              <YAxis stroke="#9CA3AF" />

              <Tooltip />

              <Bar
                dataKey="crimes"
                fill="#2563EB"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

{/* Recent Cases Table */}

<div className="mt-10 bg-[#111827] p-6 rounded-2xl border border-gray-800">

  <h2 className="text-2xl font-bold mb-6">
    Recent Crime Reports
  </h2>

  <div className="overflow-x-auto">

    <table className="w-full text-left">

      <thead>

        <tr className="border-b border-gray-700 text-gray-400">

          <th className="pb-4">Case ID</th>
          <th className="pb-4">Crime Type</th>
          <th className="pb-4">Location</th>
          <th className="pb-4">Status</th>

        </tr>

      </thead>

      <tbody className="text-gray-300">

        <tr className="border-b border-gray-800 hover:bg-[#1F2937] transition">
          <td className="py-4">#1021</td>
          <td>Theft</td>
          <td>Patna</td>

          <td>
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
              Pending
            </span>
          </td>
        </tr>

        <tr className="border-b border-gray-800 hover:bg-[#1F2937] transition">
          <td className="py-4">#1022</td>
          <td>Cyber Crime</td>
          <td>Delhi</td>

          <td>
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm">
              Solved
            </span>
          </td>
        </tr>

        <tr className="hover:bg-[#1F2937] transition">
          <td className="py-4">#1023</td>
          <td>Robbery</td>
          <td>Mumbai</td>

          <td>
            <span className="bg-red-500 text-black px-3 py-1 rounded-full text-sm">
              Active
            </span>
          </td>
         </tr>

       </tbody>

      </table>

    </div>

  </div>

    </main>

  </div>
);
}