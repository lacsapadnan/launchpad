"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Rocket size={18} fill="currentColor" />
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            scroll={false}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="#how-it-works"
            scroll={false}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cara Kerja
          </Link>
          <Link
            href="#pricing"
            scroll={false}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Harga
          </Link>
          <Link
            href="#faq"
            scroll={false}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Tanya Jawab
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Masuk</Link>
          </Button>
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700"
            asChild
          >
            <Link href="/register">Bungkus LaunchPad</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden animate-in slide-in-from-top-4 duration-200">
          <Link
            href="#features"
            scroll={false}
            className="text-base font-medium text-gray-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fitur
          </Link>
          <Link
            href="#how-it-works"
            scroll={false}
            className="text-base font-medium text-gray-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cara Kerja
          </Link>
          <Link
            href="#pricing"
            scroll={false}
            className="text-base font-medium text-gray-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Harga
          </Link>
          <hr className="border-gray-100" />
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
            <Link href="/register">Bungkus LaunchPad Sekarang 🚀</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};
