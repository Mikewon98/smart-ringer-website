import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and branding */}
          <div className="flex items-center gap-4">
            <Image
              src="/smart-ringer-logo.jpeg"
              alt="Smart Ringer"
              width={60}
              height={60}
              className="rounded-xl"
            />
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Smart Ringer
              </h3>
              <p className="text-sm text-muted-foreground">
                Intelligent call management
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground mr-2">
              Connect with me:
            </span>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 transition-transform duration-300 hover:border-primary bg-transparent"
              asChild
            >
              <a
                href="https://linkedin.com/in/michael-wondwossen-9837491b3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 transition-transform duration-300 hover:border-primary bg-transparent"
              asChild
            >
              <a
                href="https://github.com/Mikewon98"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 transition-transform duration-300 hover:border-primary bg-transparent"
              asChild
            >
              <a href="mailto:mikewon98@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Smart Ringer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
