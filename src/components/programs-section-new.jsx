import React, { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Heart, BookOpen, Briefcase } from "lucide-react";
import * as motion from "motion/react-client";

const ProgramsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = document.querySelectorAll('.programs-animate');
          elements.forEach((element, index) => {
            motion.animate(
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
      icon: <BookOpen className="h-10 w-10 text-[#5B0A42]" />,
      features: ["Personalized mentorship", "Community engagement", "Sustainable impact"],
    },
    {
      title: "Skill Development",
      description: "Providing vocational training, entrepreneurship workshops, and educational support to equip women with the skills needed for economic independence.",
      icon: <Briefcase className="h-10 w-10 text-[#5B0A42]" />,
      features: ["Vocational training", "Business mentorship", "Financial literacy"],
    },
    {
      title: "Humanitarian Aid",
      description: "Delivering essential services, emergency relief, and community support programs that address immediate needs while fostering long-term resilience.",
      icon: <Heart className="h-10 w-10 text-[#5B0A42]" />,
      features: ["Emergency relief", "Healthcare access", "Community development"],
    },
  ];

  return (
    <Section id="programs" className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Refined background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBhMSAxIDAgMTEtMi4wMDEtLjAwMUExIDEgMCAwMTMwIDMweiIgZmlsbD0icmdiYSgxOTUsIDEzMSwgMTMxLCAwLjEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-20">
          <div className="md:w-1/3 programs-animate opacity-0 relative mb-12 md:mb-0">
            <div className="absolute -left-4 top-0 w-1 h-20 bg-[#5B0A42]" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5B0A42] tracking-tight leading-tight pl-6">
              Our <span className="text-[#C38383]">Programs</span>
            </h2>
          </div>
          
          <div className="md:w-1/2 programs-animate opacity-0">
            <p className="text-lg text-[#2B001B]/80 leading-relaxed">
              Through our three core programs, we create holistic transformation in the lives of women and children, addressing spiritual, economic, and social needs with Christ-centered approaches.
            </p>
          </div>
        </div>

        <div className="mt-20">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className={`programs-animate opacity-0 relative flex flex-col md:flex-row items-start gap-12 py-16 ${
                index !== programs.length - 1 ? 'border-b border-[#F7CFE2]' : ''
              }`}
            >
              <div className="md:w-1/3 relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 border border-[#C38383]/30" />
                <div className="p-4 bg-[#FFDDE6]/20 inline-flex">
                  {program.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#5B0A42] mt-6 leading-tight">
                  {program.title}
                </h3>
              </div>
              
              <div className="md:w-2/3 space-y-6">
                <p className="text-lg text-[#2B001B]/80 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="pl-6 border-l border-[#C38383]">
                  <h4 className="text-sm uppercase tracking-widest text-[#5B0A42] font-medium mb-4">
                    Key Initiatives
                  </h4>
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[#2B001B]/80">
                        <div className="w-1 h-1 bg-[#C38383] mr-3"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProgramsSection;
