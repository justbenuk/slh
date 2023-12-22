import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-red-500 text-white p-4 text-lg font-bold border-b-4 border-yellow-600'>
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-row justify-between'>
          <Link href='/'>Santa's Little Helpers</Link>
          <ul className='flex space-x-4'>
            <li>About Us</li>
            <li>Previous Years</li>
            <li>Blog</li>
            <li>Events</li>
            <li>Contact</li>
            <li>Donate</li>
        </ul>
        </div>
        
      </div>
    </header>
  )
}
