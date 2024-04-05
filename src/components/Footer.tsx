import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="p-5 pt-10 px-12 bg-[#005067] text-[#ffffff] w-full flex flex-col sm:flex-row ">
        <div className="w-1/5">
          <img className="mt-6" src={coloredLogo}></img>
        </div>
        <div className="w-1/5 flex-col">
          <div className="text-lg font-bold mb-4">CONTACT US</div>
          <div className="text-sm">
            {`660 Main Street 

            Sturbridge, MA 01566`}
            <div> 140 Pine Street Florence, MA 01062</div>
            <div> (413) 568-4696 Info@macommclean.com</div>
          </div>
        </div>
        <div className="w-1/5 flex-col">
          <div className="text-lg font-bold mb-4">HOURS</div>
          <div>
            <p className="font-bold">Mon - Fri</p>
            <p className="text-sm">8 am - 5pm</p>
          </div>
          <p className="font-bold">Sat & Sun</p>
          <p className="text-sm">Closed</p>
        </div>
        <div className="w-1/5 flex-col">
          <div className="text-lg font-bold mb-4">NAVIGATION</div>
          <div>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>EMPLOYMENT</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
        <div className="w-1/5 flex-col">PRIVACY POLICY</div>
      </div>
    </footer>
  );
}
