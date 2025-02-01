'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [contactMethod, setContactMethod] = useState('message')

  const contactMethods = [
    {
      id: 'message',
      title: 'Send a Message',
      description: 'Write us a message and we\'ll respond within 24 hours',
      icon: '✉️'
    },
    {
      id: 'call',
      title: 'Request a Call',
      description: 'Schedule a call back at your preferred time',
      icon: '📞'
    },
    {
      id: 'visit',
      title: 'Visit Office',
      description: 'Come to our office for an in-person meeting',
      icon: '🏢'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="group">
              <svg
                className="w-10 h-10 mr-3 transform transition-transform duration-300 ease-out group-hover:scale-110"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'}}
              >
                <circle cx="20" cy="20" r="20" fill="#1F2937"/>
                <path
                  d="M8 28C12 28 16 24 20 20C24 16 28 12 32 12C28 12 24 16 20 20C16 24 12 28 8 28Z"
                  fill="#EF4444"
                  strokeWidth="2"
                  stroke="#F87171"
                  className="animate-pulse"
                />
                <path
                  d="M20 20C16 24 12 28 8 28C12 28 16 24 20 20Z"
                  fill="#B91C1C"
                  strokeWidth="1"
                  stroke="#F87171"
                />
                <path
                  d="M32 12C28 12 24 16 20 20C24 16 28 12 32 12Z"
                  fill="#B91C1C"
                  strokeWidth="1"
                  stroke="#F87171"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              OhFam Tax Services
            </h1>
          </div>
          <Link href="/" className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Choose how you'd like to connect with us. We're here to help with your tax preparation needs.
        </p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                contactMethod === method.id
                  ? 'border-red-600 bg-red-50 shadow-lg'
                  : 'border-gray-200 hover:border-red-300 hover:shadow-md'
              }`}
              onClick={() => setContactMethod(method.id)}
            >
              <span className="text-4xl mb-6 block transform transition-transform duration-300 hover:scale-110">{method.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Forms */}
        <div className="max-w-2xl mx-auto">
          {contactMethod === 'message' && (
            <form className="space-y-6 bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300">
                <option value="">Select Topic</option>
                <option value="w2">W-2 Tax Return</option>
                <option value="airbnb">Airbnb & Rental Income</option>
                <option value="general">General Inquiry</option>
              </select>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          )}

          {contactMethod === 'call' && (
            <form className="space-y-6 bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300">
                <option value="">Best Time to Call</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 6PM)</option>
              </select>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300">
                <option value="">Select Topic</option>
                <option value="w2">W-2 Tax Return</option>
                <option value="airbnb">Airbnb & Rental Income</option>
                <option value="general">General Inquiry</option>
              </select>
              <textarea
                placeholder="Additional Notes"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                Request Call Back
              </button>
            </form>
          )}

          {contactMethod === 'visit' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Office Location
                </h3>
                <p className="text-gray-600 mb-2">12924 SE 301st ST</p>
                <p className="text-gray-600 mb-4">Auburn, WA 98092</p>
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  {/* Map placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gradient-to-br from-gray-100 to-gray-200">
                    Google Maps Integration
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-800 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <form className="space-y-6 bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Schedule Office Visit
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300">
                  <option value="">Preferred Visit Date</option>
                  <option value="next-week">Next Week</option>
                  <option value="two-weeks">In Two Weeks</option>
                  <option value="three-weeks">In Three Weeks</option>
                </select>
                <textarea
                  placeholder="Additional Notes"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Schedule Visit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-8 md:mb-0">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                OhFam Tax Services
              </h3>
              <p className="text-gray-400 mt-2">Professional Tax Preparation Services</p>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <p className="text-gray-400">12924 SE 301st ST</p>
              <p className="text-gray-400">Auburn, WA 98092</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">Created by © 2025 OhFam AImate</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 