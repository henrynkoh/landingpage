'use client'

import Link from 'next/link'

export default function WhatToPreparePage() {
  const documentCategories = [
    {
      id: 'w2',
      title: 'W-2 Income Tax Documents',
      description: 'Complete checklist for W-2 employees',
      icon: '📄',
      link: '/what-to-prepare/w2-checklist',
      items: [
        'W-2 Forms from employers',
        'Last paystubs',
        'Previous tax returns',
        'Personal identification',
        'Deduction records'
      ]
    },
    {
      id: 'airbnb',
      title: 'Airbnb & Rental Income',
      description: 'Documents needed for rental income',
      icon: '🏠',
      link: '/what-to-prepare/rental-checklist',
      items: [
        'Rental income statements',
        'Property expense records',
        'Maintenance receipts',
        'Mortgage documents',
        'Insurance records'
      ]
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            What to Prepare
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Select your tax situation below to see a detailed checklist of required documents.
          </p>

          {/* Document Categories */}
          <div className="space-y-8">
            {documentCategories.map(category => (
              <Link 
                key={category.id}
                href={category.link}
                className="block"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
                  <div className="flex items-start">
                    <span className="text-4xl mr-6">{category.icon}</span>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                        {category.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.items.map((item, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="mr-2 text-red-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="ml-6 flex items-center text-red-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Need Help?
            </h2>
            <p className="text-gray-600 mb-6">
              Not sure which documents you need? Schedule a consultation with our tax experts.
            </p>
            <Link
              href="/schedule-consultation"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl text-lg font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </Link>
          </div>
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