import NavBar from "./NavBar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

interface Props {
  activeSection: (item: string) => void;
  activeSectionState: string;
}

const MainContent = ({ activeSection, activeSectionState }: Props) => {
  return (
    <div className="border bg-dark-500 section-border">
      <div className="flex justify-end">
        <div className=" hidden lg:block overflow-hidden">
          <NavBar
            activeSectionState={activeSectionState}
            activeSection={activeSection}
          ></NavBar>
        </div>
      </div>
      <div className="m-4 lg:mx-9 md:-mt-6">
        {activeSectionState === "about" && <About />}
        {activeSectionState === "resume" && <Resume />}
        {activeSectionState === "portfolio" && <Portfolio />}
        {activeSectionState === "blog" && <Blog />}
        {activeSectionState === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default MainContent;
