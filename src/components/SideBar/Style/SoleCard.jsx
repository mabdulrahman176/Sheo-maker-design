import React from 'react'
import RatingBar from '../Material/RatingBar'
const SoleCard = ({ title, image, comfort, shine, easyCare, description }) => {
  return (
    <div className="px-[3rem]">
    <h3 className="mt-5 font-bold">{title}</h3>
    <div className="flex ">
      <img src={image} className="w-36 h-56 mt-9 inline" alt="" />
      <div>
        <RatingBar title="RESISTANCE" levels={comfort} />
        <RatingBar title="GRIP" levels={shine} />
        <RatingBar title="BREATHABILITY" levels={easyCare} />
      <p className="font-thin pt-1">{description}</p>
      </div>
    </div>
   
  </div>
  )
}

export default SoleCard
