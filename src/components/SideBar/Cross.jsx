import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Cross = ({link}) => {
    const navigate = useNavigate(); // useNavigate inside the component

    const back = () => {
      let li = link || ''
      navigate(`/${li}`);
    }
  return (
    <div className='flex justify-between items-center fixed right-0 bottom-0 border-t-2 w-full lg:w-[19rem] h-16 bg-white p-4 md:p-6'>
      <RxCross2 onClick={back} className='ml-12 'size={30}/>
      <FaCheck onClick={back} className='mr-14 'size={30}/>
    </div>
  )
}

export default Cross