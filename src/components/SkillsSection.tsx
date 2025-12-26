import { useEffect, useRef, useState } from "react";

const otherSkills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "MongoDB", level: 85 },
  { name: "Node.js & Express", level: 92 },
  { name: "React.js", level: 75 },
  { name: "Git & GitHub", level: 85 },
  { name: "REST APIs", level: 90 },
  { name: "Docker (Containerization)", level: 90 },
  { name: "CI/CD Pipelines", level: 80 },
  { name: "AWS (EC2, S3, IAM)", level: 70 },
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

    if (sectionRef.current) observer.observe(sectionRef.current);

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
            Strong hands-on experience in full-stack development, cloud
            deployment, and modern DevOps workflows.
          </p>
        </div>

        {/* SINGLE MERN STACK SECTION (UNCHANGED) */}
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

        {/* TECH SKILLS */}
        <div className="reveal">
          <h2
  className="font-display text-5xl md:text-6xl mb-8 text-center opacity-0 animate-fade-in-up"
  style={{ animationDelay: "0.2s" }}
>
  
<span className="text-gradient">TECH</span>{" "}
<span className="text-foreground">SKILLS</span>
</h2>


          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-bar-fill transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${0.4 + index * 0.05}s`,
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
