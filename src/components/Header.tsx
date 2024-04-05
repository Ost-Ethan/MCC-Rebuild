import '../pages/Landing.css';
import { FaLinkedin } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";
import { useState } from 'react';
import { Outlet, Link} from 'react-router-dom';
import './Header.css'

export function Header () {
const [menuOpen, setMenuOpen] = useState(false);

return(
  <>
<div className="HEADER justify-between bg-[#005067] header sticky top-0">
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
          <button className="text-white HAMBURGER MENU" onClick={() =>setMenuOpen(true)}>
            <LuMenu size={70} />
          </button>
        </div>
      </div>
      { menuOpen &&
      <div className='MENU flex flex-col pl-12 text-justify fixed right-0 top-0 h-full w-1/6 bg-[#276969] text-white font-bold text-lg'>
        <div className='self-end' onClick={() => setMenuOpen(false)}><FaTimes size={50}/></div>
          <Link to='/'><div className='mt-10 mb-10'>HOME</div></Link>
          <Link to='/about'><div className='mb-10'>ABOUT</div></Link>
          <Link to='/employment'><div className='mb-10'>EMPLOYMENT</div></Link>
          <Link to='/contact'><div className='mb-10'>CONTACT</div></Link>
      </div>
}
    </div>
    <Outlet/>
    </>

)

}