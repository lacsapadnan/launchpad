"use client";

import React, { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Database, Zap, Lock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FeaturesGrid: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.from(".features-header > *", {
        scrollTrigger: {
          trigger: ".features-header",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="features"
      className="py-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="features-header text-center mb-16">
          <Badge variant="indigo" className="mb-6 font-medium">
            BORING TASKS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Semua fitur "ribet" udah gue beresin.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-sans">
            Jujur deh, lo pasti males kan setting backend Xendit atau ngurusin
            Role-Based Access yang bikin pusing?
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Main Large Card (Spans 2 cols) */}
          <div className="feature-card md:col-span-2 rounded-3xl p-10 bg-gray-50 border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10 max-w-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <Zap size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Dibangun untuk Realitas Lokal
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-sans">
                Kebanyakan boilerplate mengasumsikan Anda menggunakan gateway
                pembayaran luar negeri. Kami tidak. Kami telah mengonfigurasi{" "}
                <strong>Xendit</strong> untuk pembayaran (QRIS, VA, E-Wallet)
                dan mengoptimalkan build untuk deployment{" "}
                <strong>VPS/aaPanel</strong> agar biaya Anda tetap rendah.
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Feature Card 1 (Spans 1 col) - Auth & Security */}
          <div className="feature-card rounded-3xl p-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden h-full group">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-5 text-gray-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                Login & Team Management
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
                Google Auth? Magic Link? Invite member tim? Udah ada semua. Gak
                perlu pusing mikirin logic user session.
              </p>

              {/* Visual Decoration: Login UI */}
              <div className="mt-auto w-full bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm select-none">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-500">
                    Masuk
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-12 bg-gray-200 rounded-sm"></div>
                  <div className="h-8 w-full bg-white border border-gray-200 rounded-lg flex items-center px-3">
                    <div className="h-1.5 w-20 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="h-8 w-full bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-[10px] text-white font-medium">
                      Lanjutkan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 (Spans 1 col) - Drizzle */}
          <div className="feature-card rounded-3xl p-8 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col relative overflow-hidden h-full group">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-5 text-gray-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                <Database size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                Xendit Ready (Cuan Stream)
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
                Langsung terima duit via QRIS, VA, atau Kartu Kredit. Mode
                langganan (Recurring) udah settingan pabrik.
              </p>

              {/* Visual Decoration: Code Snippet */}
              <div className="mt-auto w-full bg-[#1e1e1e] rounded-xl p-4 shadow-sm select-none border border-gray-800">
                <div className="flex gap-1.5 mb-3 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-1.5 font-mono text-[8px]">
                  <div className="flex gap-2">
                    <span className="text-purple-400">export const</span>
                    <span className="text-blue-400">users</span>
                    <span className="text-white">= pgTable('users', {`{`}</span>
                  </div>
                  <div className="flex gap-2 pl-2">
                    <span className="text-blue-300">id</span>
                    <span className="text-emerald-400">uuid</span>
                    <span className="text-gray-500">('id').primaryKey()</span>
                  </div>
                  <div className="flex gap-2 pl-2">
                    <span className="text-blue-300">email</span>
                    <span className="text-emerald-400">text</span>
                    <span className="text-gray-500">('email').unique()</span>
                  </div>
                  <div className="text-white">{"}"})</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 3 - RBAC (Now Spans 2 cols) */}
          <div className="feature-card md:col-span-2 rounded-3xl p-8 md:p-10 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8 items-center overflow-hidden">
            <div className="flex-1">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-5 text-gray-700">
                <Lock size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                Stack "Dewa" Kekinian
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Next.js 15 App Router, Drizzle, Supabase, Tailwind. Semuanya
                Type-safe. Koding rasa "seniman", bukan kuli.
              </p>
            </div>

            {/* Visual Representation for RBAC */}
            <div className="w-full md:w-1/2 bg-gray-50 rounded-xl border border-gray-100 p-5 select-none transform md:translate-x-4 shadow-inner">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-xs flex items-center justify-center text-indigo-600 font-bold border border-indigo-200">
                      AB
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-gray-800">
                        Ahmad B.
                      </span>
                      <span className="text-[10px] text-gray-400">
                        ahmad@agency.com
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100 tracking-wide">
                    PEMILIK
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm opacity-80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-xs flex items-center justify-center text-emerald-600 font-bold border border-emerald-200">
                      SR
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-gray-800">
                        Siti R.
                      </span>
                      <span className="text-[10px] text-gray-400">
                        siti@agency.com
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 tracking-wide">
                    ADMIN
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-xs flex items-center justify-center text-gray-600 font-bold border border-gray-200">
                      BD
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-gray-800">
                        Budi D.
                      </span>
                      <span className="text-[10px] text-gray-400">
                        budi@agency.com
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200 tracking-wide">
                    ANGGOTA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
