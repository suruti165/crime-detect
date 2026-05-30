import Link from "next/link";
export const metadata = {
  title: "Login | CrimeDetect",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-2xl">

        <h1 className="text-4xl font-bold text-white mb-3 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to access your crime dashboard.
        </p>
        
        <Link
           href="/"
           className="text-blue-400 hover:text-blue-300 mb-6 inline-block"
        >
           ← Back to Home
        </Link>
        <form className="space-y-5">

          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-xl bg-[#1F2937] border border-gray-700 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-4 rounded-xl bg-[#1F2937] border border-gray-700 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition duration-300 p-4 rounded-xl text-white font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}