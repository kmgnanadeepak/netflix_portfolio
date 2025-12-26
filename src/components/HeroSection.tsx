import { ChevronDown, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
      

          {/* Name */}
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-foreground">KM GNANA</span>
            <br />
            <span className="text-gradient">DEEPAK</span>
          </h1>

          {/* Role Pills */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                MERN Stack Engineer
              </span>
            </div>
          </div>

          {/* Contact Quick Links */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="mailto:kmgnanadeepak@gmail.com"
              className="flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} className="text-primary" />
              kmgnanadeepak@gmail.com
            </a>
            <a
              href="tel:9441652345"
              className="flex items-center gap-2 px-4 py-2 glass-card text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={16} className="text-primary" />
             +91 9441652345
            </a>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <a href="#projects" className="btn-netflix pulse-glow">
              <span>View Projects</span>
            </a>
            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
     
    </section>
  );
};

export default HeroSection;
