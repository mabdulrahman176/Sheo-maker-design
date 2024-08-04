import React from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import { CiZoomIn, CiHeart, CiShare2 } from "react-icons/ci";
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Materials from './SideBar/Material/Materials';
import SideBar from './SideBar/SideBar';
import Style from './SideBar/Style/Style';
import ModelCom from './SideBar/Style/ModelCom';
import ToeCap from './SideBar/Style/ToeCap';
import Medallion from './SideBar/Style/Medallion';
import Sole from './SideBar/Style/Sole';
import Pieces from './SideBar/Material/Pieces';
import MaterialIcon from './SideBar/Material/MaterialIcon';
import SoleType from './SideBar/Style/SoleType';
import Eyelets from './SideBar/Style/Eyelets';
import UseDropDown from './SideBar/Size/UseDropDown';
import WhatMean from './SideBar/Size/WhatMean';
import SizeGuide from './SideBar/Size/SizeGuide';
import Size from './SideBar/Size/Size';
import Laces from './SideBar/Style/Laces';
import Calculate from './SideBar/Size/Calculate';
import ShoeSize from './SideBar/Size/ShoeSize';
import '../App.css';

const Shoe = () => {
  const location = useLocation();

  return (
    <main className='flex flex-col lg:flex-row'>
      <div className='w-full xl:w-[80%] bg-[#F5F4F3] h-auto'>
        <div className='p-4 flex justify-between'>
          <div className='flex text-2xl'>
            <HiOutlineMenuAlt4 size={25} />
            <h1 className='font-bold pl-3'>Hockerty</h1>
          </div>
          <CgShoppingCart size={25} />
        </div>

        <div className='w-full'>
          <div className='pt-4 pl-6 grid md:grid-cols-1 lg:grid-cols-1 gap-4 w-[8.5rem] cursor-pointer text-black'>
            <div className='flex items-center space-x-2'>
              <CiZoomIn size={30} />
              <span>Zoom</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CiShare2 size={30} />
              <span>Share</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CiHeart size={30} />
              <span>WishList</span>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/Images/shoes_v1.png" alt="Shoes" className='w-full max-w-[500px]' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center gap-4 lg:gap-16 items-center p-4'>
          <div>
            <h1 className='text-2xl lg:text-3xl font-bold text-center'>OXFORD SHOES <span className='text-xl lg:text-2xl'>165-&#8364;</span></h1>
            <h2 className='text-xl lg:text-2xl text-center'>ORDER TODAY RECEIVE IN 2 WEEKS</h2>
          </div>
          <button className='text-white bg-[#3d90D7] px-6 lg:px-14 text-lg lg:text-xl h-10 lg:h-12 rounded-md'>Next</button>
        </div>
      </div>

      {/* This section is for the routed components */}
      <div className='w-full lg:w-[19.875rem] relative  lg:h-screen'>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="slide" timeout={300}>
            <div className='absolute w-full h-full'>
              <Routes location={location}>
                <Route path="/" element={<SideBar />} />
                <Route path="/materials" element={<Materials />} />
                <Route path='/style' element={<Style />} />
                <Route path='/usedropdown' element={<UseDropDown />} />
                <Route path='/model' element={<ModelCom />} />
                <Route path='/toecap' element={<ToeCap />} />
                <Route path='/medallion' element={<Medallion />} />
                <Route path='/sole' element={<Sole />} />
                <Route path='/laces' element={<Laces />} />
                <Route path='/eyelets' element={<Eyelets />} />
                <Route path='/pieces' element={<Pieces />} />
                <Route path='/materialicon' element={<MaterialIcon />} />
                <Route path='/soletype' element={<SoleType />} />
                <Route path='/sizeguide' element={<SizeGuide />} />
                <Route path='/size' element={<Size />} />
                <Route path='/whatmean' element={<WhatMean />} />
                <Route path='/calculate' element={<Calculate />} />
                <Route path='/shoesize' element={<ShoeSize />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </main>
  );
}

export default Shoe;
