"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownload = () => {
    // Programmatically trigger download of the APK placed in the public folder
    const a = document.createElement("a");
    a.href = "/smart-ringer.apk";
    a.download = "smart-ringer.apk";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div
            className={`flex-1 space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="inline-block animate-fade-in">
              <span className="text-sm font-semibold px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                Smart Call Management
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Silence specific contacts, not your life
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              {
                "Take control of your phone with Smart Ringer. Selectively silence calls from specific contacts while keeping your phone active for everyone else."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Now
              </Button>
              {/* <Button
                size="lg"
                className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-300"
                asChild
              >
                <a
                  href="https://play.google.com/store/apps/smartringer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download on Play Store
                </a>
              </Button> */}

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300 bg-transparent"
                asChild
              >
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>

          {/* App logo with animation */}
          <div
            className={`flex-1 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative animate-float">
                <Image
                  src="/smart-ringer-logo.jpeg"
                  alt="Smart Ringer App Logo"
                  width={400}
                  height={400}
                  className="rounded-3xl shadow-2xl hover:shadow-primary/20 transition-shadow duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
