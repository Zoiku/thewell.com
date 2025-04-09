import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { animate } from "motion";

const HeroSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((element, index) => {
      animate(
        element,
        { 
          opacity: [0, 1],
          y: [20, 0] 
        },
        { 
          delay: index * 0.2,
          duration: 0.8,
          easing: "ease-out"
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Refined background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F7CFE2]/30" style={{ clipPath: 'polygon(100% 0, 0% 0, 100% 100%)' }} />
        <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-[#FFDDE6]/20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C38383]/10" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mb-16 lg:mb-0 relative">
            <div className="absolute -left-4 top-0 w-20 h-1 bg-[#5B0A42]" />
            <h1 className="hero-animate text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#5B0A42] leading-tight mt-8 tracking-tight">
              Empowering <span className="text-[#C38383] italic">Lives</span> <br />
              <span className="relative inline-block">
                Through Faith
                <span className="absolute bottom-2 left-0 w-full h-[3px] bg-[#C38383]/30"></span>
              </span>
            </h1>
            
            <p className="hero-animate text-lg md:text-xl text-[#2B001B]/80 max-w-xl mt-8 leading-relaxed">
              The Well Foundation empowers women and children spiritually, economically, and socially, rooted in Christian values.
            </p>
            
            <div className="hero-animate mt-12 flex items-center">
              <Button size="lg" className="shadow-none bg-[#5B0A42] hover:bg-[#5B0A42]/90 px-8 py-6 rounded-none relative overflow-hidden group">
                <span className="relative z-10">Join the Mission</span>
                <span className="absolute inset-0 w-0 bg-[#2B001B] transition-all duration-300 group-hover:w-full"></span>
              </Button>
              <div className="ml-8 text-[#5B0A42] font-medium border-b border-[#5B0A42] pb-1 cursor-pointer hover:text-[#C38383] hover:border-[#C38383] transition-colors duration-300">
                Learn More
              </div>
            </div>
          </div>
          
          <div className="hero-animate w-full lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 border border-[#C38383]" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 border border-[#C38383]" />
            
            <div className="relative aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0 bg-[#F7CFE2] flex items-center justify-center z-10">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-serif text-[#5B0A42] mb-4">Image Placeholder</h3>
                  <p className="text-[#2B001B]/60">
                    A beautiful image of women and children being empowered would appear here
                  </p>
                </div>
              </div>
              
              {/* Elegant frame */}
              <div className="absolute inset-4 border border-[#5B0A42]/20 z-20" />
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(91,10,66,0.1)] z-30" />
              
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FFDDE6] -z-10" />
              <div className="absolute -top-3 -left-3 w-32 h-32 bg-[#C38383]/10 -z-10" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
