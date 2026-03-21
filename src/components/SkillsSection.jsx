import { useState } from "react";
import { cn } from "@/lib/utils";

const BrandIcon = ({
  slug,
  source = "simple",
  invert = false,
  className = "w-7 h-7",
}) => {
  const url =
    source === "devicon"
      ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`
      : `https://cdn.simpleicons.org/${slug}`;

  return (
    <img
      src={url}
      alt={slug}
      className={className}
      style={invert ? { filter: "invert(1)" } : undefined}
    />
  );
};

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", iconSlug: "html5" },
  { name: "JavaScript", category: "frontend", iconSlug: "javascript" },
  { name: "React", category: "frontend", iconSlug: "react" },
  { name: "TypeScript", category: "frontend", iconSlug: "typescript" },
  { name: "Tailwind CSS", category: "frontend", iconSlug: "tailwindcss" },

  // Programming
  { name: "Python", category: "programming", iconSlug: "python" },
  { name: "Java", category: "programming", iconSlug: "openjdk", invert: true },
  { name: "C++", category: "programming", iconSlug: "cplusplus" },
  {
    name: "C#",
    category: "programming",
    iconSlug: "csharp",
    source: "devicon",
  },
  { name: "GDScript", category: "programming", iconSlug: "godotengine" },

  // Database
  { name: "PostgreSQL", category: "database", iconSlug: "postgresql" },

  // Tools
  { name: "Git/GitHub", category: "tools", iconSlug: "github", invert: true },
  { name: "Figma", category: "tools", iconSlug: "figma" },
  { name: "Postman", category: "tools", iconSlug: "postman" },
  { name: "Sentry", category: "tools", iconSlug: "sentry" },
];

const categories = ["all", "frontend", "programming", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4">
                  <BrandIcon
                    slug={skill.iconSlug}
                    source={skill.source}
                    invert={skill.invert}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
