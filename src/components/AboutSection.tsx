import { useEffect, useRef } from "react";
import { Code2, Film, Zap, Heart } from "lucide-react";

const stats = [
  { value: "2+", label: "Industry Internships" },
  { value: "5+", label: "Major Projects Built" },
  { value: "15+", label: "APIs Tested & Deployed" },
  { value: "100%", label: "Dedication & Problem-Solving Mindset" },
];

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building robust web applications with modern technologies and best practices.",
  },
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Creating stunning visual content with DaVinci Resolve and professional editing techniques.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "Optimizing applications for speed, scalability, and exceptional user experience.",
  },
  {
    icon: Heart,
    title: "Passionate Learner",
    description:
      "Constantly exploring new technologies and staying ahead of industry trends.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden pt-16 md:pt-24 pb-28 md:pb-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* About Header */}
        <div className="text-center mb-14 reveal">
           <h2
              className="font-display text-5xl md:text-6xl mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-gradient">About</span>{" "}
              <span className="text-foreground">Me</span>
              
            </h2>
          <p className="section-subtitle mx-auto">
            A Full Stack Developer specializing in the MERN stack, with hands-on
            experience building scalable web and mobile applications using REST
            APIs, JWT authentication, AWS, Docker, and CI/CD pipelines.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 reveal">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div className="text-center mb-14 reveal">
           <h2
              className="font-display text-5xl md:text-6xl mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">Core</span>{" "}
              <span className="text-gradient">Capabilities</span>
            </h2>

          <p className="section-subtitle mx-auto">
            Technical strengths and development mindset shaped by real-world
            projects and internships.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`reveal-${index % 2 === 0 ? "left" : "right"} glass-card p-8 group`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10  reveal">
          <blockquote className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground italic mb-4">
              “If it can’t be deployed, it’s not finished.”
            </p>
            <cite className="text-muted-foreground">— KM Gnana Deepak</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
