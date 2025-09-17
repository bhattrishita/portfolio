"use client";
import Link from "next/link";

export default function FloatingResumeButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      >
        📄 View Resume
      </Link>
    </div>
  );
}
