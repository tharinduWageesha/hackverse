import React from "react";
import { Code } from "lucide-react";

export default function HeaderSection() {
  return (
    <nav className="w-full bg-transparent py-4 px-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
            <Code className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            HackVerse 2025
          </span>
        </div>

        <div>
          <ol className="flex space-x-10 text-white font-medium">
            <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
              Home
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
              About
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
              Events
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
              Sponsors
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
              Contact
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
}
