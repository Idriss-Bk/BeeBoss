import React from 'react';
import { Fraunces } from 'next/font/google';
import { RiCodeAiLine } from "react-icons/ri";
import { BiHappyBeaming } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const Achivements = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 bg-white">
      <div className={`${fraunces.variable} font-fraunces font-light text-center text-6xl mb-12`}>
        Our Achievements in Numbers
      </div>
      <div className="achievements-section grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl">
        <div className="achievement-card bg-yallow-50 p-8 rounded-full text-center ">
        <div className="text-6xl bg-yellow-100 p-5 rounded-full  mb-4 flex gap-8  "> <RiCodeAiLine  /> <span className='text-2xl font-fraunces flex justify-center items-center text-center'>Over 500K Stores Created</span></div>
         
          <p className="text-gray-600 text-start">We have successfully helped launch over 5,000 Shopify stores, empowering entrepreneurs around the world to turn their dreams into thriving online businesses.</p>
        </div>
        <div className="achievement-card bg-gray-100 p-8 rounded-full  text-center">
        <div className="text-6xl bg-yellow-100 p-5 rounded-full  mb-4 flex gap-8"> <BiHappyBeaming /> <span className='text-2xl font-fraunces flex justify-center items-center text-center'>98% Customer Satisfaction</span> </div>
          <p className="text-gray-600 text-start">We take pride in our exceptional service, achieving a remarkable 98% customer satisfaction rate, ensuring that our users are happy and successful.</p>
        </div>
        <div className="achievement-card bg-gray-100 p-8 rounded-full  text-center">
        <div className="text-6xl bg-yellow-100 p-5 rounded-full  mb-4 flex gap-8"> <GiMoneyStack /> <span className='text-2xl font-fraunces flex justify-center items-center text-center'>+$16 Million in Revenue</span> </div>
          <p className="text-gray-600 text-start">Our platform has enabled customers to generate over $10 million in revenue, highlighting the financial success and growth opportunities we provide.</p>
        </div>
        <div className="achievement-card bg-gray-100 p-8 rounded-full  text-center">
        <div className="text-6xl bg-yellow-100 p-5 rounded-full  mb-4 flex gap-8"> <BiWorld /> <span className='text-2xl font-fraunces flex justify-center items-center text-center'>Global Reach: 50+ Countries</span> </div>
          <p className="text-gray-600 text-start">Our reach extends globally, with entrepreneurs in over 50 countries utilizing our platform to build and grow their online stores, showcasing our international impact</p>
          
        </div>
      </div>
    </div>
  );
};

export default Achivements;
