"use client";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const mainLinks = [
  { href: "/", label: "Home" },
  // { href: "/news", label: "News" },
  { href: "/informed", label: "Be Informed" },
  { href: "/mrv-system", label: "MRV System" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/blockchain", label: "Blockchain" },
];

const supportLinks = {
  trigger: "Support",
  items: [
    { href: "/contact", label: "Contact us" },
    { href: "/faq", label: "FAQ" },
  ],
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-14 lg:h-0" />
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-16 px-4 border-b shadow-md lg:px-6 sm:h-20 bg-gradient-to-r from-forest-green via-dark-green to-forest-green border-light-green/30">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 sm:gap-4 group"
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center overflow-hidden transition-all duration-300 w-14 h-14 sm:w-16 sm:h-16"
              >
                <Image
                  src="/images/digisakaweb.svg"
                  alt="Partner Logo 1"
                  width={120}
                  height={120}
                  className="object-contain w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] scale-110 brightness-0 invert "
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center overflow-hidden transition-all duration-300 w-14 h-14 sm:w-16 sm:h-16"
              >
                <Image
                  src="/images/carbon-credit-mrv.svg"
                  alt="Partner Logo 2"
                  width={72}
                  height={72}
                  className="object-contain w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] scale-105 brightness-0 invert "
                />
              </motion.div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="" className="bg-gradient-to-r from-golden-yellow via-yellow-400 to-golden-yellow text-dark-green">
                      Beta Version
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Beta Version: We’re still improving! Please report any issues or feedback.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden h-full lg:flex">
            <div className="flex items-center gap-1">
              {mainLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 group rounded-xl hover:bg-white/10 ${isActive ? "text-golden-yellow" : "text-white"
                      } hover:text-golden-yellow`}
                  >
                    {link.label}
                    <span
                      className={`absolute w-0 h-1 transition-all duration-300 transform -translate-x-1/2 rounded-full -bottom-1 left-1/2 bg-gradient-to-r from-golden-yellow via-yellow-400 to-yellow-500 group-hover:w-3/4 ${isActive ? "w-3/4" : ""
                        }`}
                    ></span>
                  </Link>
                );
              })}

              {[supportLinks].map((dropdown, idx) => (
                <DropdownMenu key={idx}>
                  <DropdownMenuTrigger
                    className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl hover:bg-white/10 focus:outline-none ${dropdown.items.some((item) => pathname === item.href)
                      ? "text-golden-yellow"
                      : "text-white"
                      } hover:text-golden-yellow`}
                  >
                    <span className="flex items-center gap-1">
                      {dropdown.trigger}
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="min-w-[160px] bg-white border-light-green/30 shadow-lg rounded-xl p-1"
                  >
                    {dropdown.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <DropdownMenuItem
                          key={item.href}
                          className="focus:bg-transparent"
                        >
                          <Link
                            href={item.href}
                            className={`w-full px-3 py-2 text-sm font-medium transition-colors rounded-lg ${isActive
                              ? "text-forest-green bg-light-green/20 font-bold"
                              : "text-dark-green hover:text-forest-green hover:bg-light-green/10"
                              }`}
                          >
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 text-white transition-all duration-300 shadow-lg lg:hidden rounded-xl bg-white/10 hover:bg-white/20 hover:shadow-xl"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed left-0 right-0 border-b shadow-lg top-[64px] sm:top-[80px] bg-white border-light-green/30 lg:hidden max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col p-4">
              {/* Main Links */}
              <div className="mb-4 space-y-2">
                {mainLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 text-sm font-semibold transition-colors rounded-xl ${isActive
                        ? "text-golden-yellow bg-light-green/10"
                        : "text-dark-green"
                        } hover:text-golden-yellow hover:bg-light-green/10`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Support Links */}
              <div className="mb-4">
                <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase">
                  {supportLinks.trigger}
                </div>
                <div className="space-y-2">
                  {supportLinks.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-6 py-3 text-sm font-semibold transition-colors rounded-xl ${isActive
                          ? "text-golden-yellow bg-light-green/10"
                          : "text-dark-green"
                          } hover:text-golden-yellow hover:bg-light-green/10`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
