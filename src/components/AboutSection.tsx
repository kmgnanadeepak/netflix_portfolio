import { useEffect, useRef } from "react";
import { Code2, Film, Zap, Heart } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Dedication" },
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
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle mx-auto">
            A passionate developer and creative editor dedicated to building
            exceptional digital experiences.
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

        {/* Highlights Grid */}
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
        <div className="mt-20 reveal">
          <blockquote className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground italic mb-4">
              "Code is poetry written in logic, and video editing is storytelling through visuals."
            </p>
            <cite className="text-muted-foreground">— KM Gnana Deepak</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
