export const metadata = {
  title: "AI Assistant | CrimeDetect",
};

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-6">

      <div className="max-w-4xl mx-auto bg-[#111827] rounded-2xl border border-gray-800 p-6">

        <h1 className="text-4xl font-bold mb-3">
          AI Crime Assistant
        </h1>

        <p className="text-gray-400 mb-8">
          Ask anything related to crime reports, FIR summaries, or safety suggestions.
        </p>

        {/* Chat Box */}

        <div className="bg-[#1F2937] rounded-xl p-5 h-[400px] overflow-y-auto border border-gray-700">

          <div className="mb-4">
            <div className="bg-blue-600 p-3 rounded-xl inline-block">
              Hello! How can I help you?
            </div>
          </div>

          <div className="text-right">
            <div className="bg-gray-700 p-3 rounded-xl inline-block">
              Show recent crime insights
            </div>
          </div>

        </div>

        {/* Input */}

        <div className="flex gap-4 mt-5">

          <input
            type="text"
            placeholder="Ask AI Assistant..."
            className="flex-1 p-4 rounded-xl bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 px-8 rounded-xl font-semibold"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}