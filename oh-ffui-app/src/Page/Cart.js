import '../index.css';
import React, { useEffect, useState } from "react";
import CartCard from '../Component/CartCard';
import CountCart from '../helper/CountCart';
import CountTotal from '../helper/CountTotal';
import axios from 'axios';

function Cart() {
    const [cart, setCart] = useState([]);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [popup, setPopup] = useState(false);
    const [paymentProof, setPaymentProof] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const endpoint = "https://api-oh-ffui-2022.herokuapp.com/api/preorders/create";
    const hostendpoint = "http://localhost:1337/api/preorders/create";

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);


    const handleClick = (event) => {
        const {id} = event.target;
        if(id === 'continueShopping'){
            window.location.href = '/shop';
        }
        if(id === 'checkout'){
            setPopup(true);
        }
        if(id === 'close'){
            setPopup(false);
        }
        if(id === 'login'){
            window.location.href = '/home';
        }
    }

    const handleOnChange = async (e)=>{
        const {id, value} = e.target;
        const newCart = await cart.map(item => {
            if(item.id === id){
                item.quantity = parseInt(value);
            }
            return item;
        }
        );
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    const handleOnSelect = async (e)=>{
        const {value} = e.target;
        setShippingPrice(value);
    }

    const handleFileChange = async (e)=>{
        const {files} = e.target;
        console.log(files[0]);
        setPaymentProof(files[0]);
    }

    const handleOnSubmit = async (e)=>{
        e.preventDefault();
        console.log(token);
        setLoading(true);
        const formData = new FormData();
        const data = '{"merchandises": ["8", "9"], "status": "Requested"}'
        formData.append('data', data);
        formData.append('files.paymentPhoto', paymentProof);
        console.log(formData);
        axios({
            method: 'POST',
            url: 'http://localhost:1337/api/preorders/create',
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res);
            setLoading(false);
            setPopup(false);
        });
    }

    async function getCart() {
        const getItem = JSON.parse(localStorage.getItem('cart'));
        if(getItem !== null){
            setCart(getItem);
        }
    }

    useEffect(() => {
        getCart();
    },[]);
    
    const remove = (e)=>{
        const newCart = cart.filter(item => item.id !== e.target.id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    return (
        <div>
        {loading && <div className="flex fixed z-50 h-screen w-full items-center justify-center bg-black bg-opacity-50">
                <div role="status">
                    <svg aria-hidden="true" className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-white fill-pink-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>}
            <div className="mx-auto w-full h-full pt-10">
                <a href="#" id='continueShopping' onClick={(e)=>(handleClick(e))} className="flex font-semibold text-pink-500 text-sm mx-10">
                    <svg className="fill-current mr-2 text-pink-500 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                Continue Shopping
                </a>
                <div className="grid md:flex shadow-md my-5">
                <div className="md:w-3/4 w-full h-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                    <h1 className="font-serif text-2xl md:text-4xl">Shopping Cart</h1>
                    <h2 className="font-semibold text-xl">{cart.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6">Product Details</h3>
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">Quantity</h3>
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6 text-center">Price</h3>
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6 text-center">Total</h3>
                    </div>
                    {cart.map((item, index) => (
                        <CartCard key={index} id={item.id} name={item.name} price={item.price} remove={remove} quantity={item.quantity} change={handleOnChange} />
                    ))}
                </div>

                <div id="summary" className="md:w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                    <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
                    <span className="font-semibold text-sm">{CountCart(cart)}</span>
                    </div>
                    <div>
                    <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select className="block p-2 text-gray-600 w-full text-sm" value={shippingPrice} onChange={(e)=>(handleOnSelect(e))}>
                        <option value="0">Free</option>
                        <option value="10000">Standard shipping - Rp 10.000</option>
                    </select>
                    </div>
                    <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>{CountTotal(CountCart(cart),shippingPrice)}</span>
                    </div>
                    <button id='checkout' className={`${!token? 'hidden':'block'} bg-white border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 py-3 text-sm hover:text-white uppercase rounded-full w-full`} onClick={(e)=>(handleClick(e))}>Checkout</button>
                    <button id='login' className={`${token? 'hidden':'block'} bg-white border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 py-3 text-sm hover:text-white uppercase rounded-full w-full`} onClick={(e)=>(handleClick(e))}>Login First</button>
                    </div>
                </div>
                </div>
                {popup && <div>
                    <div id="popup-modal" className="overflow-y-auto overflow-x-hidden fixed flex items-center justify-center top-0 right-0 left-0 z-30 h-modal h-full bg-black bg-opacity-30">
                        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div className="relative bg-white rounded-lg shadow dark:bg-blue-900">
                                <button id='close' type="button" className="absolute top-3 right-2.5 text-blue-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" onClick={(e)=>(handleClick(e))}>
                                    <svg aria-hidden="true" className="w-5 h-5 pointer-events-none" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-6 text-center">
                                    <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-blue-200 dark:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <h3 className="mb-5 text-lg font-normal text-blue-200 dark:text-blue-200">Masukkan Bukti Pembayaran</h3>
                                    <h5 className="mb-1 text-left text-sm font-bold text-blue-200 dark:text-blue-200">Pembayaran Melalui:</h5>
                                    <ul className="mb-5 text-left text-sm font-normal text-blue-200">
                                        <li>Gopay</li>
                                        <li>Bank Mandiri</li>
                                        <li>Bank BNI</li>
                                    </ul>
                                    <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 mb-10 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100">
                                        {!paymentProof && <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Image (MAX. 10MB)</p>
                                        </div>}
                                        {paymentProof && <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <img src={paymentProof} alt="payment proof" className="w-full h-full object-cover"/>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{paymentProof.name}</p>
                                        </div>}
                                        <input id="dropzone-file" onChange={(e)=>(handleFileChange(e))} type="file" className="hidden" />
                                    </label>
                                    <button data-modal-toggle="popup-modal" type="button" className="text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={(e)=>(handleOnSubmit(e))}>
                                        Submit
                                    </button>
                                    <button id='close' data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={(e)=>(handleClick(e))}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
        

    );
}

export default Cart;