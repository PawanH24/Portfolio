import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Computer Science Graduate
            </h3>

            <p className="text-muted-foreground">
              I’m a recent Computer Science graduate with a strong interest in
              building, analyzing, and improving software systems. I enjoy
              working across different aspects of technology—from application
              development and testing to problem-solving and system design—and
              I’m motivated to continuously learn and adapt in real-world
              environments.
            </p>

            <p className="text-muted-foreground">
              Through academic and personal projects, I’ve gained hands-on
              experience developing, testing, and documenting web applications,
              browser extensions, and interactive projects. I enjoy
              collaborating with others, translating requirements into practical
              solutions, and contributing to technology-driven teams where
              quality and usability matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Software & Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building and maintaining web-based applications with a focus
                    on clean structure, responsiveness, and reliability using
                    modern tools and frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Testing & Quality
                  </h4>
                  <p className="text-muted-foreground">
                    Evaluating applications to ensure functionality,
                    reliability, and consistency by identifying issues,
                    validating requirements, and improving overall software
                    quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Turning ideas into working prototypes using modern tools to
                    deliver functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
