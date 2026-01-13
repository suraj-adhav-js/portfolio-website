import personImage from "../assets/my-avatar.png";

const Profile = () => {
  return (
    <div className="w-full pb-4 flex md:flex-col items-center border-b-2 gap-3 md:gap-6 border-seperator md:pb-8">
      <a href="#">
        <figure className="bg-dark-400 rounded-[20px]">
          <img className="max-w-20 lg:max-w-37.5" src={personImage}></img>
        </figure>
      </a>
      <div className="flex flex-col items-start md:items-center md:gap-3">
        <h1 className="text-base mb-1 md:text-3xl font-semibold capitalize">suraj adhav</h1>
        <p className="text-xs p-1 md:py-1 md:px-2 rounded-md bg-dark-400 capitalize">frontend developer</p>
      </div>
    </div>
  );
};  

export default Profile;
