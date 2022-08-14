import "../index.css";
import React, { useEffect, useState } from "react";
import CartCard from "../Component/CartCard";
import CountCart from "../helper/CountCart";
import CountTotal from "../helper/CountTotal";
import axios from "axios";
import Loading from "../Component/Loading";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [popup, setPopup] = useState(false);
  const [paymentProof, setPaymentProof] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [cartData, setCartData] = useState(null);
  const [total, setTotal] = useState(0);
  const endpoint ="https://api-oh-ffui-2022.herokuapp.com/api/preorders/create";
  const hostendpoint = "http://localhost:1337/api/preorders/create";

  useEffect(() => {
    const tokenLocal = JSON.parse(localStorage.getItem("token"));
    if (tokenLocal) {
      if (tokenLocal.token !== null && tokenLocal.token !== "null") {
        setToken(tokenLocal.token);
      }
    }
  }, []);

  const handleClick = (event) => {
    const { id } = event.target;
    if (id === "continueShopping") {
      window.location.href = "/shop";
    }
    if (id === "checkout") {
      if(shippingPrice === 0){
        Toastify({
          text: "Masukkan shipping price",
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
      }else{
        setCartData(JSON.stringify(cart));
        setTotal(CountTotal(CountCart(cart), shippingPrice));
        setPopup(true);
      }
    }
    if (id === "close") {
      setPopup(false);
    }
    if (id === "login") {
      window.location.href = "/home";
    }
  };

  const handleOnChange = async (e) => {
    const { id, value } = e.target;
    const newCart = await cart.map((item) => {
      if (item.id === id) {
        item.quantity = parseInt(value);
      }
      return item;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    setShippingPrice(value);
  };

  const handleFileChange = async (e) => {
    const { files } = e.target;
    setPaymentProof(files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    const data = `{"Order": ${cartData}, "status": "Requested","totalPrice":"${total}"}`;
    formData.append("data", data);
    formData.append("files.paymentPhoto", paymentProof);
    axios({
      method: "POST",
      url: endpoint,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setCart(null);
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
      localStorage.removeItem("cart");
      setLoading(false);
      setPopup(false);
    }).catch((err) => {
      setLoading(false);
      setPopup(false);
      Toastify({
        text: "Buying Failed",
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
    });
  };

  async function getCart() {
    const getItem = JSON.parse(localStorage.getItem("cart"));
    if (getItem !== null) {
      setCart(getItem);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  const remove = (e) => {
    const newCart = cart.filter((item) => item.id !== e.target.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="mx-auto w-full h-full pt-10">
        <a
          href="#"
          id="continueShopping"
          onClick={(e) => handleClick(e)}
          className="flex font-semibold text-pink-500 text-sm mx-10"
        >
          <svg
            className="fill-current mr-2 text-pink-500 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </a>
        <div className="grid md:flex shadow-md my-5">
          <div className="md:w-3/4 w-full h-full bg-white px-4 md:px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-serif text-2xl md:text-4xl">Shopping Cart</h1>
              <h2 className="font-semibold text-xl">
                {cart ? cart.length : "0"} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/12">
                Product
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/12 text-center">
                Qty
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/12 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-4/12 text-center">
                Total
              </h3>
            </div>
            {cart &&
              cart.map((item, index) => (
                <CartCard
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  remove={remove}
                  quantity={item.quantity}
                  change={handleOnChange}
                />
              ))}
          </div>

          <div id="summary" className="md:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cart ? cart.length : "0"}
              </span>
              <span className="font-semibold text-sm">
                {cart ? CountCart(cart) : "0"}
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between mt-10 mb-5">
                <h3 className="font-medium items-center inline-block text-sm uppercase">
                  Shipping
                </h3>
                <a
                className= "bg-white border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 text-sm text-center hover:text-white uppercase rounded-full w-1/3"
                href="https://www.wahana.com/"
                target="_blank"
              >
                Cek Ongkir
              </a>
              </div>
              <input
                id="shipping"
                name="shipping"
                type="number"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={shippingPrice}
                min="1"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  {cart ? CountTotal(CountCart(cart), shippingPrice) : "0"}
                </span>
              </div>
              <button
                id="checkout"
                className={`${
                  !token ? "hidden" : "block"
                } bg-white border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 py-3 text-sm hover:text-white uppercase rounded-full w-full`}
                onClick={(e) => handleClick(e)}
              >
                Checkout
              </button>
              <button
                id="login"
                className={`${
                  token ? "hidden" : "block"
                } bg-white border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 py-3 text-sm hover:text-white uppercase rounded-full w-full`}
                onClick={(e) => handleClick(e)}
              >
                Login First
              </button>
            </div>
          </div>
        </div>
        {popup && (
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
                    onClick={(e) => handleClick(e)}
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
                      <li>BNI 1262422154 a.n. Jazmina Nur Shobrina</li>
                      <li>OVO 081292718692</li>
                      <li>GOPAY 081292718692</li>
                    </ul>
                    <h5 className="mb-5 bg-red-600 text-center p-2 rounded-lg text-sm font-normal text-blue-200 dark:text-blue-200">
                      Jangan lupa untuk isi keterangan berita transfer dengan{" "}
                      <b>Username Account - PO</b> kalian saat melakukan
                      pembayaran!
                    </h5>
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col justify-center items-center w-full h-64 mb-10 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100"
                    >
                      {!paymentProof && (
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Image (MAX. 10MB)
                          </p>
                        </div>
                      )}
                      {paymentProof && (
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <img
                            src={paymentProof}
                            alt="payment proof"
                            className="w-full h-full object-cover"
                          />
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {paymentProof.name}
                          </p>
                        </div>
                      )}
                      <input
                        id="dropzone-file"
                        onChange={(e) => handleFileChange(e)}
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                      />
                    </label>
                    <button
                      data-modal-toggle="popup-modal"
                      type="button"
                      disabled={!paymentProof}
                      className={`${
                        paymentProof
                          ? "bg-pink-500 text-white hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
                          : "text-gray-500 bg-white border-gray-500"
                      } font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
                      onClick={(e) => handleOnSubmit(e)}
                    >
                      Submit
                    </button>
                    <button
                      id="close"
                      data-modal-toggle="popup-modal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      onClick={(e) => handleClick(e)}
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
    </div>
  );
}

export default Cart;
