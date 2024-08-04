import React from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import Cross from '../Cross';


const UseDropDown = () => {

  const sizes = ["EU 36", "EU 36W", "EU 37", "EU 37VW", "EU 38", "EU 38VW", "EU 39", "EU 39W", "EU 40", "EU 41VW", "EU 42", "EU 42VW", "EU 43", "EU 43VW", "EU 44", "EU 44VW", "EU 45", "EU 46VW", "EU 47", "EU 48VW", "EU 49"];

  return (
    <div className='flex flex-col lg:flex-row lg:h-screen max-lg:absolute max-lg:top-0   h-[40rem] bg-white w-full'>
      <div className='w-full lg:w-[19rem] items-center justify-center'>
        <h2 className='mx-4 my-4 lg:my-10 text-xl text-center'>SIZES & OPTIONS</h2>
        <div className='flex justify-center lg:justify-start'>
          <DropDown options={sizes} label="SELECT SIZE" />
        </div>
        <div className='pt-10 lg:pt-20 flex flex-col z-10 mb-20 items-center'>
          <Link to='/sizeguide' className='py-2 lg:py-5 text-indigo-500'>SIZE GUIDE</Link>
          <Link to='/size' className='py-2 lg:py-5'>CAN'T FIND YOUR SIZE?</Link>
          <Link to='/whatmean' className='py-2 lg:py-5'>WHAT DOES W MEAN?</Link>
        </div>
      </div>
    <div className='mt-3 md:w-full'>  <Cross link={""} /></div>
    </div>
  );
};

export default UseDropDown;