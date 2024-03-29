import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import logo from "../Img/logo.png";

function Header() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const notLoginYet = () => {
    Toastify({
      text: "Login/Sign Up First",
      duration: 3000,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#FF0000",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const tokenLocal = JSON.parse(localStorage.getItem("token"));
      if (tokenLocal !== null && token !== "null") {
        if (tokenLocal.token !== null && tokenLocal.token !== "null") {
          setToken(tokenLocal.token);
          setName(tokenLocal.name);
          setAuthenticated(true);
        }
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleClick = (event) => {
    const { id } = event.target;
    if (id === "register") {
      window.location.href = "/register";
    }
    if (id === "login") {
      window.location.href = "/login";
    }
    if (id === "home") {
      window.location.href = "/home";
    }
    if (id === "about") {
      window.location.href = "/about";
    }
    if (id === "user") {
      window.location.href = "/profile";
    }
    if (id === "tickets") {
      window.location.href = "/tickets";
    }
    if (id === "logout") {
      localStorage.removeItem("token");
      setToken(null);
      setAuthenticated(false);
      Toastify({
        text: "Logout Success",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#87B07B",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      window.location.href = "/home";
    }
  };

  return (
    <nav className="w-full bg-[#f57ae5]">
      <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
        <div aria-label="Home. logo" role="img">
          <img
            className="w-10 h-10 md:w-auto"
            src={logo}
            alt=""
            id="home"
            onClick={(e) => handleClick(e)}
          />
        </div>
        <div>
          <button
            onClick={() => setShow(!show)}
            className={`${
              show ? "hidden" : ""
            } sm:block md:hidden text-[#f9f9fb] hover:text-[#454e5d] focus:text-[#454e5d]focus:outline-none focus:ring-2 focus:text-[#454e5d]`}
          >
            <svg
              aria-haspopup="true"
              aria-label="open Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-64 md:hidden icon icon-tabler icon-tabler-menu "
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffff"
              fill="none"
              strokeLinecap="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={16} x2={20} y2={16} />
            </svg>
          </button>
          <div
            id="menu"
            className={` ${show ? "" : "hidden"} md:block lg:block `}
          >
            <button
              onClick={() => setShow(!show)}
              className={`block md:hidden lg:hidden text-gray-500 hover:text-blue-200 focus:text-blue-200 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
            >
              <svg
                aria-label="close main menu"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            <ul className="flex font-highlight font-bold text-3xl md:text-base items-center py-5 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 md:left-5 lg:left-20 right-0 bg-white md:bg-transparent z-20">
              <li className="text-[#5b88d9] sm:text-[#f9f9fb] hover:text-[#fdf56e] focus:text-[#454e5d] cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                <a id="about" onClick={(e) => handleClick(e)}>
                  About Us
                </a>
              </li>
              <li className="text-[#5b88d9] sm:text-[#f9f9fb] hover:text-[#fdf56e] focus:text-[#454e5d] cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                <a id="tickets" onClick={(e) => handleClick(e)}>
                  Tickets
                </a>
              </li>
              <li
                className={`${
                  authenticated ? "hidden" : "block"
                } md:hidden text-[#5b88d9] sm:text-[#f9f9fb] hover:text-[#fdf56e] focus:text-[#454e5d] cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}
              >
                <a id="login" onClick={(e) => handleClick(e)}>
                  login
                </a>
              </li>
              <li
                className={`${
                  authenticated ? "hidden" : "block"
                } md:hidden text-[#5b88d9] sm:text-[#f9f9fb] hover:text-[#454e5d] focus:text-[#454e5d] cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}
              >
                <a id="register" onClick={(e) => handleClick(e)}>
                  Sign Up
                </a>
              </li>
              <li
                className={`${
                  authenticated ? "block" : "hidden"
                } md:hidden text-[#5b88d9] sm:text-[#f9f9fb] hover:text-[#454e5d] focus:text-[#454e5d] cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}
              >
                <a id="user" onClick={(e) => handleClick(e)}>
                  User
                </a>
              </li>
              <li
                className={`${
                  authenticated ? "block" : "hidden"
                } md:hidden text-[#5b88d9] sm:text-[#f9f9fb] hover:text-[#454e5d] focus:text-[#454e5d] cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}
              >
                <a id="logout" onClick={(e) => handleClick(e)}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-highlight inline-flex space-x-2 items-center">
          <button
            className={`${
              authenticated ? "md:hidden" : "md:block"
            } focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden  transition duration-100 ease-in-out text-[#f9f9fb] hover:text-[#454e5d] focus:text-[#454e5d] rounded-full border border-[#f9f9fb] px-4 sm:px-8 py-1 sm:py-3 text-s`}
            id="login"
            onClick={(e) => handleClick(e)}
          >
            Login
          </button>
          <button
            className={`${
              authenticated ? "md:hidden" : "md:block"
            } focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-100 ease-in-out bg-[#fdf56e] hover:bg-[#454e5d] hover:text-[#f9f9fb] rounded-full border border-[#454e5d] text-[#454e5d] px-4 sm:px-8 py-1 sm:py-3 text-s`}
            id="register"
            onClick={(e) => handleClick(e)}
          >
            Sign Up
          </button>
          <button
            className={`${
              authenticated ? "md:block" : "md:hidden"
            } focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-50 ease-in-out bg-[#fdf56e] hover:bg-[#454e5d] hover:text-[#f9f9fb] rounded-full border border-[#454e5d] text-[#454e5d] px-4 sm:px-8 py-1 sm:py-3 text-s`}
            id="user"
            onClick={(e) => handleClick(e)}
          >
            HI! {name}
          </button>
          <button
            className={`${
              authenticated ? "md:block" : "md:hidden"
            } focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-100 ease-in-out  text-[#f9f9fb] hover:text-[#454e5d] focus:text-[#454e5d] rounded-full border border-[#f9f9fb] px-4 sm:px-8 py-1 sm:py-3 text-s`}
            id="logout"
            onClick={(e) => handleClick(e)}
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
