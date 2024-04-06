import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="p-5 pt-10 px-12 bg-[#005067] text-[#ffffff] w-full flex flex-col justify-center lg:flex-row ">
        <div className="lg:w-1/5 w-full flex justify-center">
          <img className="mt-6" src={coloredLogo}></img>
        </div>

        <div className="lg:w-1/5 flex-col w-full">
          <div className="text-lg font-bold mb-4 flex justify-center mt-4 lg:mt-auto pb-3">
            CONTACT US
          </div>
          <div className="text-sm">
            <p className="flex justify-center">660 Main Street </p>
            <p className="flex justify-center pb-3">Sturbridge, MA 01566</p>
            <p className="flex justify-center">140 Pine Street</p>
            <p className="flex justify-center pb-3">Florence, MA 01062</p>
            <p className="flex justify-center">(413) 568-4696</p>
            <p className="flex justify-center">Info@macommclean.com</p>
          </div>
        </div>

        <div className="lg:w-1/5 flex-col">
          <div className="text-lg font-bold mb-4">HOURS</div>
          <div>
            <p className="font-bold justify-center">Mon - Fri</p>
            <p className="text-sm">8 am - 5pm</p>
          </div>
          <p className="font-bold">Sat & Sun</p>
          <p className="text-sm">Closed</p>
        </div>

        <div className="lg:w-1/5 flex-col">
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
