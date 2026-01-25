"use client";

import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";

export function CtaSection() {
  const handleDownload = () => {
    // Programmatically trigger download of the APK placed in the public folder
    const a = document.createElement("a");
    a.href = "/smart-ringer.apk";
    a.download = "smart-ringer.apk";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary p-1">
          <div className="bg-background rounded-[calc(1.5rem-1px)] p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Ready to take control of your calls?
              </h2>

              <p className="text-xl text-muted-foreground text-pretty">
                Join thousands of users who have already discovered a smarter
                way to manage their phone calls with Smart Ringer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                  onClick={handleDownload}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Get Smart Ringer
                </Button>
                {/* <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 group hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href="https://play.google.com/store/apps/smartringer" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Get Smart Ringer
                  </a>
                </Button> */}

                {/* <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="font-semibold">4.8/5 from 10k+ users</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
