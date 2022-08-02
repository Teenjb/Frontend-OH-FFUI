import '../index.css';
import React, { useState,useEffect } from "react";
import logo from "../Img/logo.png";
import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import axios from 'axios';

function Profile() {
    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [name, setName] = useState(null); 
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const Hostendpoint = "http://localhost:1337/api/users/me?populate[0]=preorder&populate[1]=preorder.merchandises"
    const endpoint = "https://api-oh-ffui-2022.herokuapp.com/api/users/me?populate[0]=preorder&populate[1]=preorder.merchandises"

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const tokenLocal = JSON.parse(localStorage.getItem('token'));
            console.log(tokenLocal);
            if (tokenLocal.token !== null && tokenLocal.token !== "null") {
                setToken(tokenLocal.token);
                setName(tokenLocal.name);
                setAuthenticated(true);
            }
            axios.get(endpoint, {headers: {'Authorization': `Bearer ${tokenLocal.token}`}}).then(res => {
                console.log(res.data);
                setData(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
        fetchData();
    },[]);

    useEffect(() => {
        if (data !== null) {
            setLoading(false);
            console.log(data);
        }
    },[data]);

    const handleClick = (event) =>{
        const {id} = event.target;
        if(id === 'register'){
            window.location.href = '/register';
        }
        if(id === 'login'){
            window.location.href = '/login';
        }
        if(id === 'shop'){
            window.location.href = '/shop';
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
            window.location.href = '/home';
        }
    }

    return (
        <div className="grid md:h-screen h-full bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative" style={{ minHeight: 700 }}>
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
                                      <a href="javascript: void(0)">About Us</a>
                                  </li>
                                  <li className="text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a href="javascript: void(0)">Shop</a>
                                  </li>
                                  <li className="text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a href="javascript: void(0)">Tickets</a>
                                  </li>
                                  <li className="text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a href="javascript: void(0)">Submission</a>
                                  </li>
                                  <li className="block md:hidden text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a href="javascript: void(0)">login</a>
                                  </li>
                                  <li className="block md:hidden text-blue-200 hover:text-blue-400 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                      <a href="javascript: void(0)">Register</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="inline-flex space-x-2 ">
                        <button className={`${authenticated ? 'md:hidden' : 'md:block'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden  transition duration-100 ease-in-out hover:bg-blue-400 rounded-full border border-blue-200 text-blue-200 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='login' onClick={(e)=>(handleClick(e))}>Login</button>
                        <button className={`${authenticated ? 'md:hidden' : 'md:block'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-100 ease-in-out bg-blue-200 hover:bg-blue-400 rounded-full border border-blue-900 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='register' onClick={(e)=>(handleClick(e))}>Sign Up</button>
                        <button className={`${authenticated ? 'md:block' : 'md:hidden'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-50 ease-in-out bg-blue-200 hover:bg-blue-400 rounded-full border border-blue-900 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='user' onClick={(e)=>(handleClick(e))}>HI! {name}</button>
                        <button className={`${authenticated ? 'md:block' : 'md:hidden'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden transition duration-100 ease-in-out hover:bg-blue-400 rounded-full border border-blue-200 text-blue-200 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='logout' onClick={(e)=>(handleClick(e))}>Log Out</button>
                      </div>
                  </div>
              </nav>
              

              <div className='relative mb-20'>
                    <div class="container mx-auto my-5 p-5">
                <div class="md:flex no-wrap md:mx-5 mx-auto ">
                    <div class="w-full mx-2 h-64">
                        <div class="bg-white p-3 shadow-sm rounded-md">
                            <div class="flex my-3 items-center space-x-2 px-2 font-semibold text-pink-500 leading-8">
                                <span clas="text-green-500">
                                    <svg class="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <h2 className='text-pink-500 font-black flex md:text-3xl text-base items-center py-2 flex-row justify-center relative top-0 bottom-0 left-0 right-0'> Profile </h2>
                            </div>
                            <div class="text-gray-700">
                                <div class="grid md:grid-cols-2 text-sm">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Username</div>
                                        {!data && <div class="px-4 py-2">loading</div>}
                                        {data && <div class="px-4 py-2">{data.username}</div>}
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Nama Lengkap</div>
                                        {!data && <div class="px-4 py-2">loading</div>}
                                        {data && <div class="px-4 py-2">{data.fullName}</div>}
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Email</div>
                                        {!data && <div class="px-4 py-2">loading</div>}
                                        {data && <div class="px-4 py-2">{data.email}</div>}
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Nomor Telepon</div>
                                        {!data && <div class="px-4 py-2">loading</div>}
                                        {data && <div class="px-4 py-2">{data.phoneNumber}</div>}
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Asal Sekolah</div>
                                        {!data && <div class="px-4 py-2">loading</div>}
                                        {data && <div class="px-4 py-2">{data.schoolOrigin}</div>}
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Alamat</div>
                                        {!data && <div class="px-4 py-2">loading</div>}
                                        {data && <div class="px-4 py-2">{data.address}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <footer className='mt-14 w-full border-b bg-blue-900'>
                  <div>
                      <h2 className='text-pink-500 font-black flex md:text-3xl text-base items-center py-10 flex-row justify-center relative top-0 bottom-0 left-0 right-0'> Open House FF UI Vol.III </h2>
                      <p className="text-blue-200 justify-center font-normal text-center md:relative text-sm top-0 bottom-0 left-0 right-0">Lorem Ipsum bla bla bla blaaaa Lorem Ipsum bla bla bla blaaaa</p>
                      <ul className='flex items-center py-5 flex-row justify-center relative top-0 bottom-0 left-0 right-0'>
                          <li>
                              <img className='h-10 w-10' src={tiktok} alt='' href="javascript: void(0)"/></li>
                          <li>
                              <img className='h-10 w-10' src={instagram} alt='' href="javascript: void(0)"/>
                          </li>
                          <li>
                              <img className='h-10 w-10' src={line} alt='' href="javascript: void(0)"/></li>
                          <li>
                              <img className='h-8 w-8' src={whatsapp} alt='' href="javascript: void(0)"/>
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
                    <span className="sr-only">Loading...</span>
                </div>
              </div>}
        </div>
    );
}

export default Profile;
