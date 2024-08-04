import React from 'react';
import SoleCard from './SoleCard';
import { useNavigate } from 'react-router-dom';

const SoleType = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/sole`);
  };
  return(
 <div className='flex flex-col items-center justify-center  lg:flex-row lg:h-screen max-lg:absolute max-lg:top-0  overflow-y-auto overflow-x-hidden lg:w-[25rem]  w-full  bg-white lg:p-0 '>
     <div className="w-[25rem] sticky top-0">
    <h2 className="mt-7 h-10 text-center text-xl sticky top-0">SOLE TYPE</h2>

<div  className="h-[37rem]  overflow-y-scroll sm:text-sm"
            style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}>
    
<SoleCard
      title="RUBBER"
      image="./Images/boot1.jpg"
      comfort={5}
      shine={5}
      easyCare={2}
      description="TPU injected sole, designed to give the best possible finish. Recommended for your day to day if you are looking for a durable shoe, with high flexibility and adherence. Ideal for use in all types of weather thanks to its resistance to abrasion, low temperatures and humidity. (TPU stands for Thermoplastic Polyutherane)"
    />
    <SoleCard
      title="NO SLIP LEATHER"
      image="./Images/boot2.jpg"
      comfort={3}
      shine={4}
      easyCare={3}
      description="Leather and TPU sole, the best option if you want to have extra grip on your leather-soled shoes. A high quality sole without sacrificing comfort and safety. (TPU stands for Thermoplastic Polyutherane)"
    />
    <SoleCard
      title="LEATHER - BLACK"
      image="./Images/boot3.jpg"
      comfort={2}
      shine={2}
      easyCare={5}
      description="The sole is made entirely of leather, which is essential if you want to pair your shoes with a high quality outfit. It's the best option for an elegant touch, that at the same time is comfortable and fresh. Dark brown. Almost black."
    />
      <SoleCard
      title="LEATHER - BLACK"
      image="./Images/boot4.jpg"
      comfort={2}
      shine={2}
      easyCare={5}
      description="The sole is made entirely of leather, which is essential if you want to pair your shoes with a high quality outfit. It's the best option for an elegant touch, that at the same time is comfortable and fresh. Dark brown. Almost black."
    />
      <SoleCard
      title="LEATHER - MID"
      image="./Images/boot5.jpg"
      comfort={2}
      shine={2}
      easyCare={5}
      description="The sole is made entirely of leather, which is essential if you want to pair your shoes with a high quality outfit. It's the best option for an elegant touch, that at the same time is comfortable and fresh. Brown"
    />
     <SoleCard
      title="LEATHER - MID"
      image="./Images/boot6.jpg"
      comfort={2}
      shine={2}
      easyCare={5}
      description="The sole is made entirely of leather, which is essential if you want to pair your shoes with a high quality outfit. It's the best option for an elegant touch, that at the same time is comfortable and fresh. Brown"
    />
     <SoleCard
      title="TRACKER EVA"
      image="./Images/boot7.jpg"
      comfort={4}
      shine={5}
      easyCare={3}
      description="Ultra lighweight tracker sole. Made of ethylene-vinyl acetate (EVA), which is resistant to corrosion caused by sea water, fats, oil, or chemicals. It is also considered safe and environmentally friendly, due to its anti-bacterial and non-toxic properties. "
    />
      <SoleCard
      title="TRACKER EVA"
      image="./Images/boot8.jpg"
      comfort={4}
      shine={5}
      easyCare={3}
      description="Ultra lighweight tracker sole. Made of ethylene-vinyl acetate (EVA), which is resistant to corrosion caused by sea water, fats, oil, or chemicals. It is also considered safe and environmentally friendly, due to its anti-bacterial and non-toxic properties."
    />
</div>

  </div>
  <button onClick={handleBack} className="flex justify-center items-center fixed right-0 bottom-0 border-t-2 w-full lg:w-[25rem] h-12 bg-white p-4 md:p-6">Back</button>
 </div>
);
}
export default SoleType;