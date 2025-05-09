import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => (
  <section
    ref={el => (window.heroRef = el)}
    className="h-[100vh] bg-green-100 flex items-center justify-center text-4xl"
  >
    Hero Section
  </section>
);

const Navbar2 = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = window.heroRef?.getBoundingClientRect().bottom;
      if (heroBottom && heroBottom <= 0) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showStickyNav && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 px-6 py-4 flex justify-between items-center"
        >
          <h1 className="text-xl font-bold">MySite</h1>
          <ul className="flex space-x-6 text-gray-800">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const StaticNavbar = () => (
  <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-10">
    <h1 className="text-xl font-bold text-white">MySite</h1>
    <ul className="flex space-x-6 text-white">
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const Page = () => (
  <div>
    <StaticNavbar />
    <Navbar2 />
    <HeroSection />
    {/* <section className="h-[150vh] bg-gray-100 p-20 text-2xl">Page Content...</section> */}
  </div>
);

export default Page;
