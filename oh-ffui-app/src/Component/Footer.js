import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import twitter from "../Img/icons8-twitter-120.png";
import email from "../Img/icons8-mail-90.png";


function Footer(){
    return(
        <footer className="w-full border-b bg-blue-900">
        <div>
          <ul className="grid md:flex items-center py-5 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
            <li className="flex justify-evenly items-center mx-3 px-2">
              <img className="h-10 w-10" src={instagram} alt="" />
              <p className="font-medium text-white">@openhouseffui</p>
            </li>
            <li className="flex justify-evenly items-center mx-3 px-2">
              <img className="h-10 w-10" src={tiktok} alt="" />
              <p className="font-medium text-white">@openhouseffui</p>
            </li>
            <li className="flex justify-evenly items-center mx-3 px-2">
              <img className="h-10 w-10" src={twitter} alt="" />
              <p className="font-medium text-white">@openhouseffui</p>
            </li>
            <li className="flex justify-evenly items-center mx-3 px-2">
              <img className="h-8 w-8 mr-2" src={email} alt="" />
              <p className="font-medium text-white">openhouseffuilvol3@gmail.com</p>
            </li>
            <li className="flex justify-evenly items-center mx-3 px-2">
              <img className="h-10 w-10" src={line} alt="" />
              <p className="font-medium text-white">@rwq3795k</p>
            </li>
            <li className="flex justify-evenly items-center mx-3 px-2">
              <img className="h-10 w-10" src={whatsapp} alt="" />
              <p className="font-medium text-white">+6288290087083</p>
            </li>
          </ul>
        </div>
        <div className="bg-pink-500 py-5 flex items-center flex-row justify-center relative top-0 bottom-0 left-0 right-0">
          <p className="text-blue-900 text-sm font-bold">
            All rights reserved © OH FF UI VOL.III{" "}
          </p>
        </div>
      </footer>
    )
}

export default Footer;