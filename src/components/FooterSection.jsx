import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative w-full bg-background pt-16 pb-8 overflow-hidden">
      {/* Top subtle gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6 flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              <FooterLink href="#about">About Me</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-5 space-y-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80 text-center mx-auto">
              Contact through Social Media
            </h2>
            <p className="text-foreground/70 leading-relaxed max-w-sm  mx-auto">
              Crafting immersive digital experiences with clean code and modern
              design. Let's build something extraordinary together.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/PawanH24" label="GitHub">
                <Github />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/pawan-hada-7830ba294/" label="LinkedIn">
                <Linkedin />
              </SocialLink>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div className="md:col-span-4 space-y-6 ">
            <h3 className="text-lg font-semibold text-foreground">
              Stay Connected
            </h3>
            <p className="text-foreground/70 text-sm">
              Drop your email to get in touch or hear about my latest projects.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-card/50 border border-border focus:border-primary/50 focus:outline-none transition-colors"
              />
              <button type="submit" className="cosmic-button flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-border"
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li className="list-none">
      <a
        href={href}
        className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
      >
        {children}
      </a>
    </li>
  );
}
