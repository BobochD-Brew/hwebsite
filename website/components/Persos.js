import Image from "next/image";
import Team from "public/team.png";
import {useState, useEffect} from "react";

const Persos = () => {
  const [innerHeight, setInnerHeight] = useState(globalThis.innerHeight);
  const [innerWidth, setInnerWidth] = useState(globalThis.innerWidth);
  useEffect(() => {
  window.addEventListener('resize', () => {   
    setInnerHeight(globalThis.innerHeight);
    setInnerWidth(globalThis.innerWidth);
  })
  },[])

  return (
    <div className={`z-20 ${innerHeight > innerWidth ? "w-full" : "w-8/12"} m-auto flex-1 flex justify-center items-end`}>
      <Image src={Team} layout="" objectFit="contain" />
    </div>
  );
};

export default Persos;
