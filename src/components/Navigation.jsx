import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

// Transition from tailwind is fun

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-purple-800 to-gray-900 border-b border-gray-700 py-4 px-6 text-gray-200">
      <div className="flex justify-between items-center gap-6 text-sm font-medium ">
        {/* Left Side */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-300 hover:text-purple-400 font-bold transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-gray-300 hover:text-purple-400 font-bold transition-colors duration-300"
          >
            Pet Posts
          </Link>
          <Link
            href="/profile"
            className="text-gray-300 hover:text-purple-400 font-bold transition-colors duration-300"
          >
            Profile
          </Link>
        </div>
        <div>
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-3 py-1 rounded border border-purple-600 text-purple-300 hover:bg-purple-700 hover:text-white transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-3 py-1 rounded border border-purple-600 text-purple-300 hover:bg-purple-700 hover:text-white transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
