"use client";

import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const items: FaqItem[] = [
    {
      question: "Ini bayar tiap bulan?",
      answer: "Kagak. Sekali bayar, pake selamanya sampe bosen.",
    },
    {
      question: "Gue gak jago TypeScript, gimana?",
      answer:
        "Justru ini saatnya belajar pake best practice. Kodenya udah gue bikin se-clean mungkin biar gampang dipelajari.",
    },
    {
      question: "Boleh dipake buat project klien?",
      answer:
        "Boleh banget! Ambil yang lisensi Agency ya biar barokah rezekinya.",
    },
    {
      question: "Kalo Next.js update, bakal error gak?",
      answer:
        "Santuy, gue bakal rajin update repo-nya. Lo tinggal git pull buat dapet update terbaru.",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".faq-header", {
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".faq-item-animate", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="faq"
      className="py-24 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="faq-header text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
          Pertanyaan yang sering diajukan
        </h2>
        <div className="faq-list space-y-4">
          {items.map((item, index) => (
            <div key={index} className="faq-item-animate">
              <FaqAccordion item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqAccordion: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-gray-300 transition-colors">
      <button
        className="w-full flex items-center justify-between p-6 bg-white text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="text-gray-400" />
        ) : (
          <ChevronDown className="text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 bg-white text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-sans">
          {item.answer}
        </div>
      )}
    </div>
  );
};
