"use client";

import React, { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(".hero-badge", { y: 20, opacity: 0, delay: 0.2 })
        .from(".hero-title", { y: 40, opacity: 0 }, "-=0.7")
        .from(".hero-desc", { y: 20, opacity: 0 }, "-=0.8")
        .from(".hero-btns", { y: 20, opacity: 0 }, "-=0.8")
        .from(".hero-mockup", { y: 100, opacity: 0, scale: 0.95 }, "-=0.6");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="hero-badge">
          <Badge variant="indigo" className="mb-8 font-medium">
            Boilerplate Spesialis Indonesia
          </Badge>
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
          Stop Coding Auth & Payment <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            dari Nol
          </span>
          . <br />
          Fokus Cari Duit Aja.
        </h1>

        <p className="hero-desc text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed font-sans">
          Ngapain buang waktu 200 jam cuma buat setup project? Pake LaunchPad:
          Next.js 15, Xendit, & Docker udah ready to use. Lo tinggal coding
          fitur inti, deploy, kelar.
        </p>

        <div className="hero-btns flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto group rounded-full h-12 px-8 bg-indigo-600 hover:bg-indigo-700"
            asChild
          >
            <Link href="/register">
              Ambil LaunchPad Sekarang
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full h-12 px-8 border-gray-200"
          >
            <PlayCircle className="mr-2 w-4 h-4 text-gray-500" />
            Intip Demo Dulu
          </Button>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="hero-mockup mt-20 max-w-6xl mx-auto px-4 md:px-0">
        <div className="relative rounded-t-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
          {/* Mockup Header */}
          <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <div className="flex-1 text-center">
              <div className="inline-block px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono">
                app.launchpad.id/dashboard
              </div>
            </div>
          </div>

          {/* Mockup Body */}
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-16 md:w-64 border-r border-gray-100 p-4 hidden sm:flex flex-col gap-4 bg-gray-50/30">
              <div className="h-8 w-8 md:w-32 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-px bg-gray-200 my-2"></div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-full bg-gray-100 rounded-md"
                ></div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 bg-white overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="space-y-2">
                  <div className="h-8 w-48 bg-gray-900 rounded-md"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
                </div>
                <div className="h-10 w-32 bg-indigo-600 rounded-md opacity-90 hidden sm:block"></div>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-4 border border-gray-100 rounded-xl shadow-sm bg-white"
                  >
                    <div className="h-4 w-24 bg-gray-100 rounded mb-4"></div>
                    <div className="h-12 w-16 bg-gray-900 rounded mb-2 opacity-80"></div>
                    <div className="h-3 w-full bg-gray-50 rounded"></div>
                  </div>
                ))}
              </div>

              {/* Table Area */}
              <div className="mt-8 border border-gray-100 rounded-xl p-6 h-full shadow-sm">
                <div className="flex justify-between mb-4">
                  <div className="h-6 w-32 bg-gray-200 rounded"></div>
                  <div className="h-6 w-24 bg-gray-100 rounded"></div>
                </div>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-full border-b border-gray-50 flex items-center gap-4"
                  >
                    <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                    <div className="h-3 w-1/3 bg-gray-100 rounded"></div>
                    <div className="ml-auto h-6 w-16 bg-emerald-100 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay Gradient for Fade effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
