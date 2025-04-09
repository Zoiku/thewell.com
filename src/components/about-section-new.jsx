import React, { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { animate } from "motion";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = document.querySelectorAll(".about-animate");
            elements.forEach((element) => {
              animate(
                element,
                {
                  opacity: [0, 1],
                  y: [30, 0],
                },
                {
                  duration: 0.8,
                  easing: "ease-out",
                }
              );
            });
            observer.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Refined decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-[#FFDDE6]/20"
        style={{ clipPath: "polygon(100% 0, 0% 0, 100% 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/4 h-full bg-[#F7CFE2]/10"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
      />
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
                At The Well Foundation, we envision a world where every woman
                and child is empowered spiritually, economically, and socially
                to thrive in their communities. Rooted in Christian values, we
                strive to uplift the less privileged through skill development,
                humanitarian aid, and the transformative message of the Gospel.{" "}
              </p>
            </div>
          </div>

          {/* Right column with mission and vision details */}
          <div className="lg:col-span-7 about-animate opacity-0">
            <div className="grid grid-cols-1 gap-12">
              <div className="relative pl-8 border-l border-[#5B0A42]/20">
                <span className="absolute -left-1 top-0 w-2 h-2 bg-[#5B0A42]" />
                <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">
                  Our Mission
                </h3>
                <p className="text-[#2B001B]/80 leading-relaxed">
                  To provide spiritual nourishment, economic opportunities, and
                  social support to women and children, empowering them to
                  transform their lives and communities through Christ's love.
                </p>
              </div>

              <div className="relative pl-8 border-l border-[#5B0A42]/20">
                <span className="absolute -left-1 top-0 w-2 h-2 bg-[#5B0A42]" />
                <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">
                  Our Vision
                </h3>
                <p className="text-[#2B001B]/80 leading-relaxed">
                  A world where every woman and child experiences the living
                  water of Christ, with access to resources, opportunities, and
                  communities that nurture their spiritual, economic, and social
                  well-being.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Goals Section */}
        <div className="mt-24 md:mt-32 about-animate opacity-0 relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 left-0 w-64 h-64 bg-[#F7CFE2]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-16 right-0 w-48 h-48 bg-[#C38383]/5 rounded-full blur-2xl -z-10" />
          
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C38383]/20 to-transparent -z-10" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5B0A42] tracking-tight leading-tight inline-block relative px-8 bg-[#FFDDE6]/10 backdrop-blur-sm">
              Our <span className="text-[#C38383] italic">Goals</span>
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Goal 1 - Feature card */}
              <div className="md:col-span-3 bg-white/40 backdrop-blur-sm relative group hover:shadow-sm transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                  <div className="md:col-span-4 bg-[#F7CFE2]/20 p-8 flex flex-col justify-between relative">
                    <div>
                      <div className="w-12 h-12 flex items-center justify-center bg-white/40 mb-6">
                        <span className="font-serif font-bold text-2xl text-[#5B0A42]">01</span>
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-[#5B0A42]">Empower Women & Children</h3>
                    </div>
                    <div className="w-16 h-[1px] bg-[#C38383] mt-auto" />
                  </div>
                  <div className="md:col-span-8 p-8 flex items-center">
                    <p className="text-[#2B001B]/80 leading-relaxed">
                      Provide vocational training, education, and mentorship programs to equip women and youth with skills for self-sufficiency.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Goal 2 */}
              <div className="md:col-span-2 bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="h-full flex flex-col">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30 mb-6">
                    <span className="font-serif font-bold text-[#5B0A42]">02</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Humanitarian Support</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    Distribute essential supplies such as food, clothing, books, and other necessities to underserved communities.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
              
              {/* Goal 3 */}
              <div className="md:col-span-2 bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="h-full flex flex-col">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30 mb-6">
                    <span className="font-serif font-bold text-[#5B0A42]">03</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Spiritual Nourishment</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    Share the love of Christ through outreach programs, Bible studies, and community evangelism.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
              
              {/* Goal 4-5 - Feature card */}
              <div className="md:col-span-3 bg-white/40 backdrop-blur-sm relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="grid grid-cols-1 md:grid-cols-2 h-full divide-x divide-[#C38383]/10">
                  <div className="p-8 flex flex-col h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30 mb-6">
                      <span className="font-serif font-bold text-[#5B0A42]">04</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Sustainable Community Impact</h3>
                    <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                      Foster long-term development by partnering with local leaders to address poverty, illiteracy, and gender inequality.
                    </p>
                    <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                  </div>
                  <div className="p-8 flex flex-col h-full">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30 mb-6">
                      <span className="font-serif font-bold text-[#5B0A42]">05</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Advocacy & Awareness</h3>
                    <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                      Champion the rights and dignity of women and children through advocacy campaigns and partnerships with like-minded organizations.
                    </p>
                    <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values Section */}
        <div className="mt-24 md:mt-32 about-animate opacity-0 relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 right-0 w-64 h-64 bg-[#F7CFE2]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-16 left-0 w-48 h-48 bg-[#C38383]/5 rounded-full blur-2xl -z-10" />
          
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C38383]/20 to-transparent -z-10" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5B0A42] tracking-tight leading-tight inline-block relative px-8 bg-[#FFDDE6]/10 backdrop-blur-sm">
              Our Core <span className="text-[#C38383] italic">Values</span>
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Faith-Centered Service */}
              <div className="bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30">
                  <span className="font-serif font-bold text-[#5B0A42]">01</span>
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Faith-Centered Service</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    We are rooted in the love of Christ, guiding all our actions with prayer, biblical principles, and a heart for serving others.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
              
              {/* Compassion */}
              <div className="bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30">
                  <span className="font-serif font-bold text-[#5B0A42]">02</span>
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Compassion</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    We treat every individual with dignity, empathy, and kindness, recognizing the inherent worth of all women and children.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
              
              {/* Empowerment */}
              <div className="bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30">
                  <span className="font-serif font-bold text-[#5B0A42]">03</span>
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Empowerment</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    We believe in equipping women and youth with skills, education, and resources to foster independence and self-sufficiency.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
              
              {/* Integrity */}
              <div className="bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30">
                  <span className="font-serif font-bold text-[#5B0A42]">04</span>
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Integrity</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    We operate with honesty, transparency, and accountability in all our programs, partnerships, and stewardship of resources.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
              
              {/* Community & Collaboration */}
              <div className="bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30">
                  <span className="font-serif font-bold text-[#5B0A42]">05</span>
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Community & Collaboration</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    We work alongside local communities, churches, and organizations to create sustainable, collective impact.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
              
              {/* Justice & Advocacy */}
              <div className="bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30">
                  <span className="font-serif font-bold text-[#5B0A42]">06</span>
                </div>
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Justice & Advocacy</h3>
                  <p className="text-[#2B001B]/80 leading-relaxed flex-grow">
                    We stand against inequality, advocating for the rights and well-being of marginalized women and children.
                  </p>
                  <div className="w-16 h-[1px] bg-[#C38383] mt-6" />
                </div>
              </div>
            </div>
            
            {/* Hope & Transformation - Special feature card */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-white/40 backdrop-blur-sm p-8 relative group hover:shadow-sm transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-full border border-[#C38383]/10 scale-95 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-[#F7CFE2]/30">
                  <span className="font-serif font-bold text-[#5B0A42]">07</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 relative">
                    <h3 className="text-2xl font-serif font-semibold text-[#5B0A42] mb-4">Hope & Transformation</h3>
                    <div className="w-16 h-[1px] bg-[#C38383] mb-6" />
                  </div>
                  <div className="md:col-span-8 relative">
                    <p className="text-[#2B001B]/80 leading-relaxed">
                      We believe in the power of the Gospel and holistic support to bring lasting change in lives and communities.
                    </p>
                  </div>
                </div>
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
              <span className="text-6xl font-serif text-[#5B0A42] leading-none">
                "
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-[#2B001B] leading-relaxed text-center max-w-3xl mx-auto">
              A generous person will prosper; whoever refreshes others will be refreshed.
            </p>
            <div className="mt-8 text-center">
              <div className="w-12 h-[1px] bg-[#C38383] mx-auto mb-4" />
              <cite className="text-sm uppercase tracking-widest text-[#5B0A42] font-medium">Proverbs 11:25</cite>
            </div>
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
