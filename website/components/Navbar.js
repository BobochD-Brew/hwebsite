import Image from "next/image";
import Logo from "public/logo.png";
import Web3 from "web3";
import {useState, useEffect} from "react";

const HeaderNav = () => {
  
  const [connectionState, setConnection] = useState(globalThis.web3js == undefined ? 0 : 1);
  let connectText = connectionState == 0 ? "CONNECT WALLET" : "DISCONNECT"
  const Connect = async () => {
    if (globalThis.web3 !== "undefined") {
      await globalThis.ethereum.enable()
      globalThis.web3js = new Web3(globalThis.web3.currentProvider);
      let chainId = await globalThis.web3js.eth.net.getId()
      if (chainId != 137) {
        alert("Please use polygon");
      } else {
        let accounts = await globalThis.web3js.eth.getAccounts();
        connectText = "DISCONNECT"
        setConnection(1)
        globalThis.accounts = accounts;
      }
    } else {
      alert("Please install Metamask and use polygon");
    }
  }
  
  const Disconnect = () => {
    connectText = "CONNECT WALLET"
    globalThis.web3js = undefined;
    setConnection(0)
  }
  

  return (
    <div className="flex justify-between items-center">
      <div className="mt-4 w-20">
        <Image src={Logo} layout="" objectFit="contain" />
      </div>
      <div className="flex-1 flex text-[#74d9ff] font-bold uppercase items-center justify-end space-x-10">
        <div>Gallery</div>
        <div>OGs</div>
        <div>Collections</div>
        <div>Dashboard</div>
      </div>
      <div className="w-[200px] h-full relative flex items-center justify-end"><button className="web3button whitespace-nowrap absolute text-[#74d9ff] font-bold uppercase" onClick={connectionState == 0 ? Connect : Disconnect}>{connectText}</button></div>
    </div>
  );
};

export default HeaderNav;
