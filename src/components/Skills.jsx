import React, { useEffect } from "react";
import { Cpu, Code, Network, Brain } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    title: "Embedded Systems",
    icon: Cpu,
    gradient: "from-[#7B2FFF] to-[#00d4ff]",
    skills: ["ESP32", "STM32", "Arduino", "Raspberry Pi", "IoT", "Sensor Integration", "Embedded Design"],
    metrics: [
      { name: "Microcontroller Prog.", level: 95 },
      { name: "IoT Protocols (MQTT/HTTP)", level: 90 },
      { name: "PCB & Sensor Integration", level: 88 },
      { name: "RTOS & Firmware Design", level: 85 }
    ]
  },
  {
    title: "Software & Robotics",
    icon: Code,
    gradient: "from-[#a855f7] to-[#00d4ff]",
    skills: ["ROS 2", "Gazebo", "RViz", "Python", "C", "C++", "HTML", "CSS", "JavaScript", "PHP", "Linux", "Ubuntu", "Git", "GitHub"],
    metrics: [
      { name: "ROS / ROS 2 Architecture", level: 92 },
      { name: "C / C++ / Python System Dev", level: 90 },
      { name: "Simulation (Gazebo/RViz)", level: 85 },
      { name: "Full-Stack Web (React/JS)", level: 88 }
    ]
  },
  {
    title: "Networking",
    icon: Network,
    gradient: "from-[#00d4ff] to-[#7B2FFF]",
    skills: ["Wireshark", "Routing Protocols", "Protocol Analysis", "Network Troubleshooting"],
    metrics: [
      { name: "Protocol Diagnostics", level: 90 },
      { name: "Packet Interception", level: 85 },
      { name: "Wireless Mesh / RFID", level: 88 },
      { name: "Network Infrastructure", level: 82 }
    ]
  },
  {
    title: "AI / ML",
    icon: Brain,
    gradient: "from-[#c084fc] to-[#00d4ff]",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "API Integrations"],
    metrics: [
      { name: "Edge AI / TinyML", level: 88 },
      { name: "OpenCV / Image Processing", level: 90 },
      { name: "Speech Recog. / Vosk", level: 85 },
      { name: "LLM / API Architecture", level: 88 }
    ]
  }
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="relative w-full bg-transparent py-24 overflow-hidden z-10" id="Skills">
      {/* Circuit board SVG pattern scrolling watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10 10h20v20h-20zM50 10h20v20h-20zM10 50h20v20h-20zM50 50h20v20h-20zM30 20h20M70 20h20M30 60h20M70 60h20M20 30v20M60 30v20' stroke='%23a855f7' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px',
        animation: 'spin-slower 60s linear infinite'
      }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 text-center" data-aos="fade-up" data-aos-duration="800">
          <p className="text-xs sm:text-sm font-bold text-cyan-400 tracking-widest mb-3 uppercase">
            My Tech Arsenal
          </p>
          <h2 className="text-4xl md:text-6xl font-black gradient-text-animated mb-4">
            Skills That Power My Innovations
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light tracking-wide">
            A curated collection of technologies, tools, and platforms I use to build intelligent systems, robotics projects, embedded solutions, and modern web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((category, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              data-aos-duration="800"
              className="flip-card h-[400px] sm:h-[360px] w-full"
            >
              <div className="flip-card-inner relative w-full h-full rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                
                {/* Front Face */}
                <div className="flip-card-front neon-border-trace absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-50"></div>
                  
                  <div>
                    <div className="relative flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} bg-opacity-20 border border-white/15 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]`}>
                        <category.icon className="w-7 h-7 text-cyan-400 animate-pulse" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <div className="relative flex flex-wrap gap-2.5 pt-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          data-aos="zoom-in"
                          data-aos-delay={skillIndex * 40}
                          className="px-4 py-2 text-xs sm:text-sm font-semibold text-purple-100 bg-purple-500/15 rounded-xl border border-purple-500/30 shadow-[0_4px_15px_rgba(168,85,247,0.15)] hover:border-cyan-400 hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-cyan-400 font-semibold tracking-wider uppercase animate-pulse">Hover to view metrics ⟳</span>
                  </div>
                </div>

                {/* Back Face (Animated Skill Bars) */}
                <div className="flip-card-back absolute inset-0 bg-[#0d0d1a]/95 backdrop-blur-3xl rounded-3xl border border-cyan-500/40 p-8 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-30"></div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-cyan-400 tracking-tight flex items-center gap-2">
                        <category.icon className="w-6 h-6" /> {category.title} Metrics
                      </h3>
                      <span className="text-xs bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 font-bold">Expertise Level</span>
                    </div>

                    <div className="space-y-4 pt-2">
                      {category.metrics.map((metric, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex justify-between text-xs sm:text-sm font-semibold text-gray-200">
                            <span>{metric.name}</span>
                            <span className="text-cyan-400">{metric.level}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden border border-white/10">
                            <div 
                              className="h-full bg-gradient-to-r from-[#7B2FFF] via-[#a855f7] to-[#00d4ff] rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(0,212,255,0.8)]"
                              style={{ width: `${metric.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-right relative z-10">
                    <span className="text-xs text-purple-400 font-semibold tracking-wider uppercase">⟲ Front view</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
