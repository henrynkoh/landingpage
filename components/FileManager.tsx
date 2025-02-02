'use client'

import { useState } from 'react'
import { ref, deleteObject } from 'firebase/storage'
import { storage } from '@/lib/firebase'

interface FileManagerProps {
  uploadedFiles: UploadedFile[]
  onDeleteFile: (file: UploadedFile) => void
  documentCategories: Array<{
    id: string
    title: string
    documents: Array<{
      id: string
      name: string
      description: string
    }>
  }>
}

interface UploadedFile {
  name: string
  status: 'uploaded' | 'pending' | 'error'
  type: string
  downloadUrl?: string
  path?: string
  error?: string
}

export default function FileManager({ uploadedFiles, onDeleteFile, documentCategories }: FileManagerProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'date' | 'name'>('date')
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  // Filter and sort files
  const filteredFiles = uploadedFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      documentCategories.find(cat => 
        cat.documents.find(doc => doc.id === file.type)
      )?.documents.find(doc => doc.id === file.type)?.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === 'all' || 
      documentCategories.find(cat => cat.id === selectedCategory)?.documents.some(doc => doc.id === file.type)

    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    }
    // Sort by date (extracted from path timestamp)
    const getTimestamp = (path?: string) => {
      if (!path) return 0
      const match = path.match(/(\d+)_/)
      return match ? parseInt(match[1], 10) : 0
    }
    return getTimestamp(b.path) - getTimestamp(a.path)
  })

  const handleDeleteFile = async (file: UploadedFile) => {
    if (!file.path) return
    setIsDeleting(file.path)
    try {
      const fileRef = ref(storage, file.path)
      await deleteObject(fileRef)
      onDeleteFile(file)
    } catch (error) {
      console.error('Error deleting file:', error)
      alert('Failed to delete file. Please try again.')
    } finally {
      setIsDeleting(null)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Document Manager</h2>
        
        {/* Search and Filters */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <div>
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {documentCategories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.title}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'name')}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        {/* File List */}
        <div className="space-y-4">
          {filteredFiles.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              {searchTerm ? 'No files match your search' : 'No documents uploaded yet'}
            </p>
          ) : (
            filteredFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    {documentCategories.find(cat => 
                      cat.documents.find(doc => doc.id === file.type)
                    )?.documents.find(doc => doc.id === file.type)?.name || file.type}
                  </p>
                  <p className="text-sm text-gray-500">{file.name}</p>
                  {file.error && (
                    <p className="text-sm text-red-500 mt-1">{file.error}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {file.downloadUrl && (
                    <a
                      href={file.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      View
                    </a>
                  )}
                  <button
                    onClick={() => handleDeleteFile(file)}
                    disabled={isDeleting === file.path}
                    className={`px-3 py-1 text-sm font-medium rounded-full
                      ${isDeleting === file.path
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-red-50 text-red-600 hover:bg-red-100'
                      }`}
                  >
                    {isDeleting === file.path ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
} 