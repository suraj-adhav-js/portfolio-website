import PageHeading from "../PageHeading";

const Resume = () => {
  return (
    <>
      <PageHeading>Resume</PageHeading>
      <div className="flex flex-col gap-5 lg:gap-10">
        <div>
          <h2 className="font-semibold text-2xl mb-3">Experience</h2>
          <div>
            <div className="flex flex-col lg:flex-row justify-between">
              <h3 className="font-semibold mb-1">frontend developer</h3>
              <p className="text-accent">Oct, 2023 — Jun, 2025</p>
            </div>
            <p className="text-gray-400 font-light">Conex Metals (INTL)</p>
            <i>Narima Point, Mumbai</i>
            <ul className="list-disc pl-4 marker:text-accent font-normal text-gray-300">
              <li>
                Built React.js SPAs with reusable, responsive UI components,
                reducing duplicate code by 15%
              </li>
              <li>
                Translated UI/UX designs into responsive interfaces using
                React.js, HTML, SASS/CSS, JavaScript, and TypeScript.
              </li>
              <li>
                Styled and enhanced UI with Tailwind CSS and Bootstrap using
                mobile-first principles.
              </li>
              <li>Developed animations using GSAP and Framer Motion.</li>
              <li>
                Built WordPress & Webflow sites, increasing traffic by 30%
                through improved UI and SEO.
              </li>
              <li>Used React Query for server-state management and caching.</li>
              <li>
                Improved code quality with Git workflows and documentation.
              </li>
              <li>
                Built company websites including primemumbai.com and
                brass-copper-parts.com.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-between">
            <h3 className="font-semibold mb-1">Web Development Intern</h3>
            <p className="text-accent">Sep, 2023 — Oct, 2023</p>
          </div>
          <p className="text-gray-400 font-light">The Sparks Foundation</p>
          <i>Remote</i>
          <ul className="list-disc pl-4 marker:text-accent font-normal text-gray-300">
            <li>
              Built responsive websites using HTML, CSS, JavaScript, PHP, and
              MySQL.
            </li>
            <li>
              Developed clean, user-friendly interfaces and optimized layouts
              for all devices.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
