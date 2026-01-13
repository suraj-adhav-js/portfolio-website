import type React from "react";
import ContactInfos from "./ContactInfos";
import Profile from "./Profile";
import SocialIcons from "./SocialIcons";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import {
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoLogoLinkedin,
} from "react-icons/io5";

export interface ContactInfo {
  label: string;
  content: string;
  icon: React.ComponentType;
  link: string
}

export interface SocialIcon {
  iconName: string;
  link: string;
  icon: React.ComponentType;
}

const Aside = () => {
  const contactInfoList = [
    {
      label: "email",
      content: "adhavsuraj2@gmail.com",
      icon: HiOutlineMail,
      link:"mailto:adhavsuraj2@gmail.com"
    },
    {
      label: "phone",
      content: "+91 8850823266",
      icon: IoPhonePortraitOutline,
      link:"tel:+918850823266"
    },
    { label: "location", content: "Thane, India", icon: IoLocationOutline, link:'https://share.google/Z4iDEsLLt8jyXGM1o' },
  ];

  const socialIconsList = [
    {
      iconName: "linkedin",
      link: "https://www.linkedin.com/in/surajadhav/",
      icon: IoLogoLinkedin,
    },
    {
      iconName: "github",
      link: "https://github.com/suraj-adhav-js/",
      icon: IoLogoGithub,
    },
    { iconName: "twitter", link: "#", icon: FaTwitter },
  ];

  return (
    <div className="border bg-dark-500 section-border self-start">
      <div className="m-4 md:mt-15 md:mx-7 md:mb-7 flex flex-col md:gap-4 items-center">
        <Profile></Profile>
        <ContactInfos contactInfoList={contactInfoList}></ContactInfos>
        <SocialIcons socialIconsList={socialIconsList}></SocialIcons>
      </div>
    </div>
  );
};

export default Aside;
