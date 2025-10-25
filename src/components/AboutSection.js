import React from 'react'
import { Code, Trophy, Users, Zap } from "lucide-react";

function AboutSection() {
  return (
    <div className="text-center mb-12 py-20 px-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                What is HackVerse'25 ?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              HackVerse is more than just a hackathon—it's a launchpad for innovation, 
              collaboration, and groundbreaking ideas.
            </p>

            <div className="my-10 flex justify-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Innovate</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Push boundaries and create solutions that matter. Work on real-world problems 
                      with cutting-edge technology and tools.
                    </p>
                </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Collaborate</h3>
              <p className="text-gray-400 leading-relaxed">
                Team up with talented individuals from diverse backgrounds. Network with 
                industry experts and fellow innovators.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Win Big</h3>
              <p className="text-gray-400 leading-relaxed">
                Compete for a $10,000 prize pool, mentorship opportunities, and a chance to 
                bring your project to life with our partners.
              </p>
            </div>
            </div>
          </div>
    </div>
  )
}

export default AboutSection