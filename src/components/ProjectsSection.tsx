import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with user authentication, product management, and secure payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    image: "🛒",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Real-time analytics dashboard for tracking social media metrics and engagement across platforms.",
    tech: ["React", "Express", "PostgreSQL", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "📊",
  },
  {
    title: "Video Streaming App",
    description:
      "Netflix-inspired streaming platform with user profiles, watchlists, and content recommendations.",
    tech: ["MERN Stack", "AWS S3", "JWT", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    image: "🎬",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with real-time updates, kanban boards, and team features.",
    tech: ["React", "Socket.io", "MongoDB", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "✅",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered platform for generating marketing copy, blog posts, and social media content.",
    tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "🤖",
  },
  {
    title: "Fitness Tracker",
    description:
      "Health and fitness application with workout logging, progress tracking, and nutrition planning.",
    tech: ["React Native", "Node.js", "MongoDB", "Charts"],
    github: "https://github.com",
    live: "https://example.com",
    image: "💪",
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">MY PROJECTS</h2>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing my skills in full-stack
            development and creative problem-solving.
          </p>
        </div>

        {/* Netflix-style Horizontal Scroll */}
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
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-display text-2xl text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tag-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
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
                      <span className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {projects.slice(0, 6).map((project, index) => (
            <div
              key={project.title + index}
              className="glass-card overflow-hidden group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-display text-xl text-foreground mb-2">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tag-chip text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
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
