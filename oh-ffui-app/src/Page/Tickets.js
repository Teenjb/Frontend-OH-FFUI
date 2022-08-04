import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Tickets() {

  return (
    <div>
      <Header />
      <div
        className="flex-col bg-gradient-to-b from-blue-900 to-blue-200 items-center h-24 overflow-y-hidden relative"
        style={{ minHeight: 700 }}
      >
        <h1 className="font-serif pt-20 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Your Tickets
            </h1>
        <div class="flex justify-center my-5 mx-auto py-10 px-5">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <h1 className="bg-pink-600 font-serif text-xl text-white rounded-l-lg text-center items-center justify-center px-14 py-20">
              Tickets to the Best Day of Your Life!
            </h1>
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
              Open House Fakultas Farmasi UI Vol.III</h5>
              <p class="text-gray-700 text-base mb-4">
                29 Agustus 2022 - Fakultas Farmasi UI, Salemba
              </p>
              <p class="text-gray-600 text-xs">Hybrid : Day 1 Online & Day 2 Offline</p>
              <p class="text-gray-600 text-xs">Online : Day 1 & Day 2 Offline</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tickets;
