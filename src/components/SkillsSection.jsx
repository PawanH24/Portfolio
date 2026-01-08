import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Database,
  Wrench,
  Layout,
  Terminal,
  FileCode,
  GitBranch,
  Figma as FigmaIcon,
  Braces,
  Table,
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: Layout },
  { name: "JavaScript", category: "frontend", icon: FileCode },
  { name: "React", category: "frontend", icon: Code2 },
  { name: "TypeScript", category: "frontend", icon: Braces },
  { name: "Tailwind CSS", category: "frontend", icon: Layout },

  // Programming
  { name: "Python", category: "programming", icon: Terminal },
  { name: "Java", category: "programming", icon: Code2 },
  { name: "C++", category: "programming", icon: FileCode },
  { name: "C#", category: "programming", icon: Braces },
  { name: "Gdscript", category: "programming", icon: Terminal },

  // Database
  { name: "PostgreSQL", category: "database", icon: Database },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: GitBranch },
  { name: "Figma", category: "tools", icon: FigmaIcon },
  { name: "VS Code", category: "tools", icon: Code2 },
  { name: "Matlab", category: "tools", icon: Table },
];

const categories = ["all", "frontend", "programming", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
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
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
