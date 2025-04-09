import React, { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

const CTASection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.cta-animate');
          elements.forEach(element => {
            motion.animate(
              element,
              { 
                opacity: [0, 1],
                y: [30, 0] 
              },
              { 
                duration: 0.8,
                easing: "ease-out"
              }
            );
          });
          observer.disconnect(); // Only animate once
        }
      });
    }, { threshold: 0.1 });
    
    const section = document.querySelector('#contact');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Refined background with luxury aesthetic */}
      <div className="absolute inset-0 bg-[#5B0A42]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBhMSAxIDAgMTEtMi4wMDEtLjAwMUExIDEgMCAwMTMwIDMweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C38383]/10" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#2B001B]/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 cta-animate opacity-0">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-20 bg-white" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight pl-6">
                Partner <span className="text-[#FFDDE6]">With Us</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#FFDDE6] my-8 ml-6" />
              <p className="text-xl text-white/90 leading-relaxed pl-6 max-w-lg">
                Join us in our mission to empower women and children through faith-based initiatives. Together, we can create lasting change.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 cta-animate opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Donate",
                  description: "Support our programs with a one-time or monthly donation",
                  action: "Give Now"
                },
                {
                  title: "Volunteer",
                  description: "Share your time and talents to make a difference",
                  action: "Join Us"
                },
                {
                  title: "Pray",
                  description: "Partner with us in prayer for the women and children we serve",
                  action: "Prayer Guide"
                }
              ].map((item, index) => (
                <div 
                  key={item.title} 
                  className="relative group"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Elegant border animation on hover */}
                  <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors duration-300" />
                  <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#FFDDE6] group-hover:w-full transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#FFDDE6] group-hover:w-full transition-all duration-500" />
                  <div className="absolute left-0 bottom-0 w-[1px] h-0 bg-[#FFDDE6] group-hover:h-full transition-all duration-500" />
                  <div className="absolute right-0 top-0 w-[1px] h-0 bg-[#FFDDE6] group-hover:h-full transition-all duration-500" />
                  
                  <div className="p-8 relative z-10">
                    <h3 className="text-xl font-medium text-[#FFDDE6] mb-3">{item.title}</h3>
                    <p className="text-white/80 mb-6 min-h-[60px]">{item.description}</p>
                    <div className="inline-flex items-center text-white border-b border-white/30 pb-1 hover:border-[#FFDDE6] hover:text-[#FFDDE6] transition-colors duration-300 cursor-pointer">
                      <span>{item.action}</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-[#FFDDE6] mb-6">Have questions? We'd love to hear from you.</p>
              <Button 
                className="bg-transparent border border-white text-white hover:bg-white hover:text-[#5B0A42] transition-all duration-300 rounded-none px-8 py-6"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
