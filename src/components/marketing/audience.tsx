import React from "react";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Audience: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="indigo" className="mb-6 font-medium">
            Cek Audiens
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Ini Barang Buat Siapa Sih?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Kami membangun ini untuk jenis developer tertentu. Mari hemat waktu
            Anda jika ini tidak cocok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For You - High Conversion Card */}
          <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-100 shadow-xl shadow-indigo-100/20 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Lo Wajib Pake Kalo...
              </h3>
              <p className="text-indigo-600 font-medium mb-8">
                Pilih LaunchPad jika Anda adalah:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                    <Check className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Indie Hacker
                    </h4>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Mau validasi ide SaaS minggu ini juga.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                    <Check className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Freelancer/Agency
                    </h4>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Ada klien minta web app "kemarin", budget lumayan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                    <Check className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Founder Teknis
                    </h4>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Males ngulang setup login/register di tiap project baru.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Not For You - Muted Card */}
          <div className="rounded-3xl p-8 md:p-10 bg-gray-50 border border-gray-200 opacity-90">
            <h3 className="text-2xl font-bold text-gray-500 mb-2">
              Tidak cocok untuk...
            </h3>
            <p className="text-gray-400 font-medium mb-8">
              Pelajar & Korporat Besar
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 opacity-75">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <X className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-600 text-lg">
                    Cuma Mau Bikin Landing Page
                  </h4>
                  <p className="text-gray-500 leading-relaxed mt-1">
                    Kejauhan bos, pake WordPress aja.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-75">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <X className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-600 text-lg">
                    Baru Belajar "Hello World"
                  </h4>
                  <p className="text-gray-500 leading-relaxed mt-1">
                    Ini advanced stack, ntar lo pusing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-75">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <X className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-600 text-lg">
                    Mau Toko Online Biasa
                  </h4>
                  <p className="text-gray-500 leading-relaxed mt-1">
                    Pake Shopify/Tokped beres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
