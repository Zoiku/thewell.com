import React, { useEffect } from "react";
import { Section } from "@/components/ui/section";
import * as motion from "motion/react-client";

const ImpactSection = () => {
  useEffect(() => {
    const impactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.impact-animate');
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
          impactObserver.disconnect(); // Only animate once
        }
      });
    }, { threshold: 0.1 });
    
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const value = parseInt(target.getAttribute("data-value"), 10);
          
          let startValue = 0;
          const duration = 2000;
          const startTime = performance.now();
          
          const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration;
              const easedProgress = progress * (2 - progress); // easeOutQuad
              const currentValue = Math.floor(easedProgress * value);
              target.textContent = currentValue.toLocaleString();
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = value.toLocaleString();
            }
          };
          
          requestAnimationFrame(updateCounter);
        }
      });
    }, { threshold: 0.1 });
    
    const section = document.querySelector('#impact');
    if (section) impactObserver.observe(section);
    
    const statElements = document.querySelectorAll('.stat-count');
    statElements.forEach(element => statsObserver.observe(element));
    
    return () => {
      impactObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const stats = [
    { value: 5000, label: "Women Empowered" },
    { value: 120, label: "Communities Served" },
    { value: 25000, label: "Lives Impacted" },
    { value: 85, label: "Success Rate (%)" },
  ];

  const testimonials = [
    {
      quote: "The Well Foundation changed my life. Through their skill development program, I was able to start my own business and provide for my children.",
      author: "Sarah M.",
      role: "Program Participant",
      initial: "S"
    },
    {
      quote: "The spiritual mentorship I received helped me find purpose and direction during the most challenging time of my life.",
      author: "Rebecca T.",
      role: "Community Member",
      initial: "R"
    }
  ];

  return (
    <Section id="impact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Refined background elements */}
      <div className="absolute inset-0 bg-[#F7CFE2]/10" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FFDDE6]/30" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#C38383]/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 impact-animate opacity-0">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-20 bg-[#5B0A42]" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5B0A42] tracking-tight leading-tight pl-6">
                Our <span className="text-[#C38383]">Impact</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#C38383] my-8 ml-6" />
              <p className="text-lg text-[#2B001B]/80 leading-relaxed pl-6">
                Through faith and dedication, we've created lasting change in communities around the world, transforming lives one woman, one child at a time.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 impact-animate opacity-0">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="relative"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm -z-10" />
                  <div className="p-8 border-l-2 border-[#5B0A42]">
                    <p className="text-4xl md:text-5xl font-serif font-bold text-[#5B0A42] mb-2 stat-count" data-value={stat.value}>
                      0
                    </p>
                    <p className="text-sm uppercase tracking-widest text-[#2B001B]/60 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-32 impact-animate opacity-0">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-[#5B0A42] font-medium">Testimonials</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#5B0A42] mt-2">Stories of Transformation</h3>
            <div className="w-16 h-[1px] bg-[#C38383] mx-auto mt-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="relative"
              >
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 border border-[#C38383]/30 -z-10" />
                <div className="absolute -bottom-8 -right-8 w-16 h-16 border border-[#C38383]/30 -z-10" />
                
                <div className="relative bg-white/70 backdrop-blur-sm p-10">
                  <div className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center bg-[#5B0A42] text-white">
                    <span className="text-2xl font-serif">"</span>
                  </div>
                  
                  <p className="text-lg italic text-[#2B001B] leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#F7CFE2] text-[#5B0A42] font-serif font-bold text-xl">
                      {testimonial.initial}
                    </div>
                    <div className="ml-4 border-l border-[#C38383]/30 pl-4">
                      <p className="font-medium text-[#5B0A42]">{testimonial.author}</p>
                      <p className="text-sm text-[#2B001B]/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ImpactSection;
