import React from "react";
import { GitBranch, Sliders, UploadCloud, Rocket } from "lucide-react";

export const Steps: React.FC = () => {
  const steps = [
    {
      icon: <GitBranch size={24} />,
      title: "Sedot Code-nya",
      desc: "Clone repo, npm install. Jangan lupa kopi.",
    },
    {
      icon: <Sliders size={24} />,
      title: "Isi Rahasia",
      desc: "Masukin API Key Xendit & Supabase di .env.",
    },
    {
      icon: <UploadCloud size={24} />,
      title: "Magic Happens",
      desc: "Koding ide brilian lo di atas fondasi yang udah kokoh.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Cuan",
      desc: "Deploy ke VPS, sebar link, tunggu notifikasi payment masuk.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Dari Download sampe Deploy, Cuma 4 Langkah.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-200"></div>
              )}
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-indigo-600 mb-6 z-10">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
