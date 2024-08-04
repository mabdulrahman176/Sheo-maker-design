import React from 'react'
import RatingBar from './RatingBar';

const MaterialCard = ({ title, image, comfort, shine, easyCare, description }) => {
  return (
    <div className=" px-4">
    <h3 className="mt-5 font-bold">{title}</h3>
    <div className="flex ">
      <img src={image} className="w-32 h-28 mt-2 mr-4 inline" alt="" />
      <div>
        <RatingBar title="COMFORT" levels={comfort} />
        <RatingBar title="SHINE" levels={shine} />
        <RatingBar title="EASY CARE" levels={easyCare} />
      </div>
    </div>
    <p className="font-thin p-1">{description}</p>
  </div>
  )
}

export default MaterialCard
