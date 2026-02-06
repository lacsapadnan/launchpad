import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b backdrop-blur-md bg-background/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center space-x-2" href="/">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold font-mono">L</span>
          </div>
          <span className="font-bold text-xl tracking-tight">{siteConfig.name}</span>
        </Link>
        <nav className="ml-auto flex gap-6 items-center">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/blog">
            Blog
          </Link>
          <div className="h-4 w-px bg-border mx-2" />
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/register">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-48 relative overflow-hidden bg-dot-black/[0.1] dark:bg-dot-white/[0.1]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Built for Indonesian B2B Founders
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                  Launch Your SaaS in Minutes, Not Months
                </h1>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-2xl/relaxed">
                  The production-ready boilerplate with Xendit, multi-tenancy, and VPS-first deployment built-in. Optimized for the Indonesian market.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-12 px-8 text-lg rounded-full">
                  <Link href="/register">Start Building for Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full group">
                  <Link href="https://github.com/launchpad/boilerplate" className="flex items-center gap-2">
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
              <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Placeholder for trusted by logos */}
                <div className="font-bold text-xl tracking-tighter">NEXT15</div>
                <div className="font-bold text-xl tracking-tighter">SUPABASE</div>
                <div className="font-bold text-xl tracking-tighter">XENDIT</div>
                <div className="font-bold text-xl tracking-tighter">DRIZZLE</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted/30">
        <p className="text-xs text-muted-foreground">
          © 2026 {siteConfig.name}. Build with ❤️ in Indonesia.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
