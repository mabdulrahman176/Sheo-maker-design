import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cross from '../Cross';

const soleItems = [
  { id: 1, src: '/Images/sole_v2.jpg', soleTitle: "RUBBER" },
  { id: 2, src: '/Images/sole_v1.jpg', soleTitle: "LEATHER - BLACK" },
  { id: 3, src: '/Images/sole_v1.jpg', soleTitle: "LEATHER - MID" },
  { id: 4, src: '/Images/sole_v3.jpg', soleTitle: "TRACKER EVA" },
];

const Sole = () => {

  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="lg:w-[19rem] sticky top-0 w-full lg:h-screen" >
      <div className="flex justify-center items-center h-16 bg-white w-full p-3">
        <h1 className="text-center">SOLE</h1>
        <Link to="/soletype">
          <img className="w-9 h-9 ml-2" src="/Images/icon_sole.jpg" alt="info icon" />
        </Link>
      </div>
      <div
        className="lg:h-[32rem] overflow-x-auto lg:overflow-y-scroll pt-20 pb-20"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        <div className="flex lg:flex-col flex-row gap-4 justify-start items-center text-center">
          {soleItems.map((item) => (
            <div
              key={item.id}
              className={`lg:my-4 md:my-2 flex-shrink-0 w-[10rem] ${
                activeId === item.id ? 'border-b-4 border-[#bd9d51]' : ''
              }`}
              onClick={() => handleClick(item.id)}
            >
              <Link>
                <img
                  src={item.src}
                  alt={item.soleTitle}
                  className="w-full lg:w-[200px] md:w-[150px] sm:w-[100px]"
                />
              </Link>
              <Link className="text-[#212127] mt-5 text-lg whitespace-nowrap">
                {item.soleTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Cross link={"style"} />
    </div>
  );
};

export default Sole;
