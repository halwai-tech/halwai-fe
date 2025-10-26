"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AuthMenu from "./AuthMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { to: "/", label: "Home" },
    { to: "/halwais", label: "Find Halwais" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/assets/halwai-logo.png"
              alt="Halwaiwala.In"
              className="h-12 w-auto transition-transform group-hover:scale-105"
              width={48}
              height={48}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
              {/* Auth Section */}
            <AuthMenu />

            <a
              href="https://wa.me/919811820494"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              WhatsApp Us
            </a>

          
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(link.to) ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://wa.me/919811820494"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              WhatsApp Us
            </a>

            {/* Mobile Auth */}
            <AuthMenu mobile />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
