import React from 'react';
import Button from '../Button';


const WhatMean = () => {
   
    return (
        <div className='xl:overflow-y-auto w-full md:px-16 lg:w-[19rem]  sm:px-8 font-normal xl-h-screen lg:h-screen max-lg:absolute max-lg:top-0 md:h-[35rem] min-h-lvh p-5  bg-white items-center justify-center    lg:px-10 mx-auto'>
            <h2 className='text-3xl text-center my-10'>What does W mean?</h2>
            <p className='text-[16px] flex lg:flex-row text-center'>The ‘W’ next to the size stands for ‘wide’. These shoes are produced with a wider width to accommodate your feet comfortably. The length is equivalent to the standard shoe size. Only choose the special W-width if you have wider feet or in case that our estimator suggests a W size.</p>
            <div className="flex justify-center py-5 ">
                <Button link={"usedropdown"} />
            </div>
        </div>
    );
}

export default WhatMean;