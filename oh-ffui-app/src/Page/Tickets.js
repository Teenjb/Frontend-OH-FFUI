import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Tickets() {
  const [tickets, setTickets] = useState(null);
  const [ticketCount, setTicketCount] = useState(null);
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [file, setFile] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typeClicked, setTypeClicked] = useState(null);

  const endpoint = "https://api-oh-ffui-2022.herokuapp.com/api";

  function loadTicketsCount() {
    axios
      .get(endpoint + "/tickets/count")
      .then((res) => {
        setTicketCount(res.data);
        setLoading(false);
      })
      .catch((err) => {
        //console.log(err);
      });
  }
  function loadTickets() {
    axios
      .get(endpoint + "/tickets/getTicket", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.entry.length > 0) {
          setTickets(...res.data.entry);
          setLoading(false);
        } else {
          setTickets(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  }

  useEffect(() => {
    loadTicketsCount();
    const tokenLocal = JSON.parse(localStorage.getItem("token"));
    if (tokenLocal) {
      if (tokenLocal.token !== null && tokenLocal.token !== "null") {
        setToken(tokenLocal.token);
        setName(tokenLocal.name);
        setAuthenticated(true);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token !== null) {
      loadTickets();
    }
  }, [token]);

  useEffect(() => {
    setTimeout(() => {
      loadTicketsCount();
    }, 3000);
  }, [ticketCount]);

  const handleFileChange = async (e) => {
    const { files } = e.target;
    setFile(files[0]);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    if (id === "close") {
      setPopUp(false);
    }
    if (id === "open") {
      setTypeClicked(e.target.value);
      setPopUp(true);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const data = `{"ticketID": "${
      "ticket" + name.replace(/\s/g, "")
    }", "ticketType": "${typeClicked}"}`;
    formData.append("data", data);
    console.log(data);
    formData.append("files.paymentPhoto", file);
    axios({
      method: "POST",
      url: endpoint + "/tickets/create",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          Toastify({
            text: "Buying Failed please contact admin",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#FF0000",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
          setLoading(false);
        } else {
          Toastify({
            text: "Buying Success",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#87B07B",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
          setTimeout(() => {
            setLoading(false);
            window.location.reload();
          }, 500);
        }
      })
      .catch((err) => {
        Toastify({
          text: "Buying Failed please contact admin",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#FF0000",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        setLoading(false);
      });
  };

  return (
    <div>
      {loading && <Loading />}
      <Header />
      <div
        className="flex-col bg-gradient-to-b from-blue-900 to-blue-200 items-center h-full overflow-y-hidden relative"
        style={{ minHeight: 700 }}
      >
        {!tickets && (
          <>
            <h1 className="font-serif pt-20 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Buy Tickets
            </h1>
            <div className="flex justify-center my-5 mx-auto py-10 px-5">
              <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
                <h1 className="bg-gray-600 font-serif text-xl text-white md:rounded-l-lg  text-center items-center justify-center px-5 py-28">
                  Buy To Unlock The Ticket!
                </h1>
                {ticketCount && (
                  <h1 className="absolute bg-red-600 font-serif text-xl text-white md:rounded-br-lg md:rounded-tl-lg  text-center items-center justify-center px-5 py-2">
                    {75 - ticketCount.countHybrid} left
                  </h1>
                )}
                <div className="p-6 flex flex-col justify-start px-10">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Open House Fakultas Farmasi UI Vol.III - Hybrid
                  </h5>
                  <p className="text-gray-700 text-sm mb-4">
                    19 November 2022 - Online
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    26 November 2022 - Offline (Fakultas Farmasi UI, Depok)
                  </p>
                  <p className="text-pink-500 text-md font-semibold">
                    Price : Rp. 35.000
                  </p>
                  <button
                    id="open"
                    className={`${
                      !authenticated ? "hidden" : "block"
                    } w-full mt-4 flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white  border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700`}
                    value="Hybrid"
                    onClick={(e) => handleOnClick(e)}
                  >
                    Buy Here!
                  </button>
                  <button
                    className={`${
                      authenticated ? "hidden" : "block"
                    } w-full mt-4 flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-gray-500 bg-white  border-gray-500`}
                    value="Online"
                  >
                    Login First
                  </button>
                </div>
              </div>
            </div>
            <h1 className="font-serif  text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Or
            </h1>
            <div className="flex justify-center my-5 mx-auto py-10 px-5">
              <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
                <h1 className="bg-gray-600 font-serif text-xl text-white md:rounded-l-lg  text-center items-center justify-center px-5 py-28">
                  Buy To Unlock The Ticket!
                </h1>
                {ticketCount && (
                  <h1 className="absolute bg-red-600 font-serif text-xl text-white md:rounded-br-lg md:rounded-tl-lg  text-center items-center justify-center px-5 py-2">
                    {500 - ticketCount.countOnline} left
                  </h1>
                )}
                <div className="p-6 flex flex-col justify-start px-10">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Open House Fakultas Farmasi UI Vol.III - Online
                  </h5>
                  <p className="text-gray-700 text-sm mb-4">
                    19 November 2022 - Online
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    26 November 2022 - Online
                  </p>
                  <p className="text-pink-500 text-md font-semibold">
                    Price : Rp. 25.000
                  </p>
                  <button
                    id="open"
                    className={`${
                      !authenticated ? "hidden" : "block"
                    } w-full mt-4 flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white  border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700`}
                    value="Online"
                    onClick={(e) => handleOnClick(e)}
                  >
                    Buy Here!
                  </button>
                  <button
                    className={`${
                      authenticated ? "hidden" : "block"
                    } w-full mt-4 flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-gray-500 bg-white  border-gray-500`}
                    value="Online"
                  >
                    Login First
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {tickets && (
          <>
            <div className="flex justify-center my-5 mx-auto py-10 px-5">
              <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
                <h1 className="bg-pink-600 font-serif text-xl text-white md:rounded-l-lg  text-center items-center justify-center px-5 py-28">
                  Tickets to the Best Day of Your Life!
                </h1>
                {tickets.paymentValidation === null && (
                  <h1 className="absolute bg-orange-500 font-serif text-xl text-white md:rounded-br-lg md:rounded-tl-lg  text-center items-center justify-center px-5 py-2">
                    Validating Payment...
                  </h1>
                )}
                {tickets.paymentValidation === true && (
                  <h1 className="absolute bg-green-500 font-serif text-xl text-white md:rounded-br-lg md:rounded-tl-lg  text-center items-center justify-center px-5 py-2">
                    Valid
                  </h1>
                )}
                {tickets.paymentValidation === false && (
                  <h1 className="absolute bg-yellow-300 font-serif text-xl text-white md:rounded-br-lg md:rounded-tl-lg  text-center items-center justify-center px-5 py-2">
                    refunded
                  </h1>
                )}
                <div className="p-6 flex flex-col justify-center px-10">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Open House Fakultas Farmasi UI Vol.III -{" "}
                    {tickets.ticketType}
                  </h5>
                  <p className="text-gray-700 text-sm mb-4">
                    19 November 2022 - Online
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    26 November 2022 - {tickets.ticketType}
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    ID: {tickets.ticketID}
                  </p>
                  <p className="text-pink-500 text-md font-semibold">
                    Price :{" "}
                    {tickets.ticketType === "Hybrid"
                      ? "Rp. 35.000"
                      : "Rp. 25.000"}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
      {popUp && (
        <div>
          <div
            id="popup-modal"
            className="overflow-y-auto overflow-x-hidden fixed flex items-center justify-center top-0 right-0 left-0 z-30 h-full bg-black bg-opacity-30"
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-blue-900 rounded-lg shadow dark:bg-blue-900">
                <button
                  id="close"
                  type="button"
                  className="absolute top-3 right-2.5 text-blue-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="popup-modal"
                  onClick={(e) => handleOnClick(e)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 w-14 h-14 text-blue-200 dark:text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-blue-200 dark:text-blue-200">
                    Masukkan Bukti Pembayaran
                  </h3>
                  <h5 className="mb-1 text-left text-sm font-bold text-blue-200 dark:text-blue-200">
                    Pembayaran Melalui:
                  </h5>
                  <ul className="mb-5 text-left text-sm font-normal text-blue-200">
                    <li>Gopay</li>
                    <li>Bank Mandiri</li>
                    <li>Bank BNI</li>
                  </ul>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col justify-center items-center w-full h-64 mb-10 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100"
                  >
                    {!file && (
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="mb-3 w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Image (MAX. 10MB)
                        </p>
                      </div>
                    )}
                    {file && (
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <img
                          src={file}
                          alt="payment proof"
                          className="w-full h-full object-cover"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {file.name}
                        </p>
                      </div>
                    )}
                    <input
                      id="dropzone-file"
                      onChange={(e) => handleFileChange(e)}
                      type="file"
                      className="hidden"
                    />
                  </label>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    className={`${
                      file
                        ? "bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
                        : "text-gray-400 bg-white border-gray-500"
                    } text-white font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
                    onClick={(e) => handleOnSubmit(e)}
                  >
                    Submit
                  </button>
                  <button
                    id="close"
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    onClick={(e) => handleOnClick(e)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tickets;
