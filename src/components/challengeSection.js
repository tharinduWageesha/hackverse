import React from 'react'
import { ArrowRight } from "lucide-react";

const tracks = [
    { 
        title: 'AI & Machine Learning',
        desc: 'Build intelligent solutions that learn and adapt',
        gradient: 'from-purple-500 to-pink-500'
    },
    { 
        title: 'Web3 & Blockchain',
        desc: 'Create decentralized applications of tomorrow',
        gradient: 'from-blue-500 to-cyan-500'
    },
    { 
        title: 'Healthcare Tech',
        desc: 'Innovate solutions for better health outcomes',
        gradient: 'from-green-500 to-emerald-500'
    },
    { 
        title: 'Open Innovation',
        desc: 'Your wildest ideas, no boundaries',
        gradient: 'from-orange-500 to-red-500'
    }
  ];

export default function () {
  return (
    <section id="tracks" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Challenge Tracks
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Choose your path and build something extraordinary
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map((track, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{track.title}</h3>
                  <p className="text-gray-400 mb-4">{track.desc}</p>
                  <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${track.gradient} bg-clip-text text-transparent`}>
                    Available Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
