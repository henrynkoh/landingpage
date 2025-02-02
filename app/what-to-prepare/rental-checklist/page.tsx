'use client'

import { useState } from 'react'
import Link from 'next/link'

interface UploadedFile {
  name: string;
  status: 'uploaded' | 'pending';
  type: string;
}

export default function RentalChecklistPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, documentType: string) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map(file => ({
        name: file.name,
        status: 'uploaded' as const,
        type: documentType
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Airbnb & Rental Income Documents</h1>
        <p className="text-xl text-gray-600 mb-12">Complete checklist for rental property income</p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Document Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Required Documents</h2>
            
            {/* Income Statements Upload */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Airbnb Income Statements
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={(e) => handleFileUpload(e, 'Income Statements')}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-red-50 file:text-red-700
                    hover:file:bg-red-100"
                />
              </div>
            </div>

            {/* Expense Records Upload */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Rental Expense Records
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={(e) => handleFileUpload(e, 'Expense Records')}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-red-50 file:text-red-700
                  hover:file:bg-red-100"
              />
            </div>

            {/* Maintenance Records Upload */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Property Maintenance Receipts
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={(e) => handleFileUpload(e, 'Maintenance Records')}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-red-50 file:text-red-700
                  hover:file:bg-red-100"
              />
            </div>

            {/* Utility Bills Upload */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Utility Bills
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={(e) => handleFileUpload(e, 'Utility Bills')}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-red-50 file:text-red-700
                  hover:file:bg-red-100"
              />
            </div>

            {/* Property Documents Upload */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Property Documents (Deed, Mortgage, Insurance)
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={(e) => handleFileUpload(e, 'Property Documents')}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-red-50 file:text-red-700
                  hover:file:bg-red-100"
              />
            </div>
          </div>

          {/* Uploaded Files Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Uploaded Documents</h2>
            {uploadedFiles.length === 0 ? (
              <p className="text-gray-500">No documents uploaded yet</p>
            ) : (
              <div className="space-y-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-700">{file.type}</p>
                      <p className="text-sm text-gray-500">{file.name}</p>
                    </div>
                    <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                      Uploaded
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link 
            href="/schedule-consultation"
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </main>
  )
} 