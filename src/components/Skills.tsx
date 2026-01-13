const Skills = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Zustand",
    "React Query",
    "Zod",
    "HTML5",
    "CSS3",
    "SASS",
    "PHP",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Web Design",
    "Chakra UI",
    "UI/UX Implementation",
    "Component-Based Architecture",
    "SPA Design",
    "Git",
    "GitHub",
    "VS Code",
    "Netlify",
    "REST API Integration",
    "Agile/Scrum",
    "WordPress",
    "SEO & Performance Optimization",
    "Object-Oriented Programming",
    "SQL Databases",
    "Operating Systems",
    "Computer Networks",
  ];
  return (
    <div className="flex flex-wrap gap-2 mb-2 lg:mb-10">
      {skills.map((item) => {
        return (
          <div key={item} className="gradint-border">
            <div className="p-2 md:p-1.25 rounded-lg md:rounded-xl bg-dark-400">
              <span className="text-sm text-center py-1 px-1  lg:py-2 lg:px-5  text-wrap bg-dark-400 m-1 rounded-full">
                {item}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
