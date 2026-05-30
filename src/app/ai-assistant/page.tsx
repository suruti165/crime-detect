export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-4 py-6 md:p-6">
      <div className="w-full max-w-4xl mx-auto bg-[#111827] rounded-2xl border border-gray-800 p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          AI Crime Assistant
        </h1>

        <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
          Ask anything related to crime reports, FIR summaries, or safety suggestions.
        </p>

        <div className="bg-[#1F2937] rounded-xl p-4 md:p-5 h-[320px] md:h-[400px] overflow-y-auto border border-gray-700">
          <div className="mb-4">
            <div className="bg-blue-600 p-3 rounded-xl inline-block max-w-[85%] text-sm md:text-base">
              Hello! How can I help you?
            </div>
          </div>

          <div className="text-right">
            <div className="bg-gray-700 p-3 rounded-xl inline-block max-w-[85%] text-sm md:text-base">
              Show recent crime insights
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5">
          <input
            type="text"
            placeholder="Ask AI Assistant..."
            className="flex-1 p-3 md:p-4 rounded-xl bg-[#1F2937] border border-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
          />

          <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 md:px-8 py-3 md:py-0 rounded-xl font-semibold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}