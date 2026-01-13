interface Props{
    children:string
}

const PageHeading = ({children}: Props) => {
  return (
    <div className="mb-4">
      <h1 className="leading-1 mt-5 mb-2 text-2xl lg:text-[32px] lg:mb-4 font-semibold z-50 ">{children}</h1>
      <span className="inline-block bg-accent w-10 h-1.5 lg:h-1.5 rounded-full"></span>
    </div>
  );
};

export default PageHeading;
