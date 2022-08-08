import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";

function Footer(){
    return(
        <footer className="w-full border-b bg-blue-900">
        <div>
          <h2 className="text-pink-500 font-black flex md:text-3xl text-base items-center py-10 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
            {" "}
            Open House FF UI Vol.III{" "}
          </h2>
          <p className="text-blue-200 justify-center font-normal text-center md:relative text-sm top-0 bottom-0 left-0 right-0">
            Lorem Ipsum bla bla bla blaaaa Lorem Ipsum bla bla bl
          </p>
          <ul className="flex items-center py-5 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
            <li>
              <img className="h-10 w-10" src={tiktok} alt="" />
            </li>
            <li>
              <img className="h-10 w-10" src={instagram} alt="" />
            </li>
            <li>
              <img className="h-10 w-10" src={line} alt="" />
            </li>
            <li>
              <img className="h-8 w-8" src={whatsapp} alt="" />
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