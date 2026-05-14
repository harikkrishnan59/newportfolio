import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Code2,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";
import { dummyProjects } from "../assets/dummyData";

const TECH_ICONS = {
  React: Globe, Tailwind: Layout, 'Framer Motion': Layers, AOS: Layers, 'Material UI': Layout, JavaScript: Code, HTML: Code, CSS: Code, Python: Code, "Raspberry Pi": Cpu, "ESP32": Cpu, "ESP32-CAM": Cpu, "Arduino": Cpu, default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  return ( <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default"> <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" /> <div className="relative flex items-center gap-1.5 md:gap-2"><Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" /><span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">{tech}</span></div> </div> );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  return ( 
    <div className="grid grid-cols-1 gap-4 p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative border border-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]"> 
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" /> 
      <div className="relative z-10 flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-2 rounded-full">
          <Code2 className="text-blue-300 w-6 h-6" strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-xl font-semibold text-blue-200">{techStackCount}</div>
          <div className="text-xs text-gray-400">Technologies Used</div>
        </div>
      </div> 
    </div> 
  );
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = dummyProjects.find((p) => String(p.id) === id);
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [id]);

  if (!project) {
    return ( <div className="min-h-screen bg-[#030014] flex items-center justify-center"><div className="text-center space-y-6"><div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" /><h2 className="text-xl md:text-3xl font-bold text-white">Loading Project...</h2></div></div> );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
      <div className="fixed inset-0"><div className="absolute -inset-[10px] opacity-20"><div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" /><div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" /><div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" /></div></div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12">
            <button onClick={() => navigate(-1)} className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"><ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" /><span>Back</span></button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50"><span>Projects</span><ChevronRight className="w-3 h-3 md:w-4 md:h-4" /><span className="text-white/90 truncate">{project.Title}</span></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-6 md:space-y-10">
              <div className="space-y-4 md:space-y-6"><h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">{project.Title}</h1><div className="relative h-1 w-16 md:w-24"><div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" /><div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" /></div></div>
              
              {/* Premium Glassmorphism Project Overview Section */}
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] space-y-6 hover:border-purple-500/40 transition-all duration-300 group">
                <h3 className="text-xl md:text-2xl font-bold text-white/90 flex items-center gap-3">
                  Project Overview
                </h3>
                <div className="text-base md:text-lg text-gray-300/90 leading-relaxed space-y-4 whitespace-pre-line">
                  {project.Description || "No description available for this project."}
                </div>
              </div>

              <ProjectStats project={project} />

              <div className="space-y-4 md:space-y-6 pt-6">
                <h3 className="text-lg md:text-xl font-semibold text-white/90 flex items-center gap-2 md:gap-3"><Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />Technologies Used</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {(project.TechStack ?? []).map((tech, index) => <TechBadge key={index} tech={tech} /> )}
                </div>
              </div>
            </div>
            <div className="space-y-6 md:space-y-10 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"><img src={project.Img} alt={project.Title} className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;