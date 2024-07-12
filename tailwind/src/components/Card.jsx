import React from 'react'

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="https://via.placeholder.com/400x200" alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          This is a simple card component built with Tailwind CSS.
        </p>
      </div>
    </div>
  )
}

export default Card