import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import Skills from "./components/Skills";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import CustomCursor from "./components/CustomCursor";
import { AnimatePresence } from 'framer-motion';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#7B2FFF] via-[#a855f7] to-[#00d4ff] z-[99999] transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
};

const SectionWave = () => (
  <div className="w-full overflow-hidden leading-none relative z-10 opacity-20 my-4 pointer-events-none">
    <svg className="relative block w-full h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,0 1200,60 L1200,120 L0,120 Z" className="fill-[#a855f7]"></path>
    </svg>
  </div>
);

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <SectionWave />
          <About />
          <SectionWave />
          <Skills />
          <SectionWave />
          <Portofolio />
          <SectionWave />
          <ContactPage />
          <footer className="relative z-10 pt-12 pb-6">
            <div className="section-divider mx-[10%]"></div>
            <div className="py-6 text-center">
              <span className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
                © 2025{" "}
                <a href="#Home" className="hover:text-purple-400 transition-colors duration-300">
                  Hari Krishnan™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer className="relative z-10 pt-12 pb-6">
      <div className="section-divider mx-[10%]"></div>
      <div className="py-6 text-center">
        <span className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
          © 2025{" "}
          <a href="#Home" className="hover:text-purple-400 transition-colors duration-300">
            Hari Krishnan™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <ScrollProgress />
      <CustomCursor />
      {/* 3% opacity animated noise/grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;