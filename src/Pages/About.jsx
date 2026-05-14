import React, { useEffect, memo, useMemo, useState, useRef } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { dummyProjects, dummyCertificates } from "../assets/dummyData";

const Header = memo(() => ( 
  <div className="text-center lg:mb-12 mb-6 px-[5%]"> 
    <h2 className="text-4xl md:text-6xl font-black gradient-text-animated" data-aos="zoom-in-up" data-aos-duration="600">About Me</h2> 
    <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2 tracking-wide font-light" data-aos="zoom-in-up" data-aos-duration="800">
      <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" /> Transforming ideas into reality <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
    </p> 
  </div>
));

const ProfileImage = memo(() => ( 
  <div className="flex justify-center items-center sm:p-12 sm:py-0 p-0 py-4"> 
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000"> 
      <div className="absolute -inset-6 opacity-30 z-0 hidden sm:block pointer-events-none"> 
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] rounded-full blur-3xl animate-spin-slower" /> 
      </div> 
      <div className="relative"> 
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden glow-ring transform transition-all duration-700 group-hover:scale-105 animate-pulse-glow"> 
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-cyan-500/50 group-hover:scale-105" /> 
          <img src="/pro.jpg" alt="Profile" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" loading="lazy" /> 
        </div> 
      </div> 
    </div> 
  </div>
));

const useCountUp = (target, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div data-aos={animation} data-aos-duration={1300} className="relative group" ref={ref}>
      {/* Outer gradient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
      
      {/* Holographic shimmer card treatment */}
      <div className="holographic-hover relative z-10 bg-[#0a0a0f]/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(168,85,247,0.2)] hover:border-cyan-500/40 h-full flex flex-col justify-between card-tilt">
        
        <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
        
        <div className="flex items-center justify-between mb-6">
          {/* Floating 3D icon rotating continuously on Y-axis at 0.5rpm */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-700 group-hover:border-cyan-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <div className="animate-spin-slower" style={{ animationDuration: '12s' }}>
              <Icon className="w-8 h-8 text-cyan-400 group-hover:text-[#a855f7] transition-colors" />
            </div>
          </div>
          
          {/* Odometer slot machine roll effect */}
          <div className="overflow-hidden">
            <span className="inline-block text-5xl font-black text-white tabular-nums tracking-tight animate-odometer">{count}</span>
          </div>
        </div>
        
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-300 font-bold mb-2">{label}</p>
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400 font-light">{description}</p>
            <ArrowUpRight className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>
        </div>

      </div>
    </div>
  );
});

const AboutPage = () => {
  const { totalProjects, totalCertificates, yearExperience } = useMemo(() => {
    const startDate = new Date("2018-11-06"); 
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() - (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);
    return { totalProjects: dummyProjects.length, totalCertificates: dummyCertificates.length, yearExperience: experience };
  }, []);

  useEffect(() => { AOS.init({ once: false }); }, []);

  const statsData = useMemo(() => [
      { icon: Code, color: "from-[#7B2FFF] to-[#00d4ff]", value: totalProjects, label: "Total Projects", description: "Innovative solutions", animation: "fade-right" },
      { icon: Award, color: "from-[#a855f7] to-[#00d4ff]", value: totalCertificates, label: "Certificates", description: "Skills validated", animation: "fade-up" },
      { icon: Globe, color: "from-[#00d4ff] to-[#7B2FFF]", value: yearExperience, label: "Years of Experience", description: "Continuous learning", animation: "fade-left" },
    ], [totalProjects, totalCertificates, yearExperience]);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] relative z-10" id="About">
      <Header />
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight" data-aos="fade-right" data-aos-duration="1000">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7]">Hello, I'm</span>
              <span className="block mt-2 text-white font-black" data-aos="fade-right" data-aos-duration="1300">Hari Krishnan</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify font-light tracking-wide pb-4 sm:pb-0" data-aos="fade-right" data-aos-duration="1500">
              Passionate about making hardware that speaks, senses, and solves. Every project is a step toward smarter, connected technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <a href="/hari.pdf" download="Hari-Krishnan-CV.pdf" className="w-full sm:w-auto">
                <button data-aos="fade-up" data-aos-duration="800" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2.5 shadow-lg magnetic-hover text-sm tracking-wide">
                  <FileText className="w-4 h-4" /> Download CV
                </button>
              </a>

              <a href="#Portofolio" className="w-full sm:w-auto">
                <button data-aos="fade-up" data-aos-duration="1000" className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-purple-500/40 text-cyan-400 font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5 hover:bg-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] magnetic-hover text-sm tracking-wide bg-[#0a0a0f]/50 backdrop-blur-md">
                  <Code className="w-4 h-4" /> View Projects
                </button>
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>
        <a href="#Portofolio" className="block mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
            {statsData.map((stat) => (<StatCard key={stat.label} {...stat} />))}
          </div>
        </a>
      </div>
    </div>
  );
};

export default memo(AboutPage);