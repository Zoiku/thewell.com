import React from "react";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2B001B] text-white py-20 relative overflow-hidden">
      {/* Refined background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBhMSAxIDAgMTEtMi4wMDEtLjAwMUExIDEgMCAwMTMwIDMweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C38383]/30 to-transparent" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4 bg-[#F7CFE2]/10 p-2 rounded-sm">
                <img src="/apple-touch-icon.png" alt="The Well Foundation Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-[#FFDDE6] leading-none">The Well</h3>
                <span className="text-xs text-[#F7CFE2]/70 font-serif">Foundation</span>
              </div>
            </div>
            <p className="text-sm text-[#F7CFE2]/70 max-w-xs leading-relaxed">
              Empowering women and children spiritually, economically, and socially, rooted in Christian values.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 p-2 border border-[#F7CFE2]/10 hover:border-[#F7CFE2]/30">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 p-2 border border-[#F7CFE2]/10 hover:border-[#F7CFE2]/30">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 p-2 border border-[#F7CFE2]/10 hover:border-[#F7CFE2]/30">
                <Twitter size={16} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#FFDDE6] mb-6 font-medium">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Home</a></li>
              <li><a href="#about" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">About Us</a></li>
              <li><a href="#programs" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Our Programs</a></li>
              <li><a href="#impact" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Our Impact</a></li>
              <li><a href="#contact" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#FFDDE6] mb-6 font-medium">Get Involved</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Donate</a></li>
              <li><a href="#" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Volunteer</a></li>
              <li><a href="#" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Partner With Us</a></li>
              <li><a href="#" className="text-sm text-[#F7CFE2]/70 hover:text-white transition-colors duration-300 inline-block border-b border-transparent hover:border-[#F7CFE2]/30 pb-1">Prayer Support</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#FFDDE6] mb-6 font-medium">Scripture</h4>
            <div className="relative pl-8 border-l border-[#C38383]/30">
              <div className="absolute top-0 left-0 text-3xl font-serif text-[#C38383]/50 leading-none">"</div>
              <p className="text-sm italic text-[#F7CFE2]/70 leading-relaxed">
                "But whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life."
              </p>
              <p className="text-xs mt-3 text-[#F7CFE2]/50 font-medium">John 4:14</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#F7CFE2]/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-[#F7CFE2]/50">
            &copy; {currentYear} The Well Foundation. All rights reserved.
          </p>
          <p className="text-xs text-[#F7CFE2]/50 flex items-center mt-4 md:mt-0">
            Made with <Heart size={12} className="mx-1 text-[#C38383]" /> for God's glory
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
