import React, { useState,useEffect } from "react";
import '../index.css';
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Tickets() {
    return (
        <div
      className="bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative"
      style={{ minHeight: 700 }}>
          <Header />
          <div class="flex justify-center my-5 mx-auto py-10 px-5">
            <div class="flex flex-col md:flex-row md:max-w-xl  items-center rounded-lg bg-white shadow-lg">
                <h1 className='bg-gray-600 font-serif text-xl text-white md:rounded-l-lg  text-center items-center justify-center px-5 py-32'>Buy To Unlocked The Ticket!</h1>
                <div class="p-6 flex flex-col justify-start px-10">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Open House Fakultas Farmasi UI Vol.III</h5>
                <p class="text-gray-700 text-base mb-4">
                    29 Agustus 2022 - Fakultas Farmasi UI, Salemba
                </p>
                <p class="text-gray-600 text-xs">Hybrid : Day 1 Online & Day 2 Offline</p>
                <p class="text-gray-600 text-xs">Online : Day 1 & Day 2 Offline</p>
                <button className="w-full my-4 flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white  border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700">Buy Here!</button>
                </div>
            </div>
            </div>
        <Footer />
        </div>
    );
}

export default Tickets;