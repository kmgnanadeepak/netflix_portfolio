import { useEffect, useRef, useState } from "react";

const techStack = [
  {
    name: "MongoDB",
    icon: "🍃",
    level: 85,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Express.js",
    icon: "⚡",
    level: 90,
    color: "from-gray-400 to-gray-500",
  },
  {
    name: "React.js",
    icon: "⚛️",
    level: 95,
    color: "from-cyan-400 to-cyan-500",
  },
  {
    name: "Node.js",
    icon: "💚",
    level: 88,
    color: "from-green-400 to-green-500",
  },
];

const otherSkills = [
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "HTML/CSS", level: 90 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Git & GitHub", level: 88 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "REST APIs", level: 90 },
  { name: "PostgreSQL", level: 80 },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">TECH STACK</h2>
          <p className="section-subtitle mx-auto">
            Specialized in the MERN stack with a passion for creating modern web
            applications.
          </p>
        </div>

        {/* MERN Stack Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 reveal">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-card p-6 text-center group cursor-pointer"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                {tech.name}
              </h3>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${tech.level}%` : "0%",
                    transitionDelay: `${0.3 + index * 0.1}s`,
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground mt-2 block">
                {tech.level}%
              </span>
            </div>
          ))}
        </div>

        {/* MERN Stack Banner */}
        <div className="glass-card p-8 md:p-12 mb-20 reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-4xl md:text-5xl text-foreground mb-2">
                MERN <span className="text-gradient">STACK</span>
              </h3>
              <p className="text-muted-foreground">
                MongoDB • Express.js • React.js • Node.js
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-3xl animate-float">
                🍃
              </div>
              <div
                className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-3xl animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                ⚡
              </div>
              <div
                className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-3xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                ⚛️
              </div>
              <div
                className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-3xl animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                💚
              </div>
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="reveal">
          <h3 className="font-display text-3xl text-center text-foreground mb-8">
            OTHER SKILLS
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${0.5 + index * 0.05}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
