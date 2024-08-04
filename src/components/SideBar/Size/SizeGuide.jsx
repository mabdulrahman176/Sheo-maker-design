import React, { useState,useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SizeGuide = () => {

  const [selectedInput, setSelectedInput] = useState(null);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const lengthRef = useRef(null);
  const widthRef = useRef(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/usedropdown');
  };

  const handleInputClick = (inputName) => {
    setSelectedInput(inputName);
    setError('');
  };

  const handleClickOutside = (event) => {
    if (
      lengthRef.current && !lengthRef.current.contains(event.target) &&
      widthRef.current && !widthRef.current.contains(event.target)
    ) {
      setSelectedInput(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLengthChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setLength(value);
    }
  };

  const handleWidthChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setWidth(value);
    }
  };

  const calculateSize = () => {
    const lengthValue = parseInt(length, 10);
    const widthValue = parseInt(width, 10);
  
    if (isNaN(lengthValue) || isNaN(widthValue)) {
      setError('Please enter valid numbers for both length and width.');
      setResult('');
      navigate('/shoesize'); // navigate to shoesize component if invalid input
      return;
    }
  
    if (lengthValue < 20 || lengthValue > 50 || widthValue < 20 || widthValue > 50) {
      setError('This size is not available. Length and width must be between 20 and 50.');
      setResult('');
      navigate('/shoesize'); // navigate to shoesize component if size is not available
    } else {
      const calculatedWidth = Math.sqrt(Math.pow(lengthValue, 2) + Math.pow(widthValue, 2));
      const roundedWidth = Math.round(calculatedWidth);
  
      if (roundedWidth > 50) {
        setError('Result cannot exceed 50W.');
        setResult('');
        navigate('/shoesize'); // navigate to shoesize component if result exceeds 50W
      } else {
        const previousWidth = roundedWidth - 1;
        const nextWidth = roundedWidth + 1;
        const resultString = (
          <span>
            {previousWidth}W{' '}
            <span style={{ border: '1px solid black', padding: '0 4px' }}>
              {roundedWidth}W
            </span>{' '}
            {nextWidth}W
          </span>
        );
  
        setResult(resultString);
        setError('');
        navigate('/calculate'); // navigate to calculate component if size is available
      }
    }
  };

  return (
    <div className='overflow-y-auto h-[40rem] w-full lg:w-[19rem] lg:h-screen max-lg:absolute max-lg:top-0 bg-white items-center justify-center'>
      <div className='px-6 relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[550px] mx-auto'>
        <h3 className="text-lg my-12 text-center">Measure the length and width of your feet</h3>
        
        <div className="mb-4">
          <h2 className="font-bold text-base">1. Place your foot on a paper</h2>
          <p className="text-sm">Remove socks. Make sure you are doing it over a flat surface</p>
        </div>
        
        <div className="mb-4">
          <h2 className="font-bold text-base">2. Draw the outline of the foot</h2>
          <p className="text-sm">Make sure you keep the pencil in vertical position while you draw</p>
        </div>
        
        <div className="mb-4">
          <h2 className="font-bold text-base">3. Measure length and width</h2>
          <p className="text-sm">From the heel to the tip of your longest toe. The width goes from the shoe ball to the base of your little toe</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="length" className="mb-1 text-center">LENGTH</label>
            <div
              ref={lengthRef}
              className={`flex items-center border ${selectedInput === 'length' || error ? 'border-[#ff0000]' : 'border-gray-400'} rounded p-2`}
              onClick={() => handleInputClick('length')}
            >
              <input
                type="number"
                className="flex-grow w-8 outline-none"
                placeholder=""
                id="length"
                value={length}
                onChange={handleLengthChange}
              />
              <span className="ml-2 font-bold">Cm</span>
            </div>
          </div>
          
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="width" className="mb-1 text-center">WIDTH</label>
            <div
              ref={widthRef}
              className={`flex items-center border ${selectedInput === 'width' || error ? 'border-[#ff0000]' : 'border-gray-400'} rounded p-2`}
              onClick={() => handleInputClick('width')}
            >
              <input
                type="number"
                className="flex-grow w-8 outline-none"
                placeholder=""
                id="width"
                value={width}
                onChange={handleWidthChange}
              />
              <span className="ml-2 font-bold">Cm</span>
            </div>
          </div>
        </div>

        <p className='text-[13px] py-3 font-semibold'>Check out our video for more precise instructions</p>
        <div className='pb-10 mb-8 w-full h-28'>
          <video width="100%" controls>
            <source src="/Images/video.mp4" type="video/mp4" />
          </video>
          <div className='mb-7 h-16'></div>
        </div>
        <div className='border-2 border-b-[#ccc]'></div>

        {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{result}</p>}
    
      </div>
      <div className=''>
        <div className='flex justify-around fixed right-0 bottom-0 border-t-2 w-full mt-10 lg:max-w-[17.875rem] py-5 bg-[#ffff]'>
          <button onClick={handleBack}>BACK</button>
          <button onClick={calculateSize}>CALCULATE MY SIZE</button>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
