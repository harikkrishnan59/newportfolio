import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    
    const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Skills", label: "Skills" },
        { href: "#Portofolio", label: "Portfolio" },
        { href: "#Contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.label,
                        offset: section.offsetTop - 150,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            let currentSection = 'Home';

            for (const section of sections) {
                if (currentPosition >= section.offset && currentPosition < section.offset + section.height) {
                    currentSection = section.id;
                    break;
                }
            }
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                currentSection = "Contact";
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[99999] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
            scrolled
                ? "top-4 w-[90%] md:w-[70%] max-w-4xl bg-[#0a0a0f]/95 backdrop-blur-3xl border border-purple-500/50 rounded-full shadow-[0_10px_50px_rgba(0,0,0,0.9)] py-2.5"
                : "top-6 w-[95%] max-w-6xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-purple-500/20 rounded-full py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        }`}
    >
        <div className="mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between h-14">
                <div className="flex-shrink-0">
                    <a
                        href="#Home"
                        onClick={(e) => scrollToSection(e, "#Home")}
                        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-tight"
                    >
                        Hari Krishnan
                    </a>
                </div>
    
                <div className="hidden md:block">
                    <div className="flex items-center space-x-2 relative">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="group relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300"
                            >
                                {activeSection === item.label && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full shadow-[inset_0_0_15px_rgba(168,85,247,0.2)]"></span>
                                )}
                                <span
                                    className={`relative z-10 transition-colors duration-300 tracking-wide ${
                                        activeSection === item.label
                                            ? "text-white"
                                            : "text-[#94a3b8] group-hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </span>
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-[#7B2FFF] to-[#00d4ff] transform transition-all duration-300 rounded-full ${
                                        activeSection === item.label
                                            ? "scale-x-100 shadow-[0_0_10px_rgba(0,212,255,0.8)]"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
    
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`relative p-2 text-[#e2d3fd] hover:text-white transition-transform duration-300 ease-in-out transform ${
                            isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                        }`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </div>
    
        <div
            className={`md:hidden fixed inset-x-0 top-[110%] bg-[#0a0a0f]/95 backdrop-blur-3xl border border-purple-500/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) mx-4 overflow-hidden ${
                isOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
            <div className="flex flex-col h-auto">
                <div className="px-6 py-8 space-y-3">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`block px-5 py-3.5 text-lg font-semibold transition-all duration-300 rounded-2xl ${
                                activeSection === item.label
                                    ? "bg-gradient-to-r from-purple-500/15 to-cyan-500/15 text-white border border-purple-500/30"
                                    : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                            }`}
                            style={{
                                transitionDelay: `${index * 50}ms`,
                                transform: isOpen ? "translateX(0)" : "translateX(30px)",
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;