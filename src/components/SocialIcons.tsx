import type { SocialIcon } from "./Aside";

interface Props {
  socialIconsList: SocialIcon[];
}

const SocialIcons = ({ socialIconsList }: Props) => {
  return (
    <div className="w-full flex gap-2.5 justify-start md:justify-center pt-4 md:pt-0 pl-0.5 pb-0.5">
      {socialIconsList.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.iconName} href={item.link} target="_block">
            <span className="text-[19px] text-iconmycolor hover:text-gray-300">
              <Icon />
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
