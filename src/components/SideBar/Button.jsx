import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ link}) => {
  const navigate = useNavigate();

  const back = () => {
    let li = link || '';
    console.log(li);
    navigate(`/${li} `);
  };

  return (
    <div>
      <button onClick={back} className="flex justify-center items-center fixed right-0 bottom-0 border-t-2 w-full lg:w-[19rem] h-12 bg-white p-4 md:p-6">BACK</button>
    </div>
  );
};

export default Button;