import Image from "next/image";
import Logo from "public/logo.png";

const HeaderNav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="mt-4 w-20">
        <Image src={Logo} layout="" objectFit="contain" />
      </div>
      <div className="flex text-[#74d9ff] font-bold uppercase items-center space-x-10">
        <div>Our values</div>
        <div>The Brand</div>
        <div>The Team</div>
      </div>
      <div>conect btn</div>
    </div>
  );
};

export default HeaderNav;
