'use client'

import Link from 'next/link'

export default function HowToPreparePage() {
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
        <h1 className="text-4xl font-bold mb-8">How to Prepare Your Taxes</h1>
        <p className="text-xl text-gray-600 mb-12">
          Follow our comprehensive guide to prepare your taxes efficiently using TurboTax. Our expert-backed process ensures accuracy and maximizes your returns.
        </p>

        {/* Step-by-Step Guide */}
        <div className="space-y-8">
          {/* Initial Setup */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">🚀</span>
              <h2 className="text-2xl font-bold">Initial Setup with TurboTax</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Get started with TurboTax by following these essential setup steps:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Account Setup</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Create or sign in to your TurboTax account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Choose the appropriate tax filing product</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Set up multi-factor authentication</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Data Import</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Import last year's return</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Connect financial accounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Set up direct deposit information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TurboTax Process */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">💻</span>
              <h2 className="text-2xl font-bold">Using TurboTax Effectively</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Step 1: Personal Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Verify personal and dependent information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Update address and contact details</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Step 2: Income Entry</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Import W-2s automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Enter Airbnb rental income</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Step 3: Deductions & Credits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Review suggested deductions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Enter rental property expenses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Steps */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">✅</span>
              <h2 className="text-2xl font-bold">Review & Submit</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Complete these final steps to ensure accuracy and submit your return:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <div>
                  <span className="font-semibold">Run Error Check</span>
                  <p className="text-gray-600">Use TurboTax's built-in review system</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <div>
                  <span className="font-semibold">Expert Review</span>
                  <p className="text-gray-600">Get professional review if needed</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <div>
                  <span className="font-semibold">File Electronically</span>
                  <p className="text-gray-600">Submit your return and save copies</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-lg mb-6">
              Our tax experts are here to guide you through the TurboTax process. Get personalized help at any step.
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