import React from 'react';
import { Link } from 'react-router-dom';

const BarItems = [
  {id:1,title: "model",STitle: "Oxford",link:'/model'},
  {id:2,title: "TOE CAP",STitle: "PLAIN CAP",link:'/toecap'},
  {id:3,title: "MEDALLION",STitle: "NO",link:'/medallion'},
  {id:4,title: "SOLE",STitle: "RUBBER",link:'/sole'},
  {id:5,title: "LACES",STitle: "BY DEFAULT",link:'/laces'},
  {id:6,title: "EYELETS",STitle: "BLIND EYELETS",link:'/eyelets'},
];

const SideBarItems = () => {
  return (
<div
  className='flex lg:flex-col md:flex-row md:gap-8 lg:h-[27rem] md:h-[7rem] md:pb-[4rem] md:mx-auto overflow-y-scroll md:overflow-x-auto pb-20'
  style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
>
  {BarItems.map((items) => (
    <Link
      to={items.link}
      key={items.id}
      className='flex flex-col justify-center items-center px-4 whitespace-nowrap lg:p-0 mb-2'
    >
      <h2 className='text-[#999999] text-sm md:text-xs'>{items.title}</h2>
      <h1 className='text-[#212127] font-bold lg:text-lg md:text-sm text-base'>
        {items.STitle}
      </h1>
    </Link>
  ))}
</div>



  );
};

export default SideBarItems;
