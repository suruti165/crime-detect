export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-8">

      <h1 className="text-4xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse bg-[#111827] rounded-2xl overflow-hidden shadow-xl">

          <thead>

            <tr className="bg-[#1F2937] text-left">

              <th className="p-4">Case ID</th>
              <th className="p-4">Crime Type</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-t border-gray-800">

              <td className="p-4">#1021</td>
              <td className="p-4">Theft</td>
              <td className="p-4">Patna</td>

              <td className="p-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </td>

              <td className="p-4 flex gap-3">

                <button className="bg-green-600 hover:bg-green-700 hover:scale-105 transition duration-300 px-4 py-2 rounded-lg">
                  Approve
                </button>

                <button className="bg-red-600 hover:bg-red-700 hover:scale-105 transition duration-300 px-4 py-2 rounded-lg">
                  Reject
                </button>

              </td>

            </tr>

            <tr className="border-t border-gray-800">

              <td className="p-4">#1022</td>
              <td className="p-4">Cyber Crime</td>
              <td className="p-4">Delhi</td>

              <td className="p-4">
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm">
                  Approved
                </span>
              </td>

              <td className="p-4 flex gap-3">

                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
                  Approve
                </button>

                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
                  Reject
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}