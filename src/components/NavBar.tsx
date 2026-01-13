interface Props {
  activeSection: (item: string) => void;
  activeSectionState: string;
}

const NavBar = ({ activeSection, activeSectionState }: Props) => {
  const navItems = ["about", "resume", "portfolio", "blog", "contact"];
  return (
    <nav className="  lg:bg-dark-400 flex lg:justify-end navbar-design">
      <ul className="flex self-end  gap-3 lg:gap-6 lg:px-10 text-xs capitalize">
        {navItems.map((item) => {
          return (
            <li className="lg:py-5 lg:px-2 text-xs lg:text-sm lg:font-semibold cursor-pointer" onClick={() => activeSection(item)} key={item}>
              <a
                className={
                  item === activeSectionState
                    ? "text-accent overflow-hidden"
                    : ""
                }
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
