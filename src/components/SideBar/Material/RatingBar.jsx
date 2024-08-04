import React from 'react'

const RatingBar = ({ title, levels }) => {
  return (
    <div className="mt-1">
    <div className="font-bold">{title}</div>
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`w-7 h-3  ${i < levels ? 'bg-[#c19d56]' : 'bg-[#ece1cc]'}`}></div>
      ))}
    </div>
  </div>
  )
}

export default RatingBar
