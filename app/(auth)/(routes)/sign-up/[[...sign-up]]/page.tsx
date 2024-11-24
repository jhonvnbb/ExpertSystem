import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg w-full max-w-5xl">
        <div className="flex items-center justify-center flex-col p-8 md:p-12">
          <SignUp />
        </div>

        <div className="hidden md:flex flex-1 bg-blue-500 rounded-r-xl p-8 items-center justify-center">
          <div className="flex flex-col items-center text-white space-y-4">
            <div className="mb-2">
              <img
                src="https://placeholder.com/150"
                alt="Logo"
                className="h-25 mx-auto md:mx-0"
              />
            </div>
            <h2 className="text-2xl font-bold">New Update Available</h2>
            <p className="text-sm">We have added some new awesome features.</p>
            <Link
              href="/"
              className="bg-white text-center text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition w-1/2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
