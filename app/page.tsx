'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white/70 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
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
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 px-4">
              <div className="flex items-center mb-6 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="group">
                  <svg
                    className="w-16 h-16 mr-4 transform transition-transform duration-300 ease-out group-hover:scale-110"
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
                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  Professional Tax Preparation by OhFam Tax Services
                </h1>
              </div>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Expert guidance using TurboTax to maximize your returns and ensure compliance
              </p>
              <ul className="mb-8 text-lg space-y-4">
                <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                  <span className="mr-3 text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">Specialized in W-2 Income Tax Returns</span>
                </li>
                <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                  <span className="mr-3 text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">Airbnb Short-Term Rental Tax Expertise</span>
                </li>
                <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                  <span className="mr-3 text-red-500 text-xl">✓</span>
                  <span className="text-gray-300">TurboTax-Powered Solutions</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-5/12 px-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Contact Us Today
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  />
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                    CONTACT NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* What to Prepare */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="border border-gray-200/50 rounded-2xl p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white hover:to-gray-50">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  What to Prepare
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">W-2 Forms from All Employers</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Airbnb Income Statements</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Rental Expense Records</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Property Maintenance Receipts</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Utility Bills for Rental Property</span>
                  </li>
                </ul>
                <Link 
                  href="/what-to-prepare"
                  className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* When to Prepare */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="border border-gray-200/50 rounded-2xl p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white hover:to-gray-50">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  When to Prepare
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Early Filing: January - March</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Regular Deadline: April 15th</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Extension Available if Needed</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Quarterly Estimates for Airbnb</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Year-round Tax Planning</span>
                  </li>
                </ul>
                <Link 
                  href="/when-to-prepare"
                  className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* How to Prepare */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="border border-gray-200/50 rounded-2xl p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white hover:to-gray-50">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  How to Prepare
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Gather All Tax Documents</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Organize Rental Records</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Schedule Consultation</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">TurboTax Guided Process</span>
                  </li>
                  <li className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-600">Expert Review & Filing</span>
                  </li>
                </ul>
                <Link 
                  href="/how-to-prepare"
                  className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-100 via-white to-gray-100 py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 text-gray-600">
            Let us help you navigate your tax preparation with confidence
          </p>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-gray-600">
              Visit us at:
              <br />
              <strong className="text-gray-900">12924 SE 301st ST, Auburn WA 98092</strong>
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <Link
              href="/schedule-consultation"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl text-lg font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-red-600 rounded-xl text-lg font-semibold hover:bg-red-50 border border-red-200 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
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