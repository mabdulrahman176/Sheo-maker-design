import React from 'react';
import SideBarItems from './SideBarItems';
import Button from '../Button';


const Style = () => {

  return (
    <div className='flex justify-center lg:justify-end  lg:h-screen'>
      <div className='w-full  lg:w-[19rem] sticky top-0'>
        <div className='h-auto w-full px-6 lg:text-[18px] lg:mt-4 md:px-12 pt-6 md:pt-[10px] pb-4  text-center text-xs md:text-xl'>
          <p>DESIGN THE STYLE OF YOUR SHOE</p>
         
        </div>
        <div className='pt-6 md:pt-2 md:px-12  '>
          <SideBarItems />
        </div>
        <div className='px-6 md:px-12 pb-4'>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Style;
