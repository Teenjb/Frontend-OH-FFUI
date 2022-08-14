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
          <div className="flex flex-wrap items-center py-5 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
            <a className="flex justify-evenly items-center mx-3 px-2" href="https://www.instagram.com/openhouseffui/" target="_blank">
              <img className="h-10 w-10" src={instagram} alt="" />
            </a>
            <a className="flex justify-evenly items-center mx-3 px-2" href="https://www.tiktok.com/@openhouseffui" target="_blank">
              <img className="h-10 w-10" src={tiktok} alt="" />
            </a>
            <a className="flex justify-evenly items-center mx-3 px-2" href="https://twitter.com/openhouseffui" target="_blank">
              <img className="h-10 w-10" src={twitter} alt="" />
            </a>
            <a className="flex justify-evenly items-center mx-3 px-2" href="mailto:openhouseffuilvol3@gmail.com">
              <img className="h-8 w-8 mr-2" src={email} alt="" />
            </a>
            <a className="flex justify-evenly items-center mx-3 px-2" href="https://line.me/R/ti/p/@rwq3795k" target="_blank">
              <img className="h-10 w-10" src={line} alt="" />
            </a>
            <a className="flex justify-evenly items-center mx-3 px-2" href="https://api.whatsapp.com/send/?phone=6288290087083&text&type=phone_number&app_absent=0" target="_blank">
              <img className="h-10 w-10" src={whatsapp} alt="" />
            </a>
          </div>
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