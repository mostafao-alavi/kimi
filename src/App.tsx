/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    // Defaults to dark theme as purple-to-blue gradients look extremely premium in dark mode
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      
      {/* Navigation System */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Content Blocks */}
      <main className="w-full flex flex-col">
        {/* 1. Hero Block */}
        <Hero />
        
        {/* 2. About Block */}
        <About />
        
        {/* 3. Services Block */}
        <Services />
        
        {/* 4. Contact Block */}
        <Contact />
      </main>
      
      {/* Footer System */}
      <Footer />
      
    </div>
  );
}
