'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ScheduleConsultationPage() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const services = [
    {
      id: 'w2',
      title: 'W-2 Tax Return',
      description: 'Individual tax return for W-2 employees',
      duration: '30 minutes',
      price: '$75'
    },
    {
      id: 'airbnb',
      title: 'Airbnb & Rental Income',
      description: 'Tax consultation for short-term rental income',
      duration: '45 minutes',
      price: '$95'
    },
    {
      id: 'both',
      title: 'Combined Consultation',
      description: 'Comprehensive review of W-2 and rental income',
      duration: '60 minutes',
      price: '$120'
    }
  ]

  const availableDates = [
    '2025-02-01', '2025-02-02', '2025-02-03', '2025-02-04', '2025-02-05'
  ]

  const availableTimes = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
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
          Schedule a Consultation
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Choose your preferred service, date, and time for a consultation with our tax experts.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Service Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Select Service
            </h2>
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                    selectedService === service.id
                      ? 'border-red-600 bg-red-50 shadow-lg'
                      : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
                    <span className="text-red-600 font-semibold">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <p className="text-sm text-gray-500">Duration: {service.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                Select Date
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {availableDates.map((date) => (
                  <button
                    key={date}
                    className={`p-4 rounded-xl border text-center transition-all duration-300 transform hover:scale-[1.02] ${
                      selectedDate === date
                        ? 'border-red-600 bg-red-50 text-red-600 shadow-lg'
                        : 'border-gray-200 hover:border-red-300 hover:shadow-md text-gray-600'
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {new Date(date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Select Time
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      className={`p-4 rounded-xl border text-center transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedTime === time
                          ? 'border-red-600 bg-red-50 text-red-600 shadow-lg'
                          : 'border-gray-200 hover:border-red-300 hover:shadow-md text-gray-600'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary & Confirmation */}
        {selectedService && selectedDate && selectedTime && (
          <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Consultation Summary
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Selected Service</h3>
                <p className="text-gray-600">
                  {services.find(s => s.id === selectedService)?.title}
                </p>
                <p className="text-red-600 font-semibold mt-1">
                  {services.find(s => s.id === selectedService)?.price}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Date</h3>
                <p className="text-gray-600">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Time</h3>
                <p className="text-gray-600">{selectedTime}</p>
              </div>
            </div>

            <form className="space-y-4 max-w-xl">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              />
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
              <textarea
                placeholder="Additional Notes or Questions"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                Confirm Consultation
              </button>
            </form>
          </div>
        )}
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