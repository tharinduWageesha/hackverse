import React from 'react'
import { Code,Mail,MapPin } from 'lucide-react'
export default function 
() {
  return (
    <div id="register">
        <section id="register" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Hack?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Registration closes December 10th. Secure your spot today and be part of something amazing.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center space-x-3 mx-auto" onClick={window.open.bind(window, 'https://forms.gle/89YtY6T7f8kX9r3B8', '_blank')}>
            Register Your Team
          </button>
        </div>
      </section>
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">HackVerse 2025</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering innovation through collaboration and creativity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Timeline', 'Challenges', 'Contact'].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>contact@hackverse.org</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>University of Colombo School of Computing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 HackVerse. All rights reserved. | Organized by IEEE Computer Society UCSC</p>
          </div>
        </div>
      </footer>
    </div>
    
      
  )
}
