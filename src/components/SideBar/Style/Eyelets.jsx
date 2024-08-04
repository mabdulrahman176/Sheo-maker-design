import React, { useState } from 'react';
import Cross from '../Cross';


const Eyelets = () => {

  const circleData = [
    { id: 1, img1: './Images/invisible.png', title: 'Blind Eyelets' },
    { id: 2, img1: './Images/gold1.png', title: 'Gold (+5€)' },
    { id: 3, img1: './Images/gold2.png', title: 'Vintage Brass (+5€)' },
    { id: 4, img1: './Images/gold3.png', title: 'Nickel (+5€)' },
  ];
  const [selectedId, setSelectedId] = useState(null);

  const handleEvent = (id) => {
    console.log('clicked');
    setSelectedId(id);
  };

  return (
    <div className="w-full lg:w-[19rem] lg:sticky lg:top-0 p-3  lg:h-screen">
      <h2 className="mt-7 h-10 text-center text-xl lg:sticky lg:top-0">EYELETS</h2>

      <div className="flex lg:grid lg:grid-cols-2 mt-5 overflow-x-auto justify-center" style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}>
    <div className='flex lg:grid lg:grid-cols-2 w-max lg:overflow-x-hidden '>
      {circleData.map((item) => (
          <div key={item.id} className="flex-shrink-0 flex flex-col items-center">
            <img
              src={item.img1}
              alt={item.title}
              onClick={() => handleEvent(item.id)}
              className={`w-16 h-16 ${selectedId === item.id ? 'rounded-full border-2 p-[1px] lg:px-0 border-[#383838]' : ''}`}
            />
            <p className="px-4 lg:px-0 text-center">{item.title}</p>
          </div>
        ))}
      </div>
      </div>
      <div className='mb-7 h-16'></div>
      <Cross link={"style"} />
    </div>
  );
};

export default Eyelets;
