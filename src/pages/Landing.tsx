import "./Landing.css";
import { FaLinkedin } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";


function App() {
  return (
    <div className="HEADER justify-between bg-[#005067]">
      <div className="HEAD-LEFT CONTENTS flex justify-between mx-60">
        <div className="LOGO flex h-36 object-contain">
          <img className="self-center" src={coloredLogo}></img>
        </div>
        <div className="HEAD-RIGHT flex justify-between items-center mb-10">
          <div className=" EMAIL-US flex  text-white font-bold leading-5">
           <span className="pr-1.5"><HiOutlineMail size={20}/></span> EMAIL US
            </div>
          <div className="text-white bg-[#F58800]  mx-5 rounded text-center px-10 py-1.5 font-bold">
            CALL US NOW
          </div>
          <div className="text-white pr-8">
            <FaLinkedin size={40} />
          </div>
          <div className="text-white">
            <LuMenu size={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
