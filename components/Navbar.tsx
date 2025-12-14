import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-midnight/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-electric-orange p-1.5 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
              SKOOL <span className="text-electric-orange">SWAG</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans font-semibold text-white hover:text-electric-orange px-3 py-2 rounded-md text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-electric-orange hover:bg-electric-orange-hover text-white px-5 py-2 rounded-full font-heading font-bold text-sm transition-colors shadow-lg shadow-orange-500/20">
                Mua Ngay
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-midnight-light inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Mở menu chính</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-midnight border-t border-white/10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-electric-orange hover:bg-midnight-light block px-3 py-2 rounded-md text-base font-bold font-heading"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
                 <button className="w-full bg-electric-orange hover:bg-electric-orange-hover text-white px-5 py-3 rounded-md font-heading font-bold text-base transition-colors">
                Mua Ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;