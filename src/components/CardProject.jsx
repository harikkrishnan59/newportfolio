import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';

const CardProject = ({ Img, Title, Description, id }) => {
  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available.");
    }
  };

  return (
    <div className="group relative w-full h-[420px] sm:h-[450px] card-tilt overflow-visible" style={{ perspective: '800px' }}>
      {/* Color-shifting dominant ambient glow beneath each card */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700 animate-gradient pointer-events-none z-0"></div>
      
      {/* Main Card Container */}
      <div className="relative z-10 overflow-hidden rounded-3xl bg-[#0a0a0f]/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-500/40 h-full flex flex-col group/card transform-style-3d">
        
        {/* Parallax Image Layer */}
        <div className="relative overflow-hidden aspect-video w-full rounded-t-3xl">
          <img
            src={Img}
            alt={Title}
            className="w-full h-full object-cover transform group-hover:scale-[1.08] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>
    
        {/* Parallax Inner Content Layer */}
        <div className="relative p-6 sm:p-8 z-10 flex flex-col flex-grow justify-between transition-transform duration-500 group-hover:translate-z-12 group-hover:-translate-y-1">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
              {Title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mt-3 font-light tracking-wide">
              {Description || "Innovative robotics and embedded engineering project exploring automation and intelligent hardware control."}
            </p>
          </div>
          
          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#a855f7] tracking-widest uppercase flex items-center gap-1.5 animate-pulse">
              <Code className="w-3.5 h-3.5" /> ROS / IoT
            </span>
            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-purple-500/30 hover:border-cyan-400 shadow-lg magnetic-hover text-xs sm:text-sm"
              >
                <span>Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ) : null}
          </div>
        </div>

        {/* Overlay Glassmorphism Info Panel that slides up from bottom on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) bg-[#0d0d1a]/95 backdrop-blur-3xl p-6 sm:p-8 border-t border-cyan-500/40 z-20 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-lg sm:text-xl font-black text-cyan-400 tracking-tight">{Title}</h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-4 font-light tracking-wide">
              {Description || "Detailed project analysis covering hardware architecture, microcontroller firmware, sensor integration, and real-time execution parameters."}
            </p>
          </div>
          <div className="pt-4 flex justify-end">
            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7B2FFF] to-[#00d4ff] text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,212,255,0.4)] text-xs sm:text-sm"
              >
                <span>Explore Deep Dive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardProject;