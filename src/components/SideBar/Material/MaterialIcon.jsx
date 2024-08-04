import React from 'react';
import MaterialCard from './Card';
import { useNavigate } from 'react-router-dom';


const MaterialIcon = () =>{

  const navigate = useNavigate();

const handleBack = () => {
  navigate(`/pieces`);
};
  return (
  <div className="flex flex-col items-center justify-center  lg:flex-row lg:h-screen max-lg:absolute max-lg:top-0  overflow-y-auto overflow-x-hidden lg:w-[25rem]  w-full  bg-white ">
    <div className="w-[25rem]  sticky top-0">
      <h2 className="mt-7 h-10 text-center text-xl sticky top-0">MATERIAL TYPE</h2>
      <div
        className="h-[32rem] overflow-y-scroll sm:text-sm"
        style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
      >
        <MaterialCard
          title="ITALIAN CALF LEATHER"
          image="./Images/firstimg.jpg"
          comfort={5}
          shine={2}
          easyCare={5}
          description="Our most exclusive leather, obtained from the main layer of the leather, provides maximum softness and comfort. This leather has a natural matte finish."
        />
        <MaterialCard
          title="ITALIAN CALF LEATHER - SHINE"
          image="./Images/secondimg.jpg"
          comfort={5}
          shine={3}
          easyCare={5}
          description="Made from the same part as calfskin, with the same softness and flexibility properties. Its feel finishing makes us define this leather as 'silk-touch'. Making it a very comfortable and at the same time elegant leather."
        />
        <MaterialCard
          title="WAXED LEATHER"
          image="./Images/thirdimg.jpg"
          comfort={4}
          shine={1}
          easyCare={5}
          description="Waxed leather, slightly tumbled and soft to the touch. Medium thickness (between 1.1 and 1.3 mm depending on the area of the shoe), which makes them comfortable and resistant at the same time. Easy care. Unique rough out finish on each pair."
        />
        <MaterialCard
          title="FLORA LEATHER"
          image="./Images/forthimg.jpg"
          comfort={3}
          shine={4}
          easyCare={4}
          description="Elegance and distinction. Florentic is a leather with a high level of shine due to its treatment and elaboration method. It will give your shoes a high level of durability and resistance due to its leather thickness."
        />
        <MaterialCard
          title="SUEDE"
          image="./Images/fifthimg.jpg"
          comfort={4}
          shine={1}
          easyCare={2}
          description="Possibly one of the most versatile leathers, suitable for any type of footwear, it is a type of leather that you will use both in day-to-day life and in your most important events.  Thanks to its strength and resistance, you will be able to enjoy your shoes to the maximum."
        />
        <MaterialCard
          title="FABRICS"
          image="./Images/siximg.jpg"
          comfort={3}
          shine={1}
          easyCare={4}
          description="The ideal option if you want to give your shoes a touch of distinction. Combine your shoes with the fabric of your suit and get a unique pair of shoes. Thanks to our manufacturing procedures with reinforcements and internal textile parts, we make the fabric of your suit 100% suitable for shoes, with the necessary strength and durability guaranteed."
        />
        <MaterialCard
          title="VELVET"
          image="./Images/sevenimg.jpg"
          comfort={3}
          shine={3}
          easyCare={1}
          description="Tasteful and elegant option. Great choice for black-tie or wedding events. Also very popular on loafers paired with jeans and blazer with no socks. It is also quite delicate."
        />
      </div>
      <div className='mb-7 h-16'></div>
      <button onClick={handleBack} className="flex justify-center items-center fixed right-0 bottom-0 border-t-2 w-full lg:w-[19rem] h-12 bg-white p-4 md:p-6">Back</button>
    </div>
  </div>
);
}
export default MaterialIcon;