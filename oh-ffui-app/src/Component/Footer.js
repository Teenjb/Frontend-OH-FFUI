import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import twitter from "../Img/icons8-twitter-120.png";
import email from "../Img/icons8-mail-90.png";
import sp1 from "../Img/logoprima.png"
import sp2 from "../Img/logopertamina.JPEG";
import sp3 from "../Img/Logo-Permata.png";
import mp1 from "../Img/intipkuliah.PNG"
import mp2 from "../Img/InfoVolunteers.png"
import mp3 from "../Img/logo media event.png"
import mp4 from "../Img/logo info.event_.png"
import mp5 from "../Img/informasievent.JPG"
import mp6 from "../Img/EventH.png"
import mp7 from "../Img/Kawankampus.png"
import mp8 from "../Img/LOGO (1).png";
import mp9 from "../Img/LOGO @eventcampus.png";
import mp10 from "../Img/logo eventpelajar.png";
import mp11 from "../Img/Logo Mading Event Cerah.png";
import mp12 from "../Img/Logo SL Terbaru.png";

function Footer(){
    return(
        <footer className="w-full border-b bg-[#70bae9]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 items-center justify-center">
          <div className="grid items-center justify-center">
            <h4 className="font-serif py-5 text-white text-xl text-center leading-7 md:leading-10">Sponsors</h4>
            <div className="flex-wrap md:flex md:flex-auto md:my-4 items-center justify-center">
              <img className="h-24 p-2 md:h-32" src={sp1} alt="" />
              <img className="h-24 p-2 md:h-32" src={sp2} alt="" />
              <img className="h-24 p-2 md:h-32" src={sp3} alt="" />
            </div>
          </div>
          <div className="relative items-center justify-center">
            <h4 className="font-serif py-5 text-white text-xl text-center leading-7 md:leading-10">Media Partners</h4>
            <div className="flex flex-auto md:pt-4 items-center justify-center">
              <img className="h-10 md:h-16" src={mp2} alt="" />
              <img className="h-10 bg-white mx-1 md:h-16" src={mp3} alt="" />
              <img className="h-8 md:h-14" src={mp1} alt="" />
            </div>
            <div className="flex my-1 flex-auto items-center justify-center">
              <img className="h-8 md:h-14" src={mp5} alt="" />
              <img className="h-10 bg-white mx-1 md:h-16" src={mp4} alt="" />
              <img className="h-8 md:h-14" src={mp6} alt="" />
              <img className="h-8 md:h-14 mx-1" src={mp7} alt="" />
            </div>
            <div className="flex my-1 flex-auto items-center justify-center">
              <img className="h-8 md:h-14" src={mp8} alt="" />
              <img className="h-10 bg-white mx-1 md:h-16" src={mp9} alt="" />
              <img className="h-8 md:h-14" src={mp10} alt="" />
            </div>
            <div className="flex my-1 flex-auto items-center justify-center">
              <img className="h-8 md:h-14" src={mp11} alt="" />
              <img className="h-10 bg-white mx-1 md:h-16" src={mp12} alt="" />
            </div>
          </div>
        </div>
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
        <div className="bg-[#f57ae5] py-5 flex items-center flex-row justify-center relative top-0 bottom-0 left-0 right-0">
          <p className="text-[#454e5d]text-sm font-bold">
            All rights reserved © OH FF UI VOL.IV{" "}
          </p>
        </div>
      </footer>
    )
}

export default Footer;