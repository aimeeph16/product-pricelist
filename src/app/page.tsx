"use client";
import Link from "next/link";
import { useMultiplierStore } from "./lib/useMultiplierStore";

export default function Home() {
  const resetMultiplier = useMultiplierStore((state) => state.resetMultiplier);

  return (
    <div className="grid grid-rows-[8px_1fr_8px] items-center justify-items-center min-h-screen p-4">
      {/* <NavBar /> */}
      <main className="w-full h-[80%] flex flex-col gap-[32px] row-start-2 items-center justify-center px-8">
        <h1 className="font-bold text-5xl">Welcome to the Maju Bersama Group</h1>
        <Link href="/products/tab1">
          <button
            className="flex gap-2 items-center hover:opacity-50 cursor-pointer px-4 py-2 bg-black text-white text-2xl border rounded-lg shadow-md"
            onClick={resetMultiplier}
          >
            Go to Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m10 20l8-8l-8-8l-1.414 1.414L15.172 12l-6.586 6.586z"
              />
            </svg>
          </button>
        </Link>
      </main>
    </div>
  );
}
