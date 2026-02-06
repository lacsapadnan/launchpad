"use client";

import React, { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Pricing: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-grid",
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
      id="pricing"
      className="py-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="indigo" className="mb-6 font-medium">
            HARGA
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Investasi Sekali, Cuan Berkali-kali.
          </h2>
          <p className="mt-4 text-gray-500 font-sans">
            Gak ada biaya bulanan. Kode jadi hak milik lo 100%. Balik modal cuma
            dengan 1 klien.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Solo Tier */}
          <div className="pricing-card rounded-3xl p-8 border border-gray-200 bg-white hover:border-gray-300 transition-colors">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900">Solo Fighter</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  Rp 999.000
                </span>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Harga Temen
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-sans">
                Solo founder yang mau gas satu produk.
              </p>
            </div>
            <ul className="space-y-4 mb-8 font-sans">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Full Source Code
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Lifetime Update
                (Serius)
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Dokumentasi
                Lengkap
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Grup Discord
                Eksklusif
              </li>
            </ul>
            <Button variant="outline" className="w-full rounded-xl" asChild>
              <Link href="/register">Ambil Solo Fighter</Link>
            </Button>
          </div>

          {/* Agency Tier */}
          <div className="pricing-card rounded-3xl p-8 border border-indigo-100 bg-indigo-50/30 relative">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                NILAI TERBAIK
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900">
                Agency / Sultan
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  Rp 2.499.000
                </span>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Buat Cari Proyekan
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-sans">
                Software house yang garap banyak klien.
              </p>
            </div>
            <ul className="space-y-4 mb-8 font-sans">
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Semua yang di
                Solo
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Unlimited
                License (Pake buat 100 klien juga bebas)
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Prioritas
                Support (Japri Admin)
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-indigo-600" /> Konsultasi
                Deploy 30 Menit
              </li>
            </ul>
            <Button
              className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl"
              asChild
            >
              <Link href="/register">Beli Agency / Sultan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
