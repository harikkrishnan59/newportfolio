import React, { useState, useEffect, useCallback, memo } from "react";
import { Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Kinetic text split animation component
const KineticLetter = ({ char, index }) => (
  <span 
    className="inline-block animate-odometer opacity-0"
    style={{ animationDelay: `${index * 50}ms`, display: char === ' ' ? 'inline' : 'inline-block' }}
  >
    {char}
  </span>
);

const StatusBadge = memo(() => ( 
  <div className="inline-block" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
      <div className="relative px-4 py-2 rounded-full bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#c084fc] text-transparent bg-clip-text text-xs sm:text-sm font-semibold flex items-center tracking-wide">
          <Sparkles className="w-4 h-4 mr-2 text-cyan-400 animate-pulse" /> Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2 relative z-10 py-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-font-breathe leading-tight">
      <span className="relative inline-block bg-gradient-to-r from-white via-slate-200 to-purple-200 bg-clip-text text-transparent block pb-2">
        Robotic
      </span>
      <span className="relative inline-block">
        <span className="relative gradient-text-animated animate-text-glitch text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black block">
          Engineer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => ( 
  <div className="px-4 py-2 rounded-xl bg-[#0a0a0f]/80 backdrop-blur-md border border-purple-500/30 text-[0.75rem] sm:text-xs font-semibold text-gray-200 hover:bg-purple-500/20 hover:border-cyan-400 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,212,255,0.6)] transition-all duration-300 cursor-default shadow-sm">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => ( 
  <a href={href}>
    <button className="group relative w-[170px] magnetic-hover">
      {/* Animated gradient border rotating continuously */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] rounded-2xl opacity-75 blur-md group-hover:opacity-100 animate-gradient transition-all duration-500"></div>
      <div className="relative h-12 bg-[#0a0a0f] backdrop-blur-2xl rounded-xl border border-white/15 leading-none overflow-hidden flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
        <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent font-semibold z-10 text-sm tracking-wide">{text}</span>
        <Icon className={`w-4 h-4 text-cyan-400 ${ text === "Contact" ? "group-hover:translate-x-1" : "group-hover:rotate-45" } transform transition-all duration-300 z-10`} />
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => ( 
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3.5 magnetic-hover">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FFF] to-[#00d4ff] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300 animate-gradient"></div>
      <div className="relative rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-2xl p-2.5 flex items-center justify-center border border-white/15 group-hover:border-cyan-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const WORDS = ["Robotic Engineer", "Project Maker", "Robotics Developer", "Embedded Systems Enthusiast"];
const TECH_STACK = [
  "Embedded System", "Internet of Things(IOT)", "ML", "ROS",
  "ROS2", "RViz", "Embedded Systems", "Circuit Designer",
  "Digital Twin", "Webserver Designer", "PLC Automation",
  "ESP32", "Arduino", "Raspberry Pi", "STM32", "BeagleBone",
  "Nvidia Jetson Nano", "FPGA Boards"
];
const SOCIAL_LINKS = [
  { icon: Instagram, link: "https://www.instagram.com/k.hari_krishnan?igsh=dW9hdWM2ZnFvczBo" },
  { icon: Mail, link: "mailto:harikkrishnan59@gmail.com" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/hari-krishnan-90a188325" },
];

const Home = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
  }, []);

  const type = useCallback(() => {
    const currentWord = WORDS[wordIndex];
    const updatedText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentWord) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }
  }, [text, isDeleting, wordIndex]);

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 75 : 150);
    return () => clearTimeout(timer);
  }, [type]);

  return (
    <div className="min-h-screen bg-transparent overflow-hidden relative" id="Home">
      <div className="relative z-10">
        <div className="mx-auto px-6 sm:px-8 lg:px-[10%] min-h-screen pt-32 lg:pt-40 pb-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
            <div className="space-y-6">
              <StatusBadge />
              <MainTitle />
              <div className="h-10 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
                <span className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light tracking-wide">{text}</span>
                <span className="w-[3px] h-7 bg-gradient-to-t from-[#7B2FFF] to-[#00d4ff] ml-2 animate-pulse"></span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide text-justify" data-aos="fade-up" data-aos-delay="1000">
                I am a Robotics and Embedded Systems Engineer and patent-holding innovator specializing in bridging hardware with intelligence. With a portfolio of 50+ projects and 10+ hackathon wins , I transform complex concepts into working prototypes using Embedded C, IoT, ROS2,Digital Twin and Machine Learning. My expertise ranges from autonomous robotics to industrial automation and advanced hardware troubleshooting.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center lg:justify-start pt-2 max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="1200">
                {TECH_STACK.map((tech, index) => <TechStack key={index} tech={tech} />)}
              </div>
              <div className="flex flex-row gap-4 w-full justify-center lg:justify-start pt-4" data-aos="fade-up" data-aos-delay="1400">
                <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                <CTAButton href="#Contact" text="Contact" icon={Mail} />
              </div>
              <div className="flex gap-4 justify-center lg:justify-start pt-4" data-aos="fade-up" data-aos-delay="1600">
                {SOCIAL_LINKS.map((social, index) => <SocialLink key={index} {...social} />)}
              </div>
            </div>
          </div>
          
          {/* Right Column: 3D Parallax Tilt Card Graphic with Prismatic Glow */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="600">
            <div className="card-tilt relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] flex items-center justify-center rounded-3xl border border-purple-500/20 bg-[#0a0a0f]/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)] hover:border-cyan-500/50 transition-all duration-500 group">
              {/* Prismatic rainbow edge glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] rounded-3xl opacity-30 group-hover:opacity-75 blur-2xl animate-gradient transition-all duration-700 pointer-events-none"></div>
              <DotLottieReact src="/Coding.json" loop autoplay />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(Home);