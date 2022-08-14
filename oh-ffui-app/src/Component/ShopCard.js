import "../index.css";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import AddCart from "../helper/AddCart";
import sizeChart from "../Img/Size Chart.png";
import ParsePrice from "../helper/ParsePrice";

function ShopCard(props) {
  const [popUp, setPopUp] = useState(false);
  const [size, setSize] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [sizePrice, setSizePrice] = useState(0);
  const [sleevePrice, setSleevePrice] = useState(0);
  const handleAddCart = () => {
    const total = parseInt(sizePrice) + parseInt(sleevePrice);
    AddCart(props, total, sleeve, size).then((res) => {
    console.log(res);
    if (res === "success") {
      Toastify({
        text: props.name + " added to Cart",
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
    } else {
      Toastify({
        text: "already in cart",
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
    }});
    setPopUp(false);
  };

  const handleOnClick = (e) => {
    const { id } = e.target;
    if (
      id === "kaosA" ||
      id === "kaosB" ||
      id === "paketA1" ||
      id === "paketA2" ||
      id === "paketC1" ||
      id === "paketC2"
    ) {
      setPopUp(true);
    } else if (id === "close") {
      setPopUp(false);
    } else {
      handleAddCart();
    }
  };

  const handleOnSelect = (e) => {
    const { id, value, options } = e.target;
    if (id === "size") {
      if (value === "Select") {
        setSize(null);
      } else {
        setSize(value);
        const index = options.selectedIndex;
        console.log(options[index].getAttribute("price"));
        setSizePrice(options[index].getAttribute("price"));
      }
    }
    if (id === "sleeve") {
      if (value === "Select") {
        setSleeve(null);
      } else {
        setSleeve(value);
        const index = options.selectedIndex;
        console.log(options[index].getAttribute("sleeveprice"));
        setSleevePrice(options[index].getAttribute("sleeveprice"));
      }
    }
  };

  return (
    <div className="rounded-md px-10 py-10 w-auto text-center">
      <img src={props.image} alt="" className="rounded-xl w-96 mb-4" />
      <div className="">
        <h3 className="font-serif text-3xl text-black pb-2">{props.name}</h3>
        <h5 className="text-xl text-black pb-2 font-semibold">
          Rp {ParsePrice(props.price)}
        </h5>
        <p className="text-sm">{props.desc}</p>
        <button
          type="submit"
          id={props.id}
          className="w-full my-4 flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white  border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
          onClick={(e) => handleOnClick(e)}
        >
          Add to cart
        </button>
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
                    <h3 className="mb-2 text-lg font-normal text-blue-200 dark:text-blue-200">
                      Choose Size
                    </h3>
                    <img
                      src={sizeChart}
                      className="flex text-center w-full items-center justify-center rounded-xl px-10 py-5"
                    />
                    <select
                      id="size"
                      value={size}
                      onChange={(e) => handleOnSelect(e)}
                      className={` appearance-none block w-full mb-5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    >
                      <option value="Select">Pilih Ukuran</option>
                      <option value="S" price={0}>
                        S
                      </option>
                      <option value="M" price={0}>
                        M
                      </option>
                      <option value="L" price={2000}>
                        L
                      </option>
                      <option value="XL" price={4000}>
                        XL
                      </option>
                      <option value="XXL" price={6000}>
                        XXL
                      </option>
                      <option value="XXXL" price={8000}>
                        XXXL
                      </option>
                    </select>
                    <select
                      id="sleeve"
                      value={sleeve}
                      onChange={(e) => handleOnSelect(e)}
                      className={` appearance-none block w-full mb-5 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    >
                      <option value="Select">Pilih Lengan</option>
                      <option value="LP" sleeveprice={10000}>
                        Lengan Panjang
                      </option>
                      <option value=" " sleeveprice={0}>
                        Lengan Pendek
                      </option>
                    </select>
                    <button
                      data-modal-toggle="popup-modal"
                      type="button"
                      disabled={!size}
                      className={`${
                        size
                          ? "bg-pink-500 hover:bg-pink-700 focus:ring-4 text-white focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
                          : "text-gray-500 bg-white border-gray-500"
                      } font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
                      onClick={(e) => handleAddCart(e)}
                    >
                      Add Cart
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
    </div>
  );
}

export default ShopCard;
