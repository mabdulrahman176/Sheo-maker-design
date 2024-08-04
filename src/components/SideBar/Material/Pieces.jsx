import React, { useState } from "react";
import Cross from "../Cross";
import { Link, useLocation } from "react-router-dom";
import PieceItem from "./PieceItem";



const Pieces = () => {

  const [focusedItemId, setFocusedItemId] = useState(null);
  const loc = useLocation();
 console.log(loc)
  const data = [
    {
      title: "ITALIAN CALF LEATHER",
      value:'Softness and Comfort',
      amount:"",
      items: [
        { id: 1, img1: '/Images/brownie.jpeg', title: "Roberto" },
        { id: 2, img1: '/Images/brownie.jpeg', title: "Fabio" },
        { id: 3, img1:'/Images/brownie.jpeg', title: "Globanni" },
        { id: 4, img1: '/Images/brownie.jpeg', title: "Carlo" },
        { id: 5, img1: '/Images/brownie.jpeg', title: "Paolo" },
        { id: 6, img1:'/Images/brownie.jpeg', title: "Andrea" },
        { id: 7, img1: '/Images/brownie.jpeg', title: "Alessio" },
      ],
    },
    {
      title: "ITALIAN CALF LEATHER - SHINE ",
      value:'Elegant Silk Touch',
      amount:"(+10€)",
      items: [
        { id: 8, img1:'/Images/brownie.jpeg', title: "Stefano" },
        { id: 9, img1: '/Images/brownie.jpeg', title: "Enrico" },
        { id: 10, img1: '/Images/brownie.jpeg', title: "Filippo" },
        { id: 11, img1: '/Images/brownie.jpeg', title: "Marco" },
        { id: 12, img1: '/Images/brownie.jpeg', title: "Massimo" },
        { id: 13, img1: '/Images/brownie.jpeg', title: "Riccardo" },
        { id: 14, img1: '/Images/brownie.jpeg', title: "Edoardo" },
      ],
    },
    {
        title: "FLORA LEATHER",
        value:'Shiny Elegance',
        amount:"",
        items: [
          { id: 15, img1: '/Images/brownwavy.jpg', title: "Gentile" },
          { id: 16, img1: '/Images/brownwavy.jpg', title: "Cafaro" },
          { id: 17, img1: '/Images/brownwavy.jpg', title: "Pisani" },
          { id: 18, img1: '/Images/brownwavy.jpg', title: "Paolino" },
          { id: 19, img1: '/Images/brownwavy.jpg', title: "Donato" },
        ],
      },
      {
        title: "SUEDE",
        value:'Versatile and Stylish',
        amount:"",
        items: [
          { id: 20, img1: '/Images/brownwavy.jpg', title: "luca" },
          { id: 21, img1: '/Images/brownwavy.jpg', title: "Gastone" },
          { id: 22, img1: '/Images/brownwavy.jpg', title: "Udinesi" },
          { id: 23, img1: '/Images/brownwavy.jpg', title: "Valentino" },
          { id: 24, img1: '/Images/brownwavy.jpg', title: "Ermanno" },
          { id: 25, img1: '/Images/brownwavy.jpg', title: "Cociarelli" },
          { id: 26, img1: '/Images/brownwavy.jpg', title: "Attilio" },
          { id: 27, img1: '/Images/brownwavy.jpg', title: "Trevisani" },
        ],
      },
      {
        title: "WAXED LEATHER",
        value:'Casual rough out look',
        amount:"",
        items: [
          { id: 28, img1: '/Images/brownwavy.jpg', title: "Ciro" },
          { id: 29, img1: '/Images/brownwavy.jpg', title: "Glannino" },
          { id: 30, img1: '/Images/brownwavy.jpg', title: "Vittoria" }
        ],
      },
      {
        title: "VELVET",
        value:'Black tie or Casual?',
        amount:"",
        items: [
          { id: 31, img1: '/Images/brownwavy.jpg', title: "Navy Blue" },
          { id: 32, img1: '/Images/brownwavy.jpg', title: "Ford" },
          { id: 33, img1: '/Images/brownwavy.jpg', title: "Navy Black" },
          { id: 34, img1: '/Images/brownwavy.jpg', title: "Rellos" },
          { id: 35, img1: '/Images/brownwavy.jpg', title: "Kebla" },
          { id: 36, img1: '/Images/brownwavy.jpg', title: "Daise" },
        ],
      },
      {
        title: "FABRICS ",
        value:'The distinictive touch',
        amount:"(+10€)",
        
        items: [
          { id: 37, img1: '/Images/brownwavy.jpg', title: "Pardini" },
          { id: 38, img1: '/Images/brownwavy.jpg', title: "Lephs" },
          { id: 39, img1: '/Images/brownwavy.jpg', title: "Cretella" },
          { id: 40, img1: '/Images/brownwavy.jpg', title: "Valtena" },
          { id: 41, img1: '/Images/brownwavy.jpg', title: "Dennee" },
          { id: 42, img1: '/Images/brownwavy.jpg', title: "Aresio" },
          { id: 43, img1: '/Images/brownwavy.jpg', title: "Luigi" },
          { id: 44, img1: '/Images/brownwavy.jpg', title: "Aidano" },
        ],
      },
  ];
  

  return (
    <div className="flex h-auto lg:h-screen">
    {/* Sidebar or Main Content Area */}
    <div className="w-full lg:w-[19rem] relative">
      
      {/* Static Header */}
      <div className="flex justify-center items-center h-16 bg-white fixed w-full lg:w-[19rem] p-3 z-10">
        <h1 className="text-center">{loc.state?.name}</h1>
        <Link to='/materialicon'>
          <img className="w-9 h-9 ml-2" src='/Images/icon_sole.jpg' alt="info icon" />
        </Link>
      </div>

      {/* Scrollable Content */}
      <div className="lg:overflow-y-scroll h-[calc(100vh-4rem)] mt-16 lg:mt-0">
        {data.map((section, index) => (
          <div key={index} className="mt-8">
            <div className="text-center">
              <h1 className="font-bold">{section.title}</h1>
              <h2 className="text-[13px]">{section.amount}</h2>
              <p className="lg:pt-6">{section.value}</p>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-8 grid-cols-8 md:gap-2 mt-8">
              {section.items.map((item) => (
                <PieceItem
                  key={item.id}
                  item={item}
                  focusedItemId={focusedItemId}
                  setFocusedItemId={setFocusedItemId}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Cross Component */}
    <Cross link={"materials"} />
  </div>
);
};

  

export default Pieces;