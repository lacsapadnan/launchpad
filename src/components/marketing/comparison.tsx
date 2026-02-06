import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check, X as XIcon } from "lucide-react";

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Kenapa Gak Pake Boilerplate Bule Aja?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">
          {/* Competitor */}
          <div className="p-8 md:p-10 rounded-3xl border border-gray-100 bg-gray-50/50 text-gray-500 order-2 md:order-1">
            <h3 className="text-xl font-bold mb-8">Boilerplate AS Umum</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <XIcon className="text-red-400 shrink-0 mt-1" size={18} />
                <span>Stripe Doang (Ribet cairin duitnya di Indo)</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-red-400 shrink-0 mt-1" size={18} />
                <span>Vendor Lock-in (Vercel mahal kalau udah scale)</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-red-400 shrink-0 mt-1" size={18} />
                <span>Support Beda Jam (Lo error, mereka tidur)</span>
              </li>
              <li className="flex items-start gap-3">
                <XIcon className="text-red-400 shrink-0 mt-1" size={18} />
                <span>
                  Seringnya cuma Single User (Susah dijual ke Perusahaan)
                </span>
              </li>
            </ul>
          </div>

          {/* LaunchPad */}
          <div className="p-8 md:p-10 rounded-3xl border border-indigo-100 bg-white shadow-xl shadow-indigo-100/50 relative order-1 md:order-2">
            <div className="absolute top-0 right-0 -mt-3 -mr-3">
              <Badge className="bg-indigo-600 text-white border-transparent">
                Direkomendasikan
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              LaunchPad SaaS
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Check className="text-indigo-600 shrink-0 mt-1" size={18} />
                <span className="text-gray-900 font-medium">
                  Lokal Banget: Xendit & Invoice (Cocok buat PT/CV)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-indigo-600 shrink-0 mt-1" size={18} />
                <span className="text-gray-900 font-medium">
                  Hemat Server: Docker ready buat aaPanel/VPS murah
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-indigo-600 shrink-0 mt-1" size={18} />
                <span className="text-gray-900 font-medium">
                  Community: Support Discord bahasa manusia (Indo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-indigo-600 shrink-0 mt-1" size={18} />
                <span className="text-gray-900 font-medium">
                  B2B Ready: Fitur "Teams" udah built-in
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
