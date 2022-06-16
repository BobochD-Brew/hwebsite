import {useState, useEffect} from "react";

const Bg = (props) => {
  const [innerHeight, setInnerHeight] = useState(globalThis.innerHeight);
  const [innerWidth, setInnerWidth] = useState(globalThis.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {   
      setInnerHeight(globalThis.innerHeight);
      setInnerWidth(globalThis.innerWidth);
    })
  },[])
  return (
    <div
      className="-z-10 fixed inset-0 font-bold flex text-[#fff] opacity-50 justify-center items-center mb-[20vh]"
      style={{
        fontSize: innerHeight > innerWidth ? "20vw" : "25vh",
      }}
    >
      HODLHQ
    </div>
  );
};

export default Bg;
