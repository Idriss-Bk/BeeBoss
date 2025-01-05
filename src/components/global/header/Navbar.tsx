"use client";
import React from 'react';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import Logo from './Logo';
import RightBar from './RightBar';

const Navbar: React.FC = () => {
  useEffect(() => {
    gsap.fromTo('.navbar', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full py-4  z-50 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <RightBar />
        </div>
      </div>

    
    </nav>
  );
};

export default Navbar;
