import React from 'react'
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  return (
    <div>
      <div className="relative pt-9 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
              January 15-16, 2025 • Virtual & In-Person
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Build The Future
            </span>
            <br />
            <span className="text-white">In 24 Hours</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Join 500+ innovators, developers, and creators in the ultimate hackathon experience. 
            Transform your ideas into reality and compete for amazing prizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-2">
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300">
              View Schedule
            </button>
          </div>
      </div>
    </div>
  )
}
