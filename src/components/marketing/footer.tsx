import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Final CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 p-12 text-center mb-16 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Yakin Masih Mau Coding Login Manual?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Waktu lo terlalu berharga buat ngurusin boilerplate. Mending fokus
            bikin produk yang laku.
          </p>
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 rounded-full h-12 px-8"
            asChild
          >
            <Link href="/register">Bungkus LaunchPad Sekarang 🚀</Link>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Dibangun dengan ❤️
            di Indonesia.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="https://twitter.com"
              className="hover:text-gray-900 transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
