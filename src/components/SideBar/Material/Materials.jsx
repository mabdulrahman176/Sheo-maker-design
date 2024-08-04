import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';


const Materials = () => {


    const MaterialData = [
        { id: 1, img1: '/Images/shoes_v1.png', title: "ALL PIECES", subtitle: "MIX", link: '/pieces' },
        { id: 2, img1: '/Images/shoes_v1.png', title: "ROE CAP", subtitle: "ITALIAN CALF LEATHER", link: '/pieces' },
        { id: 3, img1: '/Images/shoes_v1.png', title: "VAMP", subtitle: "ITALIAN CALF LEATHER", link: '/pieces' },
        { id: 4, img1: '/Images/shoes_v1.png', title: "HEELCAP", subtitle: "ITALIAN CALF LEATHER", link: '/pieces' },
        { id: 5, img1: '/Images/shoes_v1.png', title: "FACING", subtitle: "ITALIAN CALF LEATHER", link: '/pieces' },
        { id: 6, img1: '/Images/shoes_v1.png', title: "TONGUE", subtitle: "ITALIAN CALF LEATHER", link: '/pieces' },
    ];

    return (
       
        <div className='flex lg:w-[19rem] h-auto md:h-auto lg:h-screen overflow-y-auto w-full' >
            <div className='w-full'>
                <h1 className='text-center text-[13px] lg:px-[70px] mt-8'>
                    CHOOSE EACH MATERIAL OF YOUR SHOE
                </h1>
                <div className='flex w-full lg:flex-col leading-relaxed md:leading-4 sm:leading-4 overflow-x-auto md:overflow-x-auto lg:items-center  whitespace-nowrap md:px-5 gap-6 lg:justify-center md:items-start md:justify-start text-center pb-9 md:hide-scrollbar'     style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}>
                    {MaterialData.map((item) => (
                        <Link state={{ name: item.title }} to={item.link} key={item.id} className='w-full  md:whitespace-nowrap md:text-sm   max-w-40 lg:w-48 text-center flex-shrink-0'>
                            <img src={item.img1} alt={item.title} className='mx-auto' />
                            <h1 className='font-bold '>{item.title}</h1>
                            <h1 className='font-semibold '>{item.subtitle}</h1>
                        </Link>
                    ))}
                </div>
                <div className='mb-3 h-10'></div>
                <div className='mt-3 md:w-full'>
                    <Button link={""} />
                </div>
            </div>
        </div>
       
    );
}

export default Materials;