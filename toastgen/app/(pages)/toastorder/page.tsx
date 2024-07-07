import { TableDemo } from '@/app/components/Table'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
          ლხინის სუფრის სადღეგრძელოების ჩამონათვალი
        </h1>
        <div className="bg-black text-white shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm">
          <TableDemo />
        </div>
      </div>
    </div>
  )
}
export default Page