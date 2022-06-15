import {useState, useEffect} from "react";

const Bg = () => {
  const [count, setCount] = useState(0);

  let innerHeight = globalThis.innerHeight;
  let innerWidth = globalThis.innerWidth;
  useEffect(() => {
    window.addEventListener('resize', () => {   
      setCount(innerHeight+innerWidth);
    })
  },[])
  return (
    <div
      className="-z-10 fixed inset-0 font-bold flex text-[#74d9ff] justify-center items-center mb-[250px]"
      style={{
        fontSize: innerHeight > innerWidth ? "10vw" : "40vh",
        textShadow: "#FFF 0px 0px 15px, #74d9ff 0px 0px 5px, #74d9ff 0px 0px 10px, #74d9ff 0px 0px 20px, #74d9ff 0px 0px 30px, #74d9ff 0px 0px 50px"
      }}
    >
      HODLHQ
    </div>
  );
};

export default Bg;
