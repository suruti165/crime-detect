"use client";

import AiAssistant from "@/components/AiAssistant";
import Link from "next/link";

export default function AiAssistantPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      
      <div className="border-b border-gray-800 px-4 md:px-6 py-4 flex items-center gap-4">

        <Link
          href="/"
          className="bg-[#111827] hover:bg-[#1F2937] px-4 py-2 rounded-xl border border-gray-700"
        >
          ← Back
        </Link>

        <h1 className="text-xl md:text-2xl font-bold">
          AI Crime Assistant
        </h1>

      </div>

      <AiAssistant />
    </div>
  );
}