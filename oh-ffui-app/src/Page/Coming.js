import Header from "../Component/Header";
import Footer from "../Component/Footer";
import '../index.css';

import React from "react";
function Coming() {
    return (
        <div>
        <Header />
        <div
        className="flex-col bg-gradient-to-b from-blue-900 to-blue-200 items-center h-24 overflow-y-hidden relative"
        style={{ minHeight: 700 }}>
        <div className="mt-32">
        <h1 className="font-serif pt-28 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Coming Soon!
            </h1>
        <div class="flex justify-center my-5 mx-auto py-10 px-5">
          <h5 className="text-2xl font-medium text-white">Stay Tuned for more Awesome Stuff!</h5>
        </div>
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default Coming;