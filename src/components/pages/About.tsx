import PageHeading from "../PageHeading";
import Skills from "../Skills";

const About = () => {
  return (
    <div className="overflow-hidden">
      <PageHeading>About Me</PageHeading>
      <p className="leading-relaxed text-[15px]">
        Frontend Developer with 2 years of experience creating smooth,
        responsive, and user-focused web interfaces using React.js. Skilled in
        React Query, Zod, and React Hook Form for clean and reliable data
        handling. I build accessible UI layouts using Tailwind & Bootstrap, and
        have hands-on experience with WordPress and Webflow as well.
      </p>
      <h3 className="text-lg mt-10 my-5 lg:text-2xl font-semibold">
        What i'm doing
      </h3>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
        <div className="gradint-border ">
          <div className="p-5 md:p-7 rounded-lg md:rounded-xl bg-dark-400">
            <h4 className="text-xl font-semibold mb-3 capitalize">
              frontend development
            </h4>
            <p>
              I build fast, responsive React.js applications using modern tools
              like TypeScript, React Query, Zustand, and Zod. I focus on clean
              architecture and reusable components.
            </p>
          </div>
        </div>
        <div className="">
          <div className="gradint">
            <div className="p-5 md:p-7 rounded-lg md:rounded-xl bg-dark-400">
              <h4 className="text-xl font-semibold mb-3">UI/UX & Animations</h4>
              <p>
                I turn UI/UX designs into pixel-perfect interfaces using
                Tailwind and Bootstrap. I enhance user experience with fluid,
                interactive and modern animations.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="gradint">
            <div className="p-5 md:p-7 rounded-lg md:rounded-xl bg-dark-400">
              <h4 className="text-xl font-semibold mb-3">
                API & CMS Integration
              </h4>
              <p>
                I integrate REST APIs, manage server-state efficiently with
                React Query, and create SEO-friendly WordPress/Webflow websites
                for real-world performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="capitalize text-lg mt-10 my-5 lg:text-2xl font-semibold">
        skills
      </h3>
      <Skills></Skills>
    </div>
  );
};

export default About;
