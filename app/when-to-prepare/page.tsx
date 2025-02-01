'use client'

import Link from 'next/link'

export default function WhenToPreparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">OhFam Tax Services</h1>
          <Link href="/" className="text-red-600 hover:text-red-700">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">When to Prepare</h1>
        <p className="text-xl text-gray-600 mb-12">
          Strategic timing is crucial for optimal tax filing. Follow our recommended timeline to ensure you meet all deadlines and maximize your benefits.
        </p>

        <div className="space-y-8">
          {/* Timeline */}
          <div className="relative">
            {/* Early Filing Period */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 mb-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">📅</span>
                <h2 className="text-2xl font-bold">Early Filing Period (January - March)</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Filing early gives you the advantage of faster processing and more time to address any issues.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <span className="font-semibold">January 31st</span>
                    <p>Deadline for employers to send W-2 forms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <span className="font-semibold">Early February</span>
                    <p>Begin gathering and organizing tax documents</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <span className="font-semibold">March</span>
                    <p>Schedule consultation for complex returns</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Regular Filing Period */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 mb-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">⏰</span>
                <h2 className="text-2xl font-bold">Regular Filing Period (March - April 15)</h2>
              </div>
              <p className="text-gray-600 mb-4">
                The standard filing period when most taxpayers complete their returns.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <span className="font-semibold">March - Early April</span>
                    <p>Complete tax forms and review deductions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <span className="font-semibold">April 15</span>
                    <p>Final deadline for filing returns and making payments</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quarterly Planning */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">📊</span>
                <h2 className="text-2xl font-bold">Quarterly Planning for Airbnb Hosts</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Stay on top of your tax obligations throughout the year with our quarterly planning schedule.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Q1 & Q2</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <span className="font-semibold">January 15</span>
                        <p>Q4 estimated tax payment (previous year)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <span className="font-semibold">April 15</span>
                        <p>Q1 estimated tax payment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <span className="font-semibold">June 15</span>
                        <p>Q2 estimated tax payment</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Q3 & Q4</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <span className="font-semibold">September 15</span>
                        <p>Q3 estimated tax payment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3">✓</span>
                      <div>
                        <span className="font-semibold">December</span>
                        <p>Year-end tax planning review</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Help with Tax Planning?</h2>
            <p className="text-lg mb-6">
              Our tax experts can help you create a customized tax planning schedule. Get in touch for personalized assistance.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                Schedule Consultation
              </button>
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition border border-red-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="text-xl font-bold">OhFam Tax Services</h3>
              <p className="text-gray-400">Professional Tax Preparation Services</p>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <p className="text-gray-400">12924 SE 301st ST</p>
              <p className="text-gray-400">Auburn, WA 98092</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center">
            <p className="text-gray-500">Created by © 2025 OhFam AImate</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 