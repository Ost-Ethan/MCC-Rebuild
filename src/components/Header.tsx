import '../pages/Landing.css';
import { FaLinkedin } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";

export default function Header () {


return(
<div className="HEADER justify-between bg-[#005067]">
      <div className="HEAD-LEFT CONTENTS flex justify-between mx-60">
        <div className="LOGO flex h-36 object-contain">
          <img className="self-start mt-6" src={coloredLogo}></img>
        </div>
        <div className="HEAD-RIGHT flex justify-between items-center mb-10">
          <div className=" EMAIL-US flex  text-white font-bold leading-5">
            <button className="flex leading-5">
              <span className="pr-1.5">
                <HiOutlineMail size={20} />
              </span>{" "}
              EMAIL US
            </button>
          </div>
          <button className="text-white text-center bg-[#F58800]  mx-5 rounded px-10 py-1.5 font-bold">
            CALL US NOW
          </button>
          <button className="pr-8 text-white">
            <FaLinkedin size={40} />
          </button>
          <button className="text-white">
            <LuMenu size={70} />
          </button>
        </div>
      </div>
    </div>

)

}