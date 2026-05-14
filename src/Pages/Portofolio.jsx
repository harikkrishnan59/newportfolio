import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Plus, Minus, LayoutGrid, Columns } from "lucide-react"; 
import { dummyProjects, dummyCertificates } from "../assets/dummyData";

const ToggleButton = ({ onClick, displayState }) => {
  const isShowingAll = displayState === 2;
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] magnetic-hover text-sm tracking-wide"
    >
      {isShowingAll ? "See Less" : "See More"}
      {isShowingAll ? <Minus className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> : <Plus className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />}
    </button>
  );
};

function TabPanel(props) {
  const { children, value, index, isExploding, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 }, mt: 4 }} className={`transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isExploding ? "opacity-0 scale-50 blur-2xl translate-y-16" : "opacity-100 scale-100 blur-0 translate-y-0"}`}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = { children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired };

function a11yProps(index) {
  return { id: `full-width-tab-${index}`, "aria-controls": `full-width-tabpanel-${index}` };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects] = useState(dummyProjects);
  const [certificates] = useState(dummyCertificates);
  const [isMasonry, setIsMasonry] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  
  const [projectDisplayState, setProjectDisplayState] = useState(0);
  const [certificateDisplayState, setCertificateDisplayState] = useState(0);
  
  const initialProjects = 6; 
  const intermediateProjects = 12; 
  const initialCertificates = 4;
  const intermediateCertificates = 8;

  useEffect(() => { AOS.init({ once: false }); }, []);

  const handleChange = (event, newValue) => {
    if (value === newValue) return;
    setIsExploding(true);
    setTimeout(() => {
      setValue(newValue);
      setIsExploding(false);
    }, 300);
  };

  const toggleShowMoreProjects = useCallback(() => {
    setProjectDisplayState(prevState => (prevState === 2 ? 0 : prevState + 1));
  }, []);

  const toggleShowMoreCertificates = useCallback(() => {
    setCertificateDisplayState(prevState => (prevState === 2 ? 0 : prevState + 1));
  }, []);
  
  let displayedProjects;
  if (projectDisplayState === 0) {
    displayedProjects = projects.slice(0, initialProjects);
  } else if (projectDisplayState === 1) {
    displayedProjects = projects.slice(0, intermediateProjects);
  } else {
    displayedProjects = projects;
  }

  let displayedCertificates;
  if (certificateDisplayState === 0) {
    displayedCertificates = certificates.slice(0, initialCertificates);
  } else if (certificateDisplayState === 1) {
    displayedCertificates = certificates.slice(0, intermediateCertificates);
  } else {
    displayedCertificates = certificates;
  }

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-transparent overflow-hidden relative z-10" id="Portofolio">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center pb-12" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-xs sm:text-sm font-bold text-cyan-400 tracking-widest mb-3 uppercase animate-pulse">
            Proven Track Record
          </p>
          <h2 className="inline-block text-4xl md:text-6xl font-black text-center mx-auto gradient-text-animated">
            Portfolio Showcase
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mt-4 font-light tracking-wide">
            Explore my journey through engineering projects, robotics contributions, and technical expertise.
          </p>
        </div>

        <Box sx={{ width: "100%" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <AppBar position="static" elevation={0} sx={{ 
              bgcolor: "rgba(10, 10, 15, 0.8)", 
              backdropFilter: "blur(24px)", 
              border: "1px solid rgba(168, 85, 247, 0.25)", 
              borderRadius: "20px", 
              overflow: "hidden", 
              boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
              flexGrow: 1
            }}>
              <Tabs 
                value={value} 
                onChange={handleChange} 
                textColor="secondary" 
                indicatorColor="secondary" 
                variant="fullWidth" 
                sx={{ 
                  minHeight: "70px", 
                  "& .MuiTab-root": { 
                    fontSize: { xs: "0.9rem", md: "1.05rem" }, 
                    fontWeight: "700", 
                    color: "#94a3b8", 
                    textTransform: "none", 
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", 
                    padding: "20px 0", 
                    zIndex: 1, 
                    margin: "8px", 
                    borderRadius: "16px",
                    letterSpacing: "0.02em",
                    "&:hover": { 
                      color: "#ffffff", 
                      backgroundColor: "rgba(168, 85, 247, 0.1)" 
                    }, 
                    "&.Mui-selected": { 
                      color: "#fff", 
                      background: "linear-gradient(135deg, rgba(123, 47, 255, 0.2), rgba(0, 212, 255, 0.2))", 
                      boxShadow: "0 4px 20px -3px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                      border: "1px solid rgba(0, 212, 255, 0.3)" 
                    }, 
                  }, 
                  "& .MuiTabs-indicator": { height: 0 } 
                }} 
              >
                <Tab icon={<Code className="mb-1 w-5 h-5 text-cyan-400" />} label="Projects" {...a11yProps(0)} />
                <Tab icon={<Award className="mb-1 w-5 h-5 text-purple-400" />} label="Certificates" {...a11yProps(1)} />
              </Tabs>
            </AppBar>

            {/* Masonry Layout Toggle */}
            {value === 0 && (
              <button 
                onClick={() => setIsMasonry(!isMasonry)}
                className="flex items-center gap-2 px-6 py-4 bg-[#0a0a0f]/80 backdrop-blur-2xl border border-purple-500/30 rounded-2xl text-white font-semibold transition-all duration-300 hover:border-cyan-400 shadow-lg magnetic-hover text-sm"
              >
                {isMasonry ? <LayoutGrid className="w-5 h-5 text-cyan-400" /> : <Columns className="w-5 h-5 text-purple-400" />}
                <span>{isMasonry ? "Standard Grid" : "Masonry Layout"}</span>
              </button>
            )}
          </div>

          <TabPanel value={value} index={0} isExploding={isExploding}>
            <div className="container mx-auto overflow-visible pt-4 pb-8">
              {isMasonry ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                  {displayedProjects.map((project, index) => (
                    <div key={project.id || index} className="break-inside-avoid" data-aos="fade-up" data-aos-duration="800" data-aos-delay={index < 4 ? index * 80 : 0}>
                      <CardProject Img={project.Img} Title={project.Title} Description={project.Description} id={project.id} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {displayedProjects.map((project, index) => (
                    <div key={project.id || index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={index < 4 ? index * 80 : 0}>
                      <CardProject Img={project.Img} Title={project.Title} Description={project.Description} id={project.id} />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {projects.length > initialProjects && (
              <div className="mt-12 w-full flex justify-center pb-4">
                <ToggleButton onClick={toggleShowMoreProjects} displayState={projectDisplayState} />
              </div>
            )}
          </TabPanel>
          
          <TabPanel value={value} index={1} isExploding={isExploding}>
            <div className="container mx-auto flex justify-center items-center overflow-visible pt-4 pb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {displayedCertificates.map((certificate, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay={index < 4 ? index * 80 : 0}>
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialCertificates && (
              <div className="mt-12 w-full flex justify-center pb-4">
                <ToggleButton onClick={toggleShowMoreCertificates} displayState={certificateDisplayState} />
              </div>
            )}
          </TabPanel>

        </Box>
      </div>
    </div>
  );
}