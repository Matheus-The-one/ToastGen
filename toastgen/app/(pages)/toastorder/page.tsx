
import { TableDemo } from '@/app/components/Table'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-purple-900 mb-8 text-center">
          Your Table Page
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <TableDemo />
        </div>
      </div>
    </div>
  )
}

export default Page