import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Size = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [isRequestedSizeEmpty, setIsRequestedSizeEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate('/usedropdown');
    };
    
    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    const handleSendClick = () => {
        const requestedSizeField = document.getElementById('requestedSize');
        const emailField = document.getElementById('email');

        if (!requestedSizeField.value) {
            setIsRequestedSizeEmpty(true);
        } else {
            setIsRequestedSizeEmpty(false);
        }

        if (!emailField.value) {
            setIsEmailEmpty(true);
        } else {
            setIsEmailEmpty(false);
        }
    };

    const handleRequestedSizeChange = () => {
        setIsRequestedSizeEmpty(false);
    };

    const handleEmailChange = () => {
        setIsEmailEmpty(false);
    };

    return (
       
        <div className='overflow-y-auto h-[40rem] w-full lg:w-[19rem] lg:h-screen max-lg:absolute max-lg:top-0  bg-white items-center justify-center'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4 sm:px-6 md:px-8 lg:px-10 mx-auto'>
                <h1 className='text-center mt-12 text-xl md:text-2xl lg:text-3xl'>Can't find your size?</h1>
                <p className='text-center mt-10 p-1 text-sm md:text-base lg:text-lg'>
                    For some models, we can offer you sizes that are not available on the website. Please tell us what size you are looking for and we will reach you back.
                </p>

                <div className='text-center mt-4'>
                    <label className='block text-sm md:text-base lg:text-lg' htmlFor="requestedSize">REQUESTED SIZE</label>
                    <input 
                        type="text" maxLength={2}
                        id="requestedSize" 
                        className={`h-12 w-full max-w-xs text-center ${isRequestedSizeEmpty ? 'border-red-500 border-2' : 'border-black border-2'}`} 
                        onChange={handleRequestedSizeChange} 
                    />
                </div>
                <div className='text-[15px] text-center mt-4'>
                    <label className='block text-sm md:text-base lg:text-lg' htmlFor="email">EMAIL</label>
                    <input 
                        type="text" 
                        id="email" 
                        className={`h-12 w-full max-w-xs text-center ${isEmailEmpty ? 'border-red-500 border-2' : 'border-black border-2'}`} 
                        onChange={handleEmailChange} 
                    />
                </div>
                <div className='flex  items-center justify-center p-5'>
                    <input onClick={handleCheckboxClick} type="checkbox" id="agree" className='mr-2' />
                    <label htmlFor="agree" className='relative'>
                        <span className={`${!isChecked ? 'text-red-500 absolute' : 'hidden'}`}>
                            This field is required
                        </span>
                        <br />
                        I agree to let my email be processed in accordance with the
                    </label>
                </div>
                <div className='mb-7 h-16 '></div>
                <div className=''></div>
                <div className='flex justify-around fixed right-0 bottom-0 border-t-2 w-full    lg:max-w-[19.325rem]  py-5 bg-[#ffff] border-2 border-b-[#ccc]'>
                    <button onClick={handleBack} className=''>BACK</button>
                    <button onClick={handleSendClick}>SEND</button>
                </div>
            </div>
        </div>
      
    );
}

export default Size;