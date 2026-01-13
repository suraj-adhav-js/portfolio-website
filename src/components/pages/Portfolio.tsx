import PageHeading from "../PageHeading";
import gameDiscovery from "../../assets/projects/gameDiscovery.webp";
import portfolio from "../../assets/projects/portfolio.webp";
import primeMumbai from "../../assets/projects/primeMumbai.webp";
import BrassCopperParts from "../../assets/projects/brass-copper-parts.webp";
import roadMapClone from "../../assets/projects/roadmapclone.webp";
import oldPortfolio from "../../assets/projects/surajadhav-old-portfolio.webp";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "game discovery",
      technology: ["react", "Chakra UI", "axios"],
      link: "https://gamediscoveryjs.vercel.app/",
      image: gameDiscovery,
    },
     {
      id: 2,
      title: "portfolio",
      technology: ["react", "Tailwind", "axios", "react-hook-form", "zod"],
      link: "https://gamediscoveryjs.vercel.app/",
      image: portfolio,
    },
    {
      id: 3,
      title: "prime mumbai",
      technology: ["PHP", "HTML", "CSS", "JS"],
      link: "https://primemumbai.com/",
      image: primeMumbai,
    },
    {
      id: 4,
      title: "brass copper parts",
      technology: ["WordPress", "tailwind"],
      link: "https://brass-copper-parts.com/",
      image: BrassCopperParts,
    },
    {
      id: 5,
      title: "road Map Clone",
      technology: ["HTML", "CSS", "JS"],
      link: "https://roadmapclone.netlify.app/",
      image: roadMapClone,
    },
    {
      id: 6,
      title: "old portfolio",
      technology: ["HTML", "CSS", "JS"],
      link: "https://surajadhav6.netlify.app/",
      image: oldPortfolio,
    },
  ];

  return (
    <>
      <PageHeading>Portfolio</PageHeading>
      <div className="grid lg:grid-cols-2 grid-rows-auto gap-5">
        {projects.map((project) => {
          return (
            <a
              href={project.link}
              className="rounded-lg overflow-hidden bg-dark-400"
              key={project.id}
              target="_blank"
            >
              <img
                src={project.image}
                alt={project.title + " website preview image"}
              ></img>
              <div className="mx-3 my-3.5">
                <p className="text-xl font-bold capitalize mb-1.5">
                  {project.title}
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {project.technology.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="text-xs lg:text-[13px] capitalize rounded-lg px-1 py-0.5 text-[#b3b3b3]  bg-[#333]"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
