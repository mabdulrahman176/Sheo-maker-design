import React from 'react'

const PieceItem = ({ item, focusedItemId, setFocusedItemId }) => {
  return (
    <div className="flex flex-col items-center ">
    <img
      className={`object-cover h-16 w-16 rounded-full bg-cover ${
        focusedItemId === item.id ? "border-black border-2" : "border-transparent"
      }`}
      src={item.img1}
      alt={item.title}
      onFocus={() => setFocusedItemId(item.id)}
      onBlur={() => setFocusedItemId(null)}
      tabIndex={0}
    />
    <h1 className={`mt-2 ${focusedItemId === item.id ? "text-blue-500" : "text-black"}`}>
      {item.title}
    </h1>
  </div>
  )
}

export default PieceItem
