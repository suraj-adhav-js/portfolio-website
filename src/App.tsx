import { useState } from "react";
import Aside from "./components/Aside";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  return (
    <div className="mb-20">
      <div className="md:w-5/6 m-auto"> 
        <div className="grid grid-rows-auto grid-cols-1 lg:grid-rows-auto lg:grid-cols-[2.4fr_7.6fr] gap-3.5 lg:gap-x-6 m-4 lg:m-15 ">
          <Aside />
          <MainContent activeSectionState={activeSection} activeSection={(item)=>setActiveSection(item)}/>
        </div>
      </div>
      <div className="lg:hidden p-5 fixed bottom-0 z-50 w-full flex justify-center rounded-t-lg  
              backdrop-blur-xl bg-white/10  ">
        <NavBar activeSectionState={activeSection}  activeSection={(item)=>setActiveSection(item)} />
      </div>
    </div>
  );
};

export default App;