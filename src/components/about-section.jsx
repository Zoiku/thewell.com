import React, { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { animate } from "motion";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.about-animate');
          elements.forEach(element => {
            animate(
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
    
    const section = document.querySelector('#about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Refined decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFDDE6]/20" style={{ clipPath: 'polygon(100% 0, 0% 0, 100% 100%)' }} />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[#F7CFE2]/10" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
      <div className="absolute top-1/3 left-0 w-16 h-64 bg-[#5B0A42]/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left column with mission statement */}
          <div className="lg:col-span-5 about-animate opacity-0 relative">
            <div className="absolute -left-4 top-0 w-1 h-32 bg-[#5B0A42]" />
            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5B0A42] tracking-tight leading-tight">
                Our Mission <span className="text-[#C38383]">&</span> Vision
              </h2>
              <div className="w-16 h-[1px] bg-[#C38383] my-8" />
              <p className="text-lg text-[#2B001B]/80 leading-relaxed">
                At The Well Foundation, we believe in creating sustainable change through faith-based initiatives that empower women and children to reach their full potential.
              </p>
            </div>
          </div>
          
          {/* Right column with mission and vision details */}
          <div className="lg:col-span-7 about-animate opacity-0">
            <div className="grid grid-cols-1 gap-12">
              <div className="relative pl-8 border-l border-[#5B0A42]/20">
                <span className="absolute -left-1 top-0 w-2 h-2 bg-[#5B0A42]" />
                <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Our Mission</h3>
                <p className="text-[#2B001B]/80 leading-relaxed">
                  To provide spiritual nourishment, economic opportunities, and social support to women and children, empowering them to transform their lives and communities through Christ's love.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-[#5B0A42]/20">
                <span className="absolute -left-1 top-0 w-2 h-2 bg-[#5B0A42]" />
                <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Our Vision</h3>
                <p className="text-[#2B001B]/80 leading-relaxed">
                  A world where every woman and child experiences the living water of Christ, with access to resources, opportunities, and communities that nurture their spiritual, economic, and social well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scripture quote with refined styling */}
        <div className="mt-24 md:mt-32 about-animate opacity-0 relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-24 h-24 border border-[#C38383]/30 -z-10" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border border-[#C38383]/30 -z-10" />
          
          <blockquote className="relative px-12 py-16 bg-white/50 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center">
              <span className="text-6xl font-serif text-[#5B0A42] leading-none">"</span>
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-[#2B001B] leading-relaxed text-center max-w-3xl mx-auto">
              Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.
            </p>
            <div className="mt-8 text-center">
              <div className="w-12 h-[1px] bg-[#C38383] mx-auto mb-4" />
              <cite className="text-sm uppercase tracking-widest text-[#5B0A42] font-medium">
                Matthew 11:28-29
              </cite>
            </div>
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
