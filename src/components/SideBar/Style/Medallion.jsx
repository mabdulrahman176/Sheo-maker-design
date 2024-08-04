import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cross from '../Cross';


const MedItems = [
  { id: 1, src: '/Images/halfShoe_1.jpg', medTitle: "No" },
  { id: 2, src: '/Images/halfShoe_2.jpg', medTitle: "Yes" },
];

const Medallion = () => {

  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="lg:w-[19rem] sticky top-0  lg:h-screen lg:overflow-y-hidden">
      <p className="mt-7 text-center text-lg sticky top-0">Medallion</p>
      <div
        className="lg:h-[32rem] overflow-x-auto lg:overflow-y-scroll pt-10 pb-20"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        <div className="flex lg:flex-col flex-row gap-4 justify-center items-center text-center">
          {MedItems.map((item) => (
            <div
              key={item.id}
              className={`my-4 flex-shrink-0 lg:w-[16rem] w-[8rem] ${
                activeId === item.id ? 'border-b-4  border-[#bd9d51]' : ''
              }`}
              onClick={() => handleClick(item.id)}
            >
             <Link>
                <img
                  src={item.src}
                  alt={item.medTitle}
                  className="w-full lg:w-[400px] md:w-[150px] sm:w-[90px] sm:px-8"
                />
              </Link>
              <Link className="text-[#212127] font-bold text-lg text-center mt-5 whitespace-nowrap md:text-base sm:text-sm">
                {item.medTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Cross link={"style"} />
    </div>
  );
};

export default Medallion;
