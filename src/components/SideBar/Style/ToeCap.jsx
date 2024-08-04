import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cross from '../Cross';


const TItems = [
  { id: 1, chapl: '/Images/chpal2.png', CTitle: "Plain Ton" },
  { id: 2, chapl: '/Images/chpal2.png', CTitle: "WholeCut" },
  { id: 3, chapl: '/Images/chpal2.png', CTitle: "WingTip" },
  { id: 4, chapl: '/Images/chpal2.png', CTitle: "Cap Toe" },
];

const ToeCap = () => {

  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="lg:w-[19rem] sticky top-0  lg:h-screen lg:overflow-y-hidden">
      <p className="mt-7 text-center text-lg sticky top-0">Toe Cap</p>
      <div
        className="lg:h-[32rem] overflow-x-auto lg:overflow-y-scroll pt-10 pb-20"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        <div className="flex lg:flex-col flex-row gap-4 justify-start items-center text-center">
          {TItems.map((item) => (
            <div
              key={item.id}
              className={`my-4 flex-shrink-0 w-[10rem] ${
                activeId === item.id ? 'border-b-4  border-[#bd9d51]' : ''
              }`}
              onClick={() => handleClick(item.id)}
            >
              <Link className="w-48">
                <img src={item.chapl} alt={item.CTitle} />
              </Link>
              <Link className="text-[#212127] font-bold text-lg text-center mt-5 whitespace-nowrap">
                {item.CTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Cross link={"style"} />
    </div>
  );
};

export default ToeCap;
