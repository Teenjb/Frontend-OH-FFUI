import '../index.css';
import React, { useEffect, useState } from "react";
import CartCard from '../Component/CartCard';
import CountCart from '../helper/CountCart';

function Cart() {
    const [cart, setCart] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const handleClick = (event) => {
        const {id} = event.target;
        if(id === 'continueShopping'){
            window.location.href = '/shop';
        }
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

    return (
        <div className="mx-auto w-full h-full mt-10">
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
                <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                </select>
                </div>
                <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$600</span>
                </div>
                <button className="bg-white border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 py-3 text-sm hover:text-white uppercase rounded-full w-full">Checkout</button>
                </div>
            </div>

            </div>
        </div>

    );
}

export default Cart;