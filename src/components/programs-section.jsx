import React, { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { animate } from "motion";

const ProgramsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.programs-animate');
          elements.forEach((element, index) => {
            animate(
              element,
              { 
                opacity: [0, 1],
                y: [30, 0] 
              },
              { 
                delay: 0.2 + (index * 0.1),
                duration: 0.8,
                easing: "ease-out"
              }
            );
          });
          observer.disconnect(); // Only animate once
        }
      });
    }, { threshold: 0.1 });
    
    const section = document.querySelector('#programs');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: "Spiritual Empowerment",
      description: "Nurturing faith through Bible studies, prayer groups, and spiritual mentorship programs that help women and children develop a deeper relationship with Christ.",
      letter: "S",
      quote: "Faith is taking the first step even when you don't see the whole staircase.",
      features: ["Personalized mentorship", "Community engagement", "Sustainable impact"],
    },
    {
      title: "Skill Development",
      description: "Providing vocational training, entrepreneurship workshops, and educational support to equip women with the skills needed for economic independence.",
      letter: "D",
      quote: "Give a woman a fish and you feed her for a day; teach her to fish and you feed her for a lifetime.",
      features: ["Vocational training", "Business mentorship", "Financial literacy"],
    },
    {
      title: "Humanitarian Aid",
      description: "Delivering essential services, emergency relief, and community support programs that address immediate needs while fostering long-term resilience.",
      letter: "H",
      quote: "No one has ever become poor by giving.",
      features: ["Emergency relief", "Healthcare access", "Community development"],
    },
  ];

  return (
    <Section id="programs" className="py-24 md:py-32 relative overflow-hidden">
      {/* Refined background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFDDE6]/10" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F7CFE2]/10" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#C38383]/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Elegant header with refined typography */}
        <div className="mb-32 relative programs-animate opacity-0">
          <div className="absolute -left-4 top-0 w-1 h-20 bg-[#5B0A42]" />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#5B0A42] tracking-tight leading-tight">
              Our <span className="text-[#C38383] italic">Programs</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#C38383] mx-auto my-8" />
            <p className="text-lg md:text-xl text-[#2B001B]/80 leading-relaxed max-w-2xl mx-auto">
              Through our three core programs, we create holistic transformation in the lives of women and children, addressing spiritual, economic, and social needs with Christ-centered approaches.
            </p>
          </div>
        </div>

        {/* Magazine-style layout for programs */}
        <div className="grid grid-cols-1 gap-32">
          {programs.map((program, index) => {
            // Alternate layout for even/odd items
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={program.title}
                className="programs-animate opacity-0 relative"
              >
                {/* Decorative elements */}
                <div className={`absolute ${isEven ? '-top-8 -left-8' : '-top-8 -right-8'} w-16 h-16 border border-[#C38383]/30`} />
                <div className={`absolute ${isEven ? '-bottom-8 -right-8' : '-bottom-8 -left-8'} w-16 h-16 border border-[#C38383]/30`} />
                
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Left column with elegant typography instead of icons */}
                  <div className={`lg:col-span-5 relative ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="aspect-[4/5] relative bg-gradient-to-br from-white to-[#FFDDE6]/20 flex flex-col items-center justify-center overflow-hidden">
                      {/* Elegant letter display instead of icon */}
                      <div className="relative z-10">
                        <span className="font-serif text-[120px] font-bold text-[#5B0A42]/10 leading-none">
                          {program.letter}
                        </span>
                      </div>
                      
                      {/* Elegant quote */}
                      <div className="absolute bottom-12 left-12 right-12 z-10">
                        <div className="w-12 h-[1px] bg-[#C38383] mb-4" />
                        <p className="text-sm italic text-[#2B001B]/60 leading-relaxed">
                          "{program.quote}"
                        </p>
                      </div>
                      
                      {/* Elegant frame */}
                      <div className="absolute inset-6 border border-[#5B0A42]/10" />
                      <div className="absolute inset-0 border-l-2 border-t-2 border-[#C38383]/10 m-12" />
                      
                      {/* Program number */}
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 flex items-center justify-center">
                        <span className="text-3xl font-serif font-bold text-[#5B0A42]/20">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right column with content */}
                  <div className="lg:col-span-7">
                    <div className={`relative ${isEven ? 'pl-0 lg:pl-12' : 'pr-0 lg:pr-12'}`}>
                      <div className="w-12 h-[1px] bg-[#C38383] mb-6" />
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#5B0A42] mb-6 leading-tight">
                        {program.title}
                      </h3>
                      
                      <p className="text-lg text-[#2B001B]/80 leading-relaxed mb-10">
                        {program.description}
                      </p>
                      
                      <div className="mt-16 relative">
                        <div className="absolute -left-4 top-0 h-[1px] w-12 bg-[#5B0A42]" />
                        <h4 className="text-sm uppercase tracking-widest text-[#5B0A42] font-medium mb-10 pl-12">
                          Key Initiatives
                        </h4>
                        
                        <div className="grid grid-cols-1 gap-8">
                          {program.features.map((feature, i) => (
                            <div key={i} className="relative flex items-start">
                              <div className="mr-6 flex-shrink-0">
                                <div className="w-10 h-10 border border-[#C38383]/30 flex items-center justify-center">
                                  <span className="font-serif text-sm text-[#5B0A42]">{String.fromCharCode(65 + i)}</span>
                                </div>
                              </div>
                              <div className="flex-grow">
                                <p className="font-medium text-[#2B001B] text-lg">{feature}</p>
                                <div className="h-[1px] w-full bg-[#F7CFE2]/50 mt-4" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Elegant closing element */}
        <div className="mt-32 text-center programs-animate opacity-0">
          <div className="inline-block relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-[#C38383]/30" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border border-[#C38383]/30" />
            <span className="text-sm uppercase tracking-widest text-[#5B0A42] font-medium px-8 py-4 inline-block">
              Transforming Lives Through Faith
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProgramsSection;
