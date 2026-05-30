import Link from "next/link";
export const metadata = {
  title: "Report Crime | CrimeDetect",
};

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6 py-10">

      <div className="max-w-3xl mx-auto bg-[#111827] p-8 rounded-2xl border border-gray-800">

        <h1 className="text-4xl font-bold mb-3">
            Report a Crime
        </h1>

        <p className="text-gray-400 mb-8">
            Submit FIR details securely with evidence and crime information.
        </p>

        <Link
           href="/"
           className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
        >
           ← Back to Dashboard
        </Link>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">
              Crime Type
            </label>

            <input
              type="text"
              placeholder="Enter crime type"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition "
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition "
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Date & Time
            </label>

            <input
              type="datetime-local"
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition "
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Describe the crime..."
              className="w-full p-3 rounded-lg bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition "
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Upload Evidence
            </label>

            <input
              type="file"
              className="w-full text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition duration-300 p-3 rounded-lg text-white font-semibold"
          >
            Submit FIR Report
          </button>

        </form>

      </div>

    </div>
  );
}