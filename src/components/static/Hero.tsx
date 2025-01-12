"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Fraunces } from 'next/font/google';
import { PiStorefrontLight } from "react-icons/pi";
import Head from 'next/head';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const Hero: React.FC = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo('.hero-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
          gsap.fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
          gsap.fromTo('.hero-button', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
          gsap.fromTo('.hero-image', { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, delay: 1.5 });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Shopify Store Launch</title>
        <meta name="description" content="Launch your Shopify store quickly with expert guidance and proven strategies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section ref={heroRef} className="hero min-h-screen flex items-center justify-center py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center items-start">
            <div className={`hero-subtitle text-7xl text-gray-50 mb-4 ${fraunces.variable} font-fraunces`}>
              Quickly Launch Your Shopify Store in <span className='text-[#d5a246]'> 10 Min</span>  with <span className="gradient-text">AI</span>
            </div>
            <div className="hero-title text-md text-gray-50 mb-6 font-poppins">
              Expert guidance and proven strategies to turn your e-commerce vision into a reality
            </div>
            <button
              className="hero-button px-6 py-2 bg-white text-black rounded-full text-sm flex justify-center items-center gap-2 border border-transparent transition-colors duration-300 hover:text-white hover:border-white"
            >
              <PiStorefrontLight />
              Start Selling Online
            </button>
          </div>
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <Image
              className="hero-image"
              src="/hero-1.png"
              alt="Hero Image"
              width={600}
              height={600}
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero-button {
          transition: color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
        }
        .hero-button:hover {
          color: white;
          border-color: white;
          background-color: black;
        }
      `}</style>
    </>
  );
};

export default Hero;
