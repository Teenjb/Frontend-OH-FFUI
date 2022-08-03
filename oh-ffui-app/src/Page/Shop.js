import "../index.css";
import React, { useState, useEffect } from "react";
import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import "toastify-js/src/toastify.css";
import ShopCard from "../Component/ShopCard";
import ShopCardWithDesc from "../Component/ShopCardWithDesc";
import Header from "../Component/Header";

function Shop() {
  return (
    <div
      className="grid h-full bg-white overflow-y-hidden relative"
      style={{ minHeight: 700 }}
    >
      <Header />
      <div className="relative">
        <div className="bg-cyan-600 w-full mx-auto md:flex md:flex-col items-center py-12 sm:py-24">
          <div className="md:w-11/12 flex justify-center items-center w-full mb-5 sm:mb-10">
            <h1 className="font-serif py-10 text-white text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Shop
            </h1>
          </div>
        </div>
        <div className="relative container mx-auto py-6 sm:py-12 lg:flex grid justify-around items-center flex-col mb-5 sm:mb-10">
          <h1 className="font-serif py-10 text-black text-5xl xl:text-6xl text-center leading-7 md:leading-10">
            Merch
          </h1>
          <div class="min-h-screen flex items-center justify-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
              <ShopCard id="kaosA" name="Kaos A" price="99.000" />
              <ShopCard id="kasoB" name="Kaos B" price="99.000" />
              <ShopCard id="stikerSetA" name="Stiker Set A" price="99.000" />
              <ShopCard id="stikerSetB" name="Stiker Set B" price="99.000" />
              <ShopCard id="toteBagA" name="Tote Bag A" price="99.000" />
              <ShopCard id="toteBagB" name="Tote Bag B" price="99.000" />
              <ShopCard id="notebookA" name="Notebook A" price="99.000" />
              <ShopCard id="notebookB" name="Notebook B" price="99.000" />
              <ShopCard id="pouch" name="Pouch" price="99.000" />
              <ShopCard id="eMoney" name="E-Money" price="99.000" />
              <ShopCard id="lanyard" name="Lanyard" price="99.000" />
            </div>
          </div>
        </div>
        <div className="relative container mx-auto lg:flex grid justify-around items-center flex-col">
          <h1 className="font-serif py-10 text-black text-5xl xl:text-6xl text-center leading-7 md:leading-10">
            Bundles
          </h1>
          <div class=" flex items-center justify-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
              <ShopCardWithDesc
                id="pakeA1"
                name="Paket A1"
                price="99.000"
                desc="kaos A, sticker set A, notebook A, tote bag A, pouch, emoney + lanyard"
              />
              <ShopCardWithDesc
                id="paketA2"
                name="Paket A2"
                price="99.000"
                desc="Kaos B, sticker set B, notebook B, totebag B, pouch, emoney B + lanyard"
              />
              <ShopCardWithDesc
                id="paketB1"
                name="Paket B1"
                price="99.000"
                desc="Sticker set A, notebook A, tote bag A, pouch, emoney + lanyard"
              />
              <ShopCardWithDesc
                id="paketB2"
                name="Paket B2"
                price="99.000"
                desc="Sticker set B, notebook B, totebag B, pouch, emoney B + lanyard"
              />
              <ShopCardWithDesc
                id="pakeC1"
                name="Paket C1"
                price="99.000"
                desc="Sticker set A, notebook A, kaos A, pouch"
              />
              <ShopCardWithDesc
                id="pakeC2"
                name="Paket C2"
                price="99.000"
                desc="Sticker set B, notebook B, kaos B, pouch"
              />
            </div>
          </div>
        </div>
        <div className="relative container mx-auto lg:flex grid justify-around items-center flex-col">
          <h1 className="font-serif py-10 text-black text-5xl xl:text-6xl text-center leading-7 md:leading-10">
            Workshop
          </h1>
          <div class=" flex items-center justify-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
              <ShopCardWithDesc
                id="pulverizeKit"
                name="Pulverize Kit"
                price="99.000"
                desc="Tablet vitamin B, kertas perkamen, sudip, pot plastik, lumpang alu, cangkang kapsul, etiket putih"
              />
              <ShopCardWithDesc
                id="sanitizerKit"
                name="Sanitizer Kit"
                price="99.000"
                desc="Texapon (SLES), nacl, glycerin, H2O2 3%, minyak atsiri/essence, aquades, beaker glass plastik, batang pengaduk, botol pump, botol plastik 10 ml, botol plastik 500 ml, corong plastik, wadah puding"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-b bg-blue-900">
        <div>
          <h2 className="text-pink-500 font-black flex md:text-3xl text-base items-center py-10 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
            {" "}
            Open House FF UI Vol.III{" "}
          </h2>
          <p className="text-blue-200 justify-center font-normal text-center md:relative text-sm top-0 bottom-0 left-0 right-0">
            Lorem Ipsum bla bla bla blaaaa Lorem Ipsum bla bla bla blaaaa
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
    </div>
  );
}
export default Shop;
