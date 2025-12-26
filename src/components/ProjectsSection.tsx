import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  BarChart3,
  Film,
  CheckCircle,
  Bot,
  Dumbbell,
  Shield,
} from "lucide-react";

const projects = [
  {
    title: "Safe Fall – Fall Detection & SOS Alert System",
    description:
      "A real-time fall detection and emergency response system designed to identify sudden falls and trigger immediate SOS alerts to family and friends. The platform focuses on rapid response, user safety, and reliable notification flow.",
    tech: ["React", "Express.js", "MongoDB", "Node.js", "Responsive Design"],
    gradient: "from-red-600/30 to-black",
    github: "https://github.com/kmgnanadeepak/safe-guard.git",
    live: "https://safeguard158.netlify.app",
    icon: Shield,
  },
  {
    title: "Social Media Dashboard",
    description:
      "Real-time analytics dashboard for tracking social media metrics and engagement across platforms.",
    tech: ["React", "Express", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    icon: BarChart3,
  },
  {
    title: "Video Streaming App",
    description:
      "Netflix-inspired streaming platform with user profiles, watchlists, and content recommendations.",
    tech: ["MERN Stack", "AWS S3", "JWT", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    icon: Film,
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with real-time updates, kanban boards, and team features.",
    tech: ["React", "Socket.io", "MongoDB", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    icon: CheckCircle,
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered platform for generating marketing copy, blog posts, and social media content.",
    tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    icon: Bot,
  },
  {
    title: "Fitness Tracker",
    description:
      "Health and fitness application with workout logging, progress tracking, and nutrition planning.",
    tech: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    icon: Dumbbell,
  },
];

const ProjectsSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">MY PROJECTS</h2>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing my skills in full-stack
            development and creative problem-solving.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="font-display text-2xl text-foreground mb-6 reveal">
            FEATURED WORKS
          </h3>

          <div className="horizontal-scroll reveal">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={project.title}
                className="glass-card w-80 md:w-96 flex-shrink-0 overflow-hidden group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${
                    project.gradient || "from-primary/20 to-secondary"
                  } flex items-center justify-center`}
                >
                  <project.icon className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-6">
                  <h4 className="font-display text-2xl text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tag-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex-1 flex items-center justify-center gap-2 py-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-netflix flex-1 flex items-center justify-center gap-2 py-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {projects.map((project, index) => (
            <div
              key={project.title + index}
              className="glass-card overflow-hidden group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                <project.icon className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <h4 className="font-display text-xl text-foreground mb-2">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tag-chip text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-glow text-muted-foreground"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-glow text-muted-foreground"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
