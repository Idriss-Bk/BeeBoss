"use client";
import React, { useEffect, useRef } from 'react';
import { Fraunces } from 'next/font/google';
import Image from 'next/image';
import { gsap } from 'gsap';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const Integration = () => {
  const integrationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo('.integration-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
          gsap.fromTo('.integration-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.3 });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (integrationRef.current) {
      observer.observe(integrationRef.current);
    }
  }, []);

  return (
    <section ref={integrationRef} className="integration min-h-screen flex flex-col items-center justify-center py-20 bg-white text-black">
      <div className={`${fraunces.variable} font-fraunces font-light text-center text-6xl mb-12 integration-title`}>
        BeeBoss Seamless Integrations
      </div>
      <div className="integration-section w-full max-w-4xl">
        <div className="integration-item flex items-center justify-between p-6">
          <div className="integration-logo w-1/2 flex justify-center">
            <Image src="/woocommerce.svg" alt="WooCommerce Logo" width={200} height={200} />
          </div>
          <div className="integration-desc w-1/2 p-10 bg-gray-50 rounded-xl">
            <h2 className="text-2xl mb-2 text-[#7f54b3] font-bold">WooCommerce</h2>
            <p className="text-gray-900">Seamlessly integrate your <span className='font-semibold'>WooCommerce</span> store with our platform to enhance your e-commerce capabilities and streamline your online business operations.</p>
          </div>
        </div>
        <div className="integration-item flex items-center justify-between p-6">
          <div className="integration-desc w-1/2 p-10 bg-gray-50 rounded-xl">
            <h2 className="text-2xl mb-2 text-[#81bf37] font-bold">Shopify</h2>
            <p className="text-gray-900">Effortlessly create and manage your <span className='font-semibold'>Shopify</span> store with our intuitive platform, offering expert guidance and proven strategies to turn your e-commerce vision into a reality.</p>
          </div>
          <div className="integration-logo w-1/2 flex justify-center">
            <Image src="/shopify.svg" alt="Shopify Logo" width={200} height={200} />
          </div>
        </div>
        <div className="integration-item flex items-center justify-between p-6">
          <div className="integration-logo w-1/2 flex justify-center">
            <Image src="/amazon.svg" alt="Amazon Logo" width={200} height={200} />
          </div>
          <div className="integration-desc w-1/2 p-10 bg-gray-50 rounded-xl">
            <h2 className="text-2xl mb-2 text-[#ff9a00] font-bold font-poppins">Amazon</h2>
            <p className="text-gray-900">Expand your reach by integrating your <span className='font-semibold'>Amazon</span> store with our platform, allowing you to manage your listings, orders, and inventory all in one place.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
