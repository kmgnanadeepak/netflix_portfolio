import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-20">
            <h2
              className="font-display text-5xl md:text-6xl mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">Industry</span>{" "}
              <span className="text-gradient">Experience</span>
            </h2>

            <p
              className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Hands-on experience building real-world full stack applications,
              backend systems, APIs, and cloud deployments.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Internship Studio */}
            <div
              className="glass-card experience-card p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground leading-snug">
                    MERN Stack Development Intern
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    Internship Studio
                  </p>
                </div>

                <div className="flex items-start gap-2 text-sm text-muted-foreground whitespace-nowrap pt-1">
                  <Calendar size={16} className="mt-[2px]" />
                  <span>Nov 2025 – Dec 2025</span>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground mb-6">
                <li>• Built a MERN-based task management system with JWT authentication.</li>
                <li>• Designed and implemented 10+ RESTful APIs with CRUD operations.</li>
                <li>• Integrated React frontend with Node.js & Express backend.</li>
                <li>• Tested 15+ APIs using Postman and optimized backend structure.</li>
                <li>• Deployed application using Docker containers on AWS EC2.</li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full text-xs glass-card">MERN</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">JWT</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">REST APIs</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">Docker</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">AWS EC2</span>
              </div>
            </div>

            {/* Cognifyz */}
            <div
              className="glass-card experience-card p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground leading-snug">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    Cognifyz Technologies
                  </p>
                </div>

                <div className="flex items-start gap-2 text-sm text-muted-foreground whitespace-nowrap pt-1">
                  <Briefcase size={16} className="mt-[2px]" />
                  <span>Dec 2025 – Jan 2026</span>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground mb-6">
                <li>• Developed frontend and backend features using HTML, CSS, and JavaScript.</li>
                <li>• Implemented server-side logic using Node.js and Express.</li>
                <li>• Built and tested backend routes following REST principles.</li>
                <li>• Improved UI responsiveness and overall application performance.</li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full text-xs glass-card">HTML</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">CSS</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">JavaScript</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">Node.js</span>
                <span className="px-3 py-1 rounded-full text-xs glass-card">Express</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
