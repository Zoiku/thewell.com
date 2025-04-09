import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-3 border-b border-[#F7CFE2]/30"
          : "bg-transparent py-6"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="relative group flex items-center"
          >
            <div className="w-10 h-10 mr-3">
              <img src="/apple-touch-icon.png" alt="The Well Foundation Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-[#5B0A42] tracking-wide leading-none">
                The Well
              </span>
              <span className="text-xs text-[#5B0A42]/70 font-serif">Foundation</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <li key={link.name} className="relative mx-5">
                  <a
                    href={link.href}
                    className="text-[#2B001B] hover:text-[#5B0A42] transition-colors duration-300 font-medium py-2 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#5B0A42] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-10 pl-10 border-l border-[#C38383]/20">
              <Button 
                size="sm" 
                className="bg-transparent text-[#5B0A42] border border-[#5B0A42] hover:bg-[#5B0A42] hover:text-white transition-all duration-300 rounded-none px-6"
              >
                Join the Mission
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-[#5B0A42] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-md z-40 border-b border-[#F7CFE2]/30"
        >
          <Container className="py-12">
            <div className="w-12 h-[1px] bg-[#5B0A42] mb-8"></div>
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={link.name} className="py-4 border-b border-[#F7CFE2]/20">
                  <a
                    href={link.href}
                    className="text-[#2B001B] hover:text-[#5B0A42] text-xl font-serif transition-colors block"
                    onClick={() => setIsOpen(false)}

                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-8">
                <Button 
                  className="border border-[#5B0A42] bg-transparent text-[#5B0A42] hover:bg-[#5B0A42] hover:text-white transition-all duration-300 rounded-none w-full py-6 mt-4" 
                  onClick={() => setIsOpen(false)}

                >
                  Join the Mission
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
