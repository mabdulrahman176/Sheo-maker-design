import React, { useState,useEffect} from 'react';
import Cross from '../Cross';


const colorStyles = [
  { bgColor: '#000000', borderRadius: '50%', text: "Black (+3€)" },
  { bgColor: 'red', borderRadius: '50%', text: "Brown (+3€)" },
  { bgColor: '#824753', borderRadius: '50%', text: "Burgandy (+3€)" },
  { bgColor: '#ba353d', borderRadius: '50%', text: "Red (+3€)" },
  { bgColor: '#2c4259', borderRadius: '50%', text: "Blue (+3€)" },
  { bgColor: '#6b734d', borderRadius: '50%', text: "Green (+3€)" },
  { bgColor: '#af9068', borderRadius: '50%', text:"Golden" },
  { bgColor: '#8d633d', borderRadius: '50%', text:"Saddle Brown" },
];

const Laces = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      document.body.classList.add('has-backdrop');
    } else {
      document.body.classList.remove('has-backdrop');
    }
  }, [isToggled]);

  return (
    <>
      <div className='flex lg:flex-row flex-col  lg:h-screen'>
        <div className='lg:w-[19rem]  lg:h-[630px] md:h-auto  sticky top-0'>
          <p className='mt-7 text-[#72385e] text-center text-lg sticky top-0'>Laces</p>
          <div className='flex  lg:space-x-2 lg:w-[75%] mt-7 lg:mx-auto '>
            <p >CUSTOM (+3€)</p>
            <div
              className={`w-20 h-10 border-solid border-2 border-[#d3d3d3] rounded-2xl z-50 transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-50'}`}
            >
              <button
                className={`w-9 h-8 bg-gray-200 rounded-full flex items-center justify-center focus:outline-none transition-transform duration-300 ${isToggled ? 'transform translate-x-full' : ''}`}
                onClick={handleToggleClick}
              >
              </button>
            </div>
          </div>
          <div className={`lg:w-[75%] w-full flex lg:grid lg:grid-cols-2 flex-row justify-between gap-4  whitespace-nowrap mx-auto mt-12 ${isToggled ? 'opacity-100' : 'opacity-50'} overflow-x-auto `}  style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}>
            {colorStyles.map((style, index) => (
              <div key={index} className='w-24 flex-shrink-0'>
                <div
                  style={{
                    backgroundColor: style.bgColor,
                    width: '50px',
                    height: '50px',
                    borderRadius: style.borderRadius,
                  }}
                  onClick={handleToggleClick}
                >
                </div>
                <p className='text-sm'>{style.text}</p>
              </div>
            ))}
          </div>
          <div className='mb-7 h-16'></div>
          <Cross link={"style"}/>
        </div>
      </div>
    </>
  );
};

export default Laces;
