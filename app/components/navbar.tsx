"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-5 navBar">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="#about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="#project" className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>

        <div className="resumeBtn bg-blue-500 hover:bg-blue-600">
          <Link href="/Rishita_Bhatt_Resume.pdf" target="_blank">
            📎 Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
