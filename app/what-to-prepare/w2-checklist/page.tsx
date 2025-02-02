'use client'

import Link from 'next/link'
import { useState } from 'react'

interface UploadedFile {
  name: string;
  status: 'uploaded' | 'pending';
  type: string;
}

export default function W2ChecklistPage() {
  const [completedItems, setCompletedItems] = useState<string[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])

  const documentCategories = [
    {
      id: 'income',
      title: 'Income Documents',
      documents: [
        { id: 'w2-forms', name: 'W-2 Forms', description: 'Forms from all employers during the tax year' },
        { id: 'last-paystub', name: 'Last Paystub', description: 'Final paystub from each employer' },
        { id: 'prev-return', name: 'Previous Year\'s Tax Return', description: 'For reference and comparison' },
        { id: '1099-int', name: '1099-INT Forms', description: 'Interest income statements from banks' },
        { id: '1099-div', name: '1099-DIV Forms', description: 'Dividend income statements' }
      ]
    },
    {
      id: 'deductions',
      title: 'Deduction Documents',
      documents: [
        { id: 'mortgage', name: 'Mortgage Interest Statement (Form 1098)', description: 'From your mortgage lender' },
        { id: 'property-tax', name: 'Property Tax Statements', description: 'Annual property tax payments' },
        { id: 'charity', name: 'Charitable Donation Receipts', description: 'Records of all charitable contributions' },
        { id: 'education', name: 'Education Expenses (Form 1098-T)', description: 'Tuition and education-related expenses' },
        { id: 'medical', name: 'Medical Expense Records', description: 'Records of substantial medical expenses' }
      ]
    },
    {
      id: 'personal',
      title: 'Personal Information',
      documents: [
        { id: 'ssn', name: 'Social Security Cards', description: 'For you, spouse, and dependents' },
        { id: 'id', name: 'Government-issued ID', description: 'Driver\'s license or state ID' },
        { id: 'bank-info', name: 'Bank Account Information', description: 'For direct deposit of refund' },
        { id: 'address', name: 'Current Address Proof', description: 'If changed during the tax year' },
        { id: 'dependent-info', name: 'Dependent Information', description: 'Birth certificates and SSNs of dependents' }
      ]
    },
    {
      id: 'special',
      title: 'Special Situations',
      documents: [
        { id: 'hsa', name: 'HSA Contributions (Form 5498-SA)', description: 'Health Savings Account information' },
        { id: 'ira', name: 'IRA Contributions', description: 'Traditional and Roth IRA contribution records' },
        { id: '401k', name: '401(k) Contributions', description: '401(k) contribution statements' },
        { id: 'student-loans', name: 'Student Loan Interest', description: 'Form 1098-E for student loan interest' },
        { id: 'moving', name: 'Moving Expense Records', description: 'If moved for work (military only)' }
      ]
    }
  ]

  const toggleItem = (itemId: string) => {
    setCompletedItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const getCategoryProgress = (categoryId: string) => {
    const category = documentCategories.find(cat => cat.id === categoryId)
    if (!category) return 0
    const categoryItems = category.documents.map(item => item.id)
    const completedCategoryItems = completedItems.filter(id => categoryItems.includes(id))
    return (completedCategoryItems.length / categoryItems.length) * 100
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, documentId: string, documentName: string) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map(file => ({
        name: file.name,
        status: 'uploaded' as const,
        type: documentName
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const getUploadStatus = (documentId: string) => {
    const uploaded = uploadedFiles.some(file => file.type === documentId);
    return uploaded ? (
      <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
        Uploaded
      </span>
    ) : (
      <span className="px-3 py-1 text-sm text-gray-500 bg-gray-100 rounded-full">
        Not Uploaded
      </span>
    );
  };

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
          <div className="flex items-center gap-4">
            <Link href="/what-to-prepare" className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-300">
              ← Back to Documents
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-700 font-semibold transition-colors duration-300">
              Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            W-2 Income Documents Checklist
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Use this interactive checklist to ensure you have all necessary documents for your W-2 tax return.
          </p>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {documentCategories.map(category => (
              <div key={category.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-200/50">
                <h3 className="font-semibold text-gray-700 mb-2">{category.title}</h3>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500"
                    style={{ width: `${getCategoryProgress(category.id)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {Math.round(getCategoryProgress(category.id))}% Complete
                </p>
              </div>
            ))}
          </div>

          {/* Checklist Categories */}
          <div className="space-y-8">
            {documentCategories.map(category => (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200/50">
                <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  {category.title}
                </h2>
                <div className="divide-y divide-gray-200">
                  {category.documents.map(doc => (
                    <div key={doc.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <input
                          type="file"
                          id={doc.id}
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple
                          onChange={(e) => handleFileUpload(e, doc.id, doc.name)}
                          className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-red-50 file:text-red-700
                            hover:file:bg-red-100"
                        />
                        {getUploadStatus(doc.name)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Uploaded Files Section */}
          <div className="grid gap-8 md:grid-cols-2 mt-12">
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
                      {getUploadStatus(file.type)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex justify-center gap-6">
            <button
              onClick={() => setCompletedItems([])}
              className="px-8 py-4 bg-white text-red-600 rounded-xl text-lg font-semibold hover:bg-red-50 border border-red-200 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Reset Checklist
            </button>
            <Link
              href="/schedule-consultation"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl text-lg font-semibold hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
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