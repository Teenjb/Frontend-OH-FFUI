import '../index.css';
import React, { useState,useEffect } from "react";
import logo from "../Img/logo.png";
import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";

function Profile() {
    return (
        <div className="grid h-full bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative" style={{ minHeight: 700 }}>
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
                        <button className={`${authenticated ? 'md:hidden' : 'md:block'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden bg-transparent transition duration-150 ease-in-out hover:bg-blue-400 rounded-full border border-blue-200 text-blue-200 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='login' onClick={(e)=>(handleClick(e))}>Login</button>
                        <button className={`${authenticated ? 'md:hidden' : 'md:block'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden bg-transparent transition duration-150 ease-in-out bg-blue-200 hover:bg-blue-400 rounded-full border border-blue-900 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='register' onClick={(e)=>(handleClick(e))}>Sign Up</button>
                        <button className={`${authenticated ? 'md:block' : 'md:hidden'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden bg-transparent transition duration-150 ease-in-out bg-blue-200 hover:bg-blue-400 rounded-full border border-blue-900 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='User' onClick={(e)=>(handleClick(e))}>HI! USER</button>
                        <button className={`${authenticated ? 'md:block' : 'md:hidden'} focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden bg-transparent transition duration-150 ease-in-out hover:bg-blue-400 rounded-full border border-blue-200 text-blue-200 px-4 sm:px-8 py-1 sm:py-3 text-s`} id='logout' onClick={(e)=>(handleClick(e))}>Log Out</button>
                      </div>
                  </div>
              </nav>
              

              <div className='relative mb-20'>
                    <div class="container mx-auto my-5 p-5">
                <div class="md:flex no-wrap md:mx-5 mx-auto ">
                    <div class="w-full mx-2 h-64">
                        <div class="bg-white p-3 shadow-sm rounded-md">
                            <div class="flex items-center my-3 items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">About</span>
                            </div>
                            <div class="text-gray-700">
                                <div class="grid md:grid-cols-2 text-sm">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Username</div>
                                        <div class="px-4 py-2">Jane</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Nama Lengkap</div>
                                        <div class="px-4 py-2">Doe</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Email</div>
                                        <div class="px-4 py-2">Female</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Nomor Telepon</div>
                                        <div class="px-4 py-2">+11 998001001</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Asal Sekolah</div>
                                        <div class="px-4 py-2">SMAN 7 Tangsel</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Alamat</div>
                                        <div class="px-4 py-2">Alamat lengkap</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Provinsi</div>
                                        <div class="px-4 py-2">Banten</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Kota</div>
                                        <div class="px-4 py-2">Tangerang Selatan</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Kode Pos</div>
                                        <div class="px-4 py-2">15310</div>
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
        </div>
    );
}

export default Profile;
