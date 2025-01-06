import React from 'react';
import { Fraunces } from 'next/font/google';
import Image from 'next/image';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const About = () => {
  return (
    <section className="who-we-are min-h-screen flex items-center justify-center py-20 bg-yellow-100 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
        <div className="lg:w-1/2 flex justify-center items-center">
          <Image
            src="/about.webp"
            alt="Who We Are Image"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-1/2 p-8">
          <div className={`${fraunces.variable} font-fraunces font-light text-6xl mb-4`}>
            Who We Are
          </div>
          <p className="text-gray-900">
            At BeeBoss, we empower you to be your own boss. Using advanced AI technology, we create your online shop in just 10 minutes, with expert reviews ensuring delivery within 48-60 hours. Our team of IT, marketing, social media, and wholesale experts is always available for support and optimizations.
            <br /><br />
            Your success is our success. We offer unlimited coaching and are dedicated to helping you achieve measurable sales success with the latest technology and trends. We are here to assist you with all your questions and needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
