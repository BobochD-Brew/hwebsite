import Image from "next/image";
import Team from "public/team.png";

const Persos = () => {
  return (
    <div className="z-20 w-full flex-1 flex items-end">
      <Image src={Team} layout="" objectFit="contain" />
    </div>
  );
};

export default Persos;
