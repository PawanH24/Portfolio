import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "LotusSoft",
    location: "Lalitpur, Nepal",
    period: "Jan 2026 – Mar 2026",
    type: "Internship",
    description:
      "Built and maintained responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UIs and improve overall performance.",
    tech: ["React", "TypeScript", "Next Js", "Tailwind CSS", "Git"],
  },
];

const typeColors = {
  "Full-time": "bg-primary/20 text-primary border border-primary/30",
  Internship: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  Freelance: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
};

export const ExperienceSection = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Subtle background glow matching the theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-background hidden sm:flex items-center justify-center">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full bg-primary transition-all duration-300",
                      expanded === index ? "scale-100" : "scale-50 opacity-50",
                    )}
                  />
                </div>

                {/* Card */}
                <div
                  className={cn(
                    "bg-card rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer",
                    expanded === index
                      ? "border-primary/40 shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                      : "border-border hover:border-primary/20",
                  )}
                  onClick={() => setExpanded(expanded === index ? -1 : index)}
                >
                  {/* Card Header */}
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div className="flex gap-4 items-start">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg leading-tight">
                            {exp.role}
                          </h3>
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full font-medium",
                              typeColors[exp.type],
                            )}
                          >
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-3 text-muted-foreground text-xs">
                          <p className="text-primary font-medium text-sm mb-2">
                            {exp.company}
                          </p>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-300",
                        expanded === index && "rotate-180 text-primary",
                      )}
                    />
                  </div>

                  {/* Expandable Body */}
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      expanded === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 border-t border-border/50">
                        <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-3 py-1 rounded-full bg-secondary/70 text-foreground/80 border border-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
