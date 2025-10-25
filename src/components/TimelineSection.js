import React from 'react'
import { CalendarClock, CalendarOff, CalendarCheck, Award } from "lucide-react";
const stats = [
    { icon: CalendarClock, value: 'Nov 15', label: 'Registration Opens' },
    { icon: CalendarOff, value: 'Dec 10', label: 'Registration Closes' },
    { icon: CalendarCheck, value: 'Jan 15', label: 'Hackathon Begins' },
    { icon: Award, value: 'Jan 17', label: 'Winners Announced' }
  ];
export default function TimelineSection() {
  return (
    <div className="text-center mb-1 px-4" id="timeline">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Event Timeline
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Mark your calendars and don't miss any important dates
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl px-9 py-10 hover:border-cyan-500/50 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
    </div>
  )
}
