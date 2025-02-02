'use client'

import Link from 'next/link'

export default function WhatToPreparePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">What to Prepare</h1>
        <p className="text-xl text-gray-600 mb-12">
          Select your tax situation below to see a detailed checklist of required documents.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* W-2 Income Tax Documents */}
          <Link href="/what-to-prepare/w2-checklist">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">W-2 Income Tax Documents</h2>
                  <p className="text-gray-600 mt-2">Complete checklist for W-2 employees</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  W-2 Forms from employers
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Last paystubs
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Previous tax returns
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Personal identification
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Deduction records
                </li>
              </ul>
            </div>
          </Link>

          {/* Airbnb & Rental Income Documents */}
          <Link href="/what-to-prepare/rental-checklist">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
              <div className="flex items-start mb-6">
                <div className="bg-red-50 p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Airbnb & Rental Income</h2>
                  <p className="text-gray-600 mt-2">Complete checklist for rental property income</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Airbnb Income Statements
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Rental Expense Records
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Property Maintenance Receipts
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Utility Bills
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-500">✓</span>
                  Property Documents
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
} 