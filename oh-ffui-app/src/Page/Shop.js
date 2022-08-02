import '../index.css';
import React, { useState,useEffect } from "react";
import logo from "../Img/logo.png";
import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import Register from '../Page/Register';
import { Navigate } from 'react-router-dom';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import ShopCard from '../Component/ShopCard';
import ShopCardWithDesc from '../Component/ShopCardWithDesc';

function Shop(){
    const [show, setShow] = useState(false);
    const [token, setToken] = useState(null);
    const [name, setName] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const tokenLocal = JSON.parse(localStorage.getItem('token'));
            if (tokenLocal.token !== null && tokenLocal.token !== "null") {
                setToken(tokenLocal.token);
                setName(tokenLocal.name);
                setAuthenticated(true);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const handleClick = (event) =>{
        const {id} = event.target;
        if(id === 'register'){
            window.location.href = '/register';
        }
        if(id === 'login'){
            window.location.href = '/login';
        }
        if(id === 'home'){
            window.location.href = '/home';
        }
        if(id === 'submission'){
            window.location.href = '/submission';
        }
        if(id === 'about'){
            window.location.href = '/about';
        }
        if(id === 'cart'){
            window.location.href = '/cart';
        }
        if(id === 'user'){
            window.location.href = '/profile';
        }
        if(id === 'logout'){
            localStorage.removeItem('token');
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
                onClick: function(){} // Callback after click
              }).showToast();
        }
    }

    

    return(
        <div className="grid h-full bg-white overflow-y-hidden relative" style={{ minHeight: 700 }}>
              <nav className="w-full bg-blue-900">
                  <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                      <div aria-label="Home. logo" role="img">
                          <img className="w-10 h-10 md:w-auto" src={logo} alt="" id='home' onClick={(e)=>(handleClick(e))}/>
                      </div>
                      <div>
                          <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-blue-200 focus:text-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-50 ml-64`}>
                              <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <line x1={4} y1={8} x2={20} y2={8} />
                                  <line x1={4} y1={16} x2={20} y2={16} />
                              </svg>
                          </button>
                          <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                              <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-blue-200 focus:text-blue-200 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                                  <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <line x1={18} y1={6} x2={6} y2={18} />
                                      <line x1={6} y1={6} x2={18} y2={18} />
                                  </svg>
                              </button>
                              <ul className="flex text-3xl font-black md:text-base items-center py-5 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 md:left-20 right-0 bg-white md:bg-transparent z-20">
                              <li className="text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                      <a id='about' onClick={(e)=>(handleClick(e))} >About Us</a>
                                  </li>
                                  <li className="text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a  id='shop' onClick={(e)=>(handleClick(e))} >Shop</a>
                                  </li>
                                  <li className="text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a >Tickets</a>
                                  </li>
                                  <li className="text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a id='submission' onClick={(e)=>(handleClick(e))} >Submission</a>
                                  </li>
                                  <li className="block md:hidden text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a id='cart' onClick={(e)=>(handleClick(e))} >Cart</a>
                                  </li>
                                  <li className={`${authenticated ? 'hidden' : 'block'} md:hidden text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}>
                                      <a id='login' onClick={(e)=>(handleClick(e))} >login</a>
                                  </li>
                                  <li className={`${authenticated ? 'hidden' : 'block'} md:hidden text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}>
                                      <a id='register' onClick={(e)=>(handleClick(e))} >Register</a>
                                  </li>
                                  <li className={`${authenticated ? 'block' : 'hidden'} md:hidden text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}>
                                      <a id='user' onClick={(e)=>(handleClick(e))} >User</a>
                                  </li>
                                  <li className={`${authenticated ? 'block' : 'hidden'} md:hidden text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10`}>
                                      <a id='logout' onClick={(e)=>(handleClick(e))} >Logout</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className={`inline-flex space-x-2 items-center`}>
                      <a  id='cart' onClick={(e)=>(handleClick(e))} role="button" className="hidden relative md:flex">
                            <svg className="flex-1 w-8 h-6 fill-blue-200 pointer-events-none" viewbox="0 0 24 24">
                            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                            </svg>
                        </a>
                        <button className={`${authenticated ? 'md:hidden' : 'md:block'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden  transition duration-100 ease-in-out hover:bg-blue-400 rounded-full border border-blue-200 text-blue-200 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='login' onClick={(e)=>(handleClick(e))}>Login</button>
                        <button className={`${authenticated ? 'md:hidden' : 'md:block'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-100 ease-in-out bg-blue-200 hover:bg-blue-400 rounded-full border border-blue-900 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='register' onClick={(e)=>(handleClick(e))}>Sign Up</button>
                        <button className={`${authenticated ? 'md:block' : 'md:hidden'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-50 ease-in-out bg-blue-200 hover:bg-blue-400 rounded-full border border-blue-900 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='user' onClick={(e)=>(handleClick(e))}>HI! {name}</button>
                        <button className={`${authenticated ? 'md:block' : 'md:hidden'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-100 ease-in-out hover:bg-blue-400 rounded-full border border-blue-200 text-blue-200 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='logout' onClick={(e)=>(handleClick(e))}>Log Out</button>
                      </div>
                  </div>
              </nav>

              <div className='relative'>
                <div className="bg-cyan-600 w-full mx-auto md:flex md:flex-col items-center py-12 sm:py-24">
                    <div className="md:w-11/12 flex justify-center items-center w-full mb-5 sm:mb-10">
                        <h1 className="font-serif py-10 text-white text-5xl xl:text-6xl text-center leading-7 md:leading-10">Shop</h1>
                    </div>
                </div>
                <div className='relative container mx-auto py-6 sm:py-12 lg:flex grid justify-around items-center flex-col mb-5 sm:mb-10'>
                    <h1 className="font-serif py-10 text-black text-5xl xl:text-6xl text-center leading-7 md:leading-10">Merch</h1>
                    <div class="min-h-screen flex items-center justify-center">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
                            <ShopCard id='kaosA' name='Kaos A' price='99.000' />
                            <ShopCard id='kasoB' name='Kaos B' price='99.000' />
                            <ShopCard id='stikerSetA' name='Stiker Set A' price='99.000' />
                            <ShopCard id='stikerSetB' name='Stiker Set B' price='99.000' />
                            <ShopCard id='toteBagA' name='Tote Bag A' price='99.000' />
                            <ShopCard id='toteBagB' name='Tote Bag B' price='99.000' />
                            <ShopCard id='notebookA' name='Notebook A' price='99.000' />
                            <ShopCard id='notebookB' name='Notebook B' price='99.000' />
                            <ShopCard id='pouch' name='Pouch' price='99.000' />
                            <ShopCard id='eMoney' name='E-Money' price='99.000' />
                            <ShopCard id='lanyard' name='Lanyard' price='99.000' />
                        </div>
                    </div>
                </div>
                <div className='relative container mx-auto lg:flex grid justify-around items-center flex-col'>
                    <h1 className="font-serif py-10 text-black text-5xl xl:text-6xl text-center leading-7 md:leading-10">Bundles</h1>
                    <div class=" flex items-center justify-center">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
                            <ShopCardWithDesc id='pakeA1' name='Paket A1' price='99.000' desc='kaos A, sticker set A, notebook A, tote bag A, pouch, emoney + lanyard' />
                            <ShopCardWithDesc id='paketA2' name='Paket A2' price='99.000' desc='Kaos B, sticker set B, notebook B, totebag B, pouch, emoney B + lanyard' />
                            <ShopCardWithDesc id='paketB1' name='Paket B1' price='99.000' desc='Sticker set A, notebook A, tote bag A, pouch, emoney + lanyard' />
                            <ShopCardWithDesc id='paketB2' name='Paket B2' price='99.000' desc='Sticker set B, notebook B, totebag B, pouch, emoney B + lanyard' />
                            <ShopCardWithDesc id='pakeC1' name='Paket C1' price='99.000' desc='Sticker set A, notebook A, kaos A, pouch' />
                            <ShopCardWithDesc id='pakeC2' name='Paket C2' price='99.000' desc='Sticker set B, notebook B, kaos B, pouch' />
                        </div>
                    </div>
                </div>
                <div className='relative container mx-auto lg:flex grid justify-around items-center flex-col'>
                    <h1 className="font-serif py-10 text-black text-5xl xl:text-6xl text-center leading-7 md:leading-10">Workshop</h1>
                    <div class=" flex items-center justify-center">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
                            <ShopCardWithDesc id='pulverizeKit' name='Pulverize Kit' price='99.000' desc='Tablet vitamin B, kertas perkamen, sudip, pot plastik, lumpang alu, cangkang kapsul, etiket putih' />
                            <ShopCardWithDesc id='sanitizerKit' name='Sanitizer Kit' price='99.000' desc='Texapon (SLES), nacl, glycerin, H2O2 3%, minyak atsiri/essence, aquades, beaker glass plastik, batang pengaduk, botol pump, botol plastik 10 ml, botol plastik 500 ml, corong plastik, wadah puding' />
                        </div>
                    </div>
                </div>
              </div>

              <footer className='w-full border-b bg-blue-900'>
                  <div>
                      <h2 className='text-pink-500 font-black flex md:text-3xl text-base items-center py-10 flex-row justify-center relative top-0 bottom-0 left-0 right-0'> Open House FF UI Vol.III </h2>
                      <p className="text-blue-200 justify-center font-normal text-center md:relative text-sm top-0 bottom-0 left-0 right-0">Lorem Ipsum bla bla bla blaaaa Lorem Ipsum bla bla bla blaaaa</p>
                      <ul className='flex items-center py-5 flex-row justify-center relative top-0 bottom-0 left-0 right-0'>
                          <li>
                              <img className='h-10 w-10' src={tiktok} alt='' /></li>
                          <li>
                              <img className='h-10 w-10' src={instagram} alt='' />
                          </li>
                          <li>
                              <img className='h-10 w-10' src={line} alt='' /></li>
                          <li>
                              <img className='h-8 w-8' src={whatsapp} alt='' />
                          </li>
                      </ul>
                  </div>
                  <div className='bg-pink-500 py-5 flex items-center flex-row justify-center relative top-0 bottom-0 left-0 right-0'>
                      <p className='text-blue-900 text-sm font-bold'>All rights reserved © OH FF UI VOL.III </p>
                  </div>
              </footer>
              {loading && <div className="flex absolute z-50 h-screen w-full items-center justify-center bg-black bg-opacity-50">
                <div role="status">
                    <svg aria-hidden="true" className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-white fill-pink-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
              </div>}
            </div>
    );
}
export default Shop;