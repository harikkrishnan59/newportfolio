import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, MessageCircle } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      text: 'Please wait...',
      allowOutsideClick: false,
      background: '#0a0a0f',
      color: '#ffffff',
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonColor: '#00d4ff',
          background: '#0a0a0f',
          color: '#ffffff',
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#a855f7',
        background: '#0a0a0f',
        color: '#ffffff',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact" className="relative py-12 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p data-aos="fade-down" className="text-xs sm:text-sm font-bold text-cyan-400 tracking-widest mb-3 uppercase animate-pulse">
            Initiate Connection
          </p>
          <h2 data-aos="fade-down" data-aos-duration="1000" className="inline-block text-4xl md:text-6xl font-black text-center mx-auto gradient-text-animated">
            Contact Me
          </h2>
          <p data-aos="fade-up" data-aos-duration="1100" className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg mt-3 font-light tracking-wide">
            Got an innovative project or question? Send me a message, and let's collaborate.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-3xl">
            <div data-aos="fade-up" data-aos-duration="1200" className="relative group/form">
              
              {/* Animated Aurora Gradient Background Blobs behind frosted glass */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[350px] h-[350px] bg-gradient-to-r from-purple-600/30 to-violet-500/20 rounded-full blur-3xl aurora-blob-1" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[350px] h-[350px] bg-gradient-to-r from-cyan-600/30 to-teal-500/20 rounded-full blur-3xl aurora-blob-2" />
              </div>
              
              {/* Frosted Glassmorphism Panel blur(30px) */}
              <div className="glass-strong relative z-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8 sm:p-12 transition-all duration-500 hover:border-cyan-500/40">
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7]">
                      Get in Touch
                    </h2>
                    <p className="text-gray-300 text-sm font-light tracking-wide">
                      Secure encrypted communication channel.
                    </p>
                  </div>
                  
                  {/* WhatsApp Direct Connect Button with Concentric Radar Pulse Rings */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl animate-radar-pulse pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl animate-radar-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
                    <a 
                      href="https://wa.me/919444444444" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative z-10 flex items-center justify-center p-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl text-white shadow-lg hover:scale-110 transition-transform"
                      title="Connect via WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Name Input */}
                  <div className="relative group">
                    <User className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-cyan-400' : 'text-gray-400'}`} />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      disabled={isSubmitting} 
                      className="w-full p-4 pl-12 bg-[#0a0a0f]/60 rounded-xl border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:border-transparent focus:ring-0 transition-all duration-300 text-sm" 
                      required 
                    />
                    {/* Bottom electric arc trace on focus */}
                    <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] transition-all duration-500 ${focusedField === 'name' ? 'scale-x-100 shadow-[0_0_15px_rgba(0,212,255,0.8)]' : 'scale-x-0'}`} />
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <Mail className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-cyan-400' : 'text-gray-400'}`} />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      disabled={isSubmitting} 
                      className="w-full p-4 pl-12 bg-[#0a0a0f]/60 rounded-xl border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:border-transparent focus:ring-0 transition-all duration-300 text-sm" 
                      required 
                    />
                    <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] transition-all duration-500 ${focusedField === 'email' ? 'scale-x-100 shadow-[0_0_15px_rgba(0,212,255,0.8)]' : 'scale-x-0'}`} />
                  </div>

                  {/* Message Textarea */}
                  <div className="relative group">
                    <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'message' ? 'text-cyan-400' : 'text-gray-400'}`} />
                    <textarea 
                      name="message" 
                      placeholder="Your Message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      disabled={isSubmitting} 
                      className="w-full resize-none p-4 pl-12 bg-[#0a0a0f]/60 rounded-xl border border-white/10 placeholder-gray-500 text-white focus:outline-none focus:border-transparent focus:ring-0 transition-all duration-300 text-sm h-40" 
                      required 
                    />
                    <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] transition-all duration-500 ${focusedField === 'message' ? 'scale-x-100 shadow-[0_0_15px_rgba(0,212,255,0.8)]' : 'scale-x-0'}`} />
                  </div>

                  {/* Send Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="group w-full bg-gradient-to-r from-[#7B2FFF] via-[#00d4ff] to-[#a855f7] text-white py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 magnetic-hover text-sm tracking-wide"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    {isSubmitting ? 'Transmitting Data...' : 'Transmit Message'}
                  </button>

                </form>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <SocialLinks />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;