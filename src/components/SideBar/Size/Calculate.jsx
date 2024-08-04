import React from 'react';
import Cross from '../Cross';



const Calculate = () => {

  return (
    <>
      <div className='flex '>
        <div className='w-[19rem]  sticky top-5 lg:h-screen'>
           <div className='lg:h-[32rem] mt-8 px-2 mx-auto lg:overflow-y-auto '>
               <div className='text-lg font-mono  font-bold'>
              <h1>THE RECOMENDED SIZE FOR THIS SHOE IS</h1>
              </div>
              <div><img className='' src='/Images/shoes_v1.png' alt="" /></div>
               <div className=' w-70 h-16 border-solid border-gray-400 border-2 rounded-lg'>
                   <div className='bg-gray-300 w-full h-[2px] relative top-10 '></div>
               </div>
                <div className='mt-12'>
                    <h1 className='text-[#2f3031] font-bold font-mono text-center'>What does W mean?</h1>
                    <p>The ‘W’ next to the size stands for ‘wide’. These shoes are produced with a wider width to accommodate your feet comfortably. The length is equivalent to the standard shoe size. Only choose the special W-width if you have wider feet or in case that our estimator suggests a W size.</p>
                     <br />
                     <p>Our estimator recommends half a size less for shoes that don't have laces (chelsea and loafers). If you are ordering shoes without laces and lace-up shoes, two different sizes may be suggested.</p>
                      <br />
                      <p>In addition, our lasts are extremely comfortable, so we guarantee that you will be very comfortable in your shoes of this size.</p>
                </div>
           </div>
         <Cross link={'sizeguide'}/>
        </div>
      </div>
    </>
  );
};

export default Calculate;