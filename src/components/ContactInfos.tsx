import type { ContactInfo } from "./Aside";

interface Props {
  contactInfoList: ContactInfo[];
}

const ContactInfos = ({ contactInfoList }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 md:gap-y-6 space-y-4 pt-4 border-b-2 md:border-0 border-seperator pb-4">
      {contactInfoList.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="flex m-0 gap-3 items-center ">
            <div className="gradint-border">
            <div className="p-2 md:p-[5px] rounded-lg md:rounded-xl bg-dark-400">
              <Icon className="text-base md:text-lg md-1 md:m-2 " />
            </div>

            </div>
          
            <div className="flex flex-col item-start">
              <h4 className="text-sm capitalize text-iconmycolor">{item.label}</h4>
              <a href={item.link} className="text-sm wrap-break-word">{item.content}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfos;
