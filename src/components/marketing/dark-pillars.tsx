"use client";

import React, { useRef } from "react";
import { Users, CreditCard, Server } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const DarkPillars: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".pillar-title", {
        scrollTrigger: {
          trigger: ".pillar-title",
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".pillar-item", {
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 md:py-32 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="pillar-title mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Fondasi Beton buat Ide <br />
            <span className="text-indigo-400">Liar Lo.</span>
          </h2>
        </div>

        <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Pillar 1 */}
          <div className="pillar-item space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors">
              <Users className="text-indigo-400" size={28} />
            </div>
            <h3 className="text-2xl font-semibold">Multi-Tenant Native</h3>
            <p className="text-gray-400 leading-relaxed font-sans">
              Satu user bisa bikin banyak Tim/Workspace. Datanya gak bakal bocor
              atau nyampur. Arsitektur B2B proper nih, bos.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 font-sans">
              <li className="flex items-center gap-2">
                • Logika perpindahan tim sudah termasuk
              </li>
              <li className="flex items-center gap-2">
                • Sistem undangan sudah siap
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-item space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
              <CreditCard className="text-indigo-400" size={28} />
            </div>
            <h3 className="text-2xl font-semibold">Type-Safe Sampe Akar</h3>
            <p className="text-gray-400 leading-relaxed font-sans">
              Ubah database, UI langsung tau errornya dimana. Tidur nyenyak
              tanpa dikejar bug undefined is not a function.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 font-sans">
              <li className="flex items-center gap-2">
                • Webhook sudah terkonfigurasi
              </li>
              <li className="flex items-center gap-2">
                • Logika pembaruan langganan
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-item space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
              <Server className="text-indigo-400" size={28} />
            </div>
            <h3 className="text-2xl font-semibold">UI Ganteng Instan</h3>
            <p className="text-gray-400 leading-relaxed font-sans">
              Pake Shadcn UI yang udah dimodif ganteng. Dark mode otomatis. User
              lo bakal ngira lo nyewa desainer mahal.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 font-sans">
              <li className="flex items-center gap-2">
                • Dockerfile dioptimalkan
              </li>
              <li className="flex items-center gap-2">
                • Siap deploy ke aaPanel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
