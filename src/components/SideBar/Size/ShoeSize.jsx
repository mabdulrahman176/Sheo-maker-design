import React from 'react';
import Cross from '../Cross';


const ShoeSize = () => {
  
    return (
        <div className='flex overflow-y-auto  w-full lg:w-[19rem] md:h-[40rem] h-screen lg:h-screen max-lg:absolute max-lg:top-0  bg-white items-center justify-center ' >
            <div className='relative w-full max-w-lg'>
                <h1 className='text-center text-lg md:text-xl lg:text-2xl mb-4'>THE RECOMMENDED SIZE FOR THIS SHOE IS</h1>
                <img className='h-48 md:h-64 lg:h-80 w-full object-contain' src='./Images/shoes.png' alt="shoe" />
                <h1 className='text-center font-semibold text-md md:text-lg lg:text-xl mt-4'>Your size is not available</h1>
            </div>
            <Cross link={'sizeguide'}/>
        </div>
    );
}

export default ShoeSize;