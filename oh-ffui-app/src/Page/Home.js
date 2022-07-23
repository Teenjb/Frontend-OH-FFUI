import '../index.css';
import React, { useState } from "react";
import logo from "../Img/logo.png";
import hero from "../Img/Hero Banner.png";
import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import sayOne from "../Img/Group 28.png";
import sayTwo from "../Img/Group 29.png";
import pic2 from "../Img/Group 33.png";
import pic1 from "../Img/Group 34.png";
import pic3 from "../Img/Group 35.png";

function Home(){
    const [show, setShow] = useState(false);

    const handleClick = (event) =>{
        const {id} = event.target;
        if(id === 'register'){
            window.location.href = '/register';
        }
        if(id === 'login'){
            window.location.href = '/login';
        }
    }

    return(
        <div className="bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative" style={{ minHeight: 700 }}>
              <nav className="w-full bg-blue-900 ">
                  <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                      <div aria-label="Home. logo" role="img">
                          <img className="w-10 h-10 md:w-auto" src={logo} alt="" href="/Home"/>
                      </div>
                      <div>
                          <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-white hover:text-blue-200 focus:text-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                              <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu " width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
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
                              <ul className="flex text-3xl font-black md:text-base items-center py-5 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 md:left-5 lg:left-20 right-0 bg-white md:bg-transparent z-20">
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
                              </ul>
                          </div>
                      </div>
                      <div className="inline-flex space-x-2 ">
                        <button className="focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-blue-400 rounded-full border border-blue-200 text-blue-200 px-4 sm:px-8 py-1 sm:py-3 text-s" id='login' onClick={(e)=>(handleClick(e))}>Login</button>
                        <button className="focus:outline-none lg:text-sm lg:font-black focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 hidden md:block bg-transparent transition duration-150 ease-in-out bg-blue-200 hover:bg-blue-400 rounded-full border border-blue-900 text-blue-900 px-4 sm:px-8 py-1 sm:py-3 text-s" id='register' onClick={(e)=>(handleClick(e))}>Sign Up</button>
                      </div>
                  </div>
              </nav>

              <div className="relative">
                  <div className="container mx-auto flex flex-col items-center py-12">
                      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                              <img src={hero} alt=""></img>
                          </h1>
                      </div>
                  </div>
                  <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5">
                          <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                              What They Say?
                          </h1>
                          <div>
                              <div className='bg-[#87b07b] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md'>
                                  <img src={sayOne} alt="" className='object-scale-down h-80 w-100'/>
                                  <div>
                                    <p className='text-white text-l px-10 py-5 '>" Open House FF UI menambah wawasan banget, banyak hal yang dibahas dan dibicarakan oleh kakak-kakaknya di acaranya. Semua yang aku ingin tahu tentang farmasi dibahas sama kakaknya. Mulai dari hal yang dipelajari di farmasi, prospek kerjanya, hingga budaya farmasi pun dibahas. Selain itu, acaranya bukan hanya seminar, tapi ada juga quiz dan sesi ngobrol dengan kakaknya jadi pasti seru acaranya. "</p>
                                    <h3 className='font-serif text-2xl text-white text-l px-10 '>Kezya - FF 22</h3>
                                    <h3 className='text-l text-white text-l px-10 '>Peserta Open House FF UI Vol.2</h3>
                                  </div>
                              </div>
                              <div className='py-3 md:py-5'></div>
                              <div className='bg-cyan-600 md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md'>
                                  <img src={sayTwo} alt="" className='object-scale-down h-80 w-100'/>
                                  <div>
                                    <p className='text-white text-l px-10 py-5 '>" Dengan mengikuti Open House FF UI, aku jadi mengetahui sistem perkuliahan di farmasi serta prospek kerjanya. Selain itu, aku juga belajar menggerus obat dan membuat hand sanitizer melalui kegiatan workshop di Open House FF UI, juga terdapat kuis dan kompetisi yang berhadiah. Buat aku, Open House FF UI seru banget dan recommended untuk kalian yang penasaran tentang farmasi atau tertarik tapi masih ragu. Aku jadi semakin yakin untuk memilih jurusan farmasi setelah mengikuti Open House FF UI Vol.2. "</p>
                                    <h3 className='font-serif text-2xl text-white text-l px-10 '>Amalia - FF 22</h3>
                                    <h3 className='text-l text-white text-l px-10 '>Peserta Open House FF UI Vol.2</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                          <h1 className="font-serif md:mb-10 py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                              Rangkaian Acara
                          </h1>
                          <div>
                              <div className='grid md:flex justify-evenly items-center'>
                                  <div className='hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full'></div>
                                  <img src={pic1} alt='' className='hidden md:block md:px-5'/>
                                  <div className='bg-pink-500 rounded-md px-10 py-10 w-full'>
                                      <h3 className='font-serif text-3xl text-white pb-2'>Roadshow</h3>
                                      <h5 className='font-bold text-xl text-white pb-4'>Agustus-November 2022</h5>
                                      <p className='text-white'>Roadshow merupakan ajang memperkenalkan dan mempromosikan Open House FF UI Vol. III dengan mengunjungi SMA/SMK sederajat. Tertarik dan sekolahmu ingin dikunjungi? Yuk hubungi linimasa kami!</p>
                                  </div>
                                  <div className='grid md:hidden mx-auto py-5'>
                                      <div className='w-6 h-6 rounded-full bg-blue-900'/>
                                      <div className='mt-5 w-6 h-6 rounded-full bg-blue-900'/>
                                  </div>
                              </div>
                              <div className='py-2 md:py-5'></div>
                              <div className='grid md:flex justify-evenly items-center'>
                                  <div className='bg-pink-500 rounded-md px-10 py-10 w-full'>
                                      <h3 className='font-serif text-3xl text-white pb-2'>Seminar Daring</h3>
                                      <h5 className='font-bold text-xl text-white pb-4'>Day 1: Sabtu, 19 November 2022</h5>
                                      <p className='text-white'>Rangkaian acara pada main event yang menghadirkan pembicara ahli untuk membahas topik tertentu.</p>
                                  </div>
                                  <img src={pic2} alt='' className='hidden md:block md:px-5'/>
                                  <div className='hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full'></div>
                                  <div className='grid md:hidden mx-auto py-5'>
                                      <div className='w-6 h-6 rounded-full bg-blue-900'/>
                                      <div className='mt-5 w-6 h-6 rounded-full bg-blue-900'/>
                                  </div>
                              </div>
                              <div className='py-2 md:py-5'></div>
                              <div className='grid md:flex justify-evenly items-center'>
                                  <div className='hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full'></div>
                                  <img src={pic3} alt='' className='hidden md:block md:px-5'/>
                                  <div className='bg-pink-500 rounded-md px-10 py-10 w-full'>
                                      <h3 className='font-serif text-3xl text-white pb-2'>Talkshow</h3>
                                      <h5 className='font-bold text-xl text-white pb-4'>Day 1: Sabtu, 19 November 2022</h5>
                                      <p className='text-white'>Suatu jenis acara yang berupa perbincangan antara moderator dengan pembicara berdasarkan term of reference yang diberikan oleh panitia.</p>
                                  </div>
                                  <div className='grid md:hidden mx-auto py-5'>
                                      <div className='w-6 h-6 rounded-full bg-blue-900'/>
                                      <div className='mt-5 w-6 h-6 rounded-full bg-blue-900'/>
                                  </div>
                              </div>
                              <div className='py-2 md:py-5'></div>
                              <div className='grid md:flex justify-evenly items-center'>
                                  <div className='bg-pink-500 rounded-md px-10 py-10 w-full'>
                                      <h3 className='font-serif text-3xl text-white pb-2'>Sharing session</h3>
                                      <h5 className='font-bold text-xl text-white pb-4'>Day 1: Sabtu, 19 November 2022</h5>
                                      <p className='text-white'>Live streaming talkshow dengan mahasiswa FFUI yang aktif, berprestasi, dan representatif dari masing-masing jalur masuk UI.</p>
                                  </div>
                                  <img src={pic1} alt='' className='hidden md:block md:px-5'/>
                                  <div className='hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full'></div>
                                  <div className='grid md:hidden mx-auto py-5'>
                                      <div className='w-6 h-6 rounded-full bg-blue-900'/>
                                      <div className='mt-5 w-6 h-6 rounded-full bg-blue-900'/>
                                  </div>
                              </div>
                              <div className='py-2 md:py-5'></div>
                              <div className='grid md:flex justify-evenly items-center'>
                                  <div className='hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full'></div>
                                  <img src={pic2} alt='' className='hidden md:block md:px-5'/>
                                  <div className='bg-pink-500 rounded-md px-10 py-10 w-full'>
                                      <h3 className='font-serif text-3xl text-white pb-2'>Tur kampus dan laboratorium</h3>
                                      <h5 className='font-bold text-xl text-white pb-4'>Day 2: Sabtu, 26 November 2022</h5>
                                      <p className='text-white'>Rangkaian acara pada main event yang mengajak peserta untuk melihat langsung laboratorium di FF UI, apotek simulasi di Gedung Pascasarjana dan Profesi FF UI, serta Gedung RIK UI.</p>
                                  </div>
                                  <div className='grid md:hidden mx-auto py-5'>
                                      <div className='w-6 h-6 rounded-full bg-blue-900'/>
                                      <div className='mt-5 w-6 h-6 rounded-full bg-blue-900'/>
                                  </div>
                              </div>
                              <div className='py-2 md:py-5'></div>
                              <div className='grid md:flex justify-evenly items-center'>
                                  <div className='bg-pink-500 rounded-md px-10 py-10 w-full'>
                                      <h3 className='font-serif text-3xl text-white pb-2'>Workshop</h3>
                                      <h5 className='font-bold text-xl text-white pb-4'>Day 2: Sabtu, 26 November 2022</h5>
                                      <p className='text-white'>Kegiatan simulasi praktikum yang memberikan kesempatan bagi peserta untuk membuat suatu sediaan (pulveres, kapsul, dan liquid hand soap).</p>
                                  </div>
                                  <img src={pic3} alt='' className='hidden md:block md:px-5'/>
                                  <div className='hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full'></div>
                                  <div className='grid md:hidden mx-auto py-5'>
                                      <div className='w-6 h-6 rounded-full bg-blue-900'/>
                                      <div className='mt-5 w-6 h-6 rounded-full bg-blue-900'/>
                                  </div>
                              </div>
                              <div className='py-2 md:py-1'></div>
                              <div className='grid md:flex justify-evenly items-center'>
                                  <div className='hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full'></div>
                                  <img src={pic1} alt='' className='hidden md:block md:px-5'/>
                                  <div className='bg-pink-500 rounded-md px-10 py-10 w-full'>
                                      <h3 className='font-serif text-3xl text-white pb-2'>Pharmacy Championship (Pharmission dan Pharmacy Quiz)</h3>
                                      <h5 className='font-bold text-xl text-white pb-4'>Day 2: Sabtu, 26 November 2022</h5>
                                      <p className='text-white'>Acara perlombaan berhadiah yang terdiri atas Pharmission (submisi karya) dan Pharmacy Quiz (pos soal) untuk memperkenalkan mata kuliah farmasi dengan dibantu dengan pemberian modul.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
                          <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                              Video Perkenalan
                          </h1>
                        </div>
                        <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title='Video Perkenalan' className='bg-orange-400 md:items-center place-items-center p-5 md:p-10 rounded-md lg:w-11/12 lg:h-screen md:w-3/4 md:h-96'></iframe>
                    </div> 
              </div>

              <footer className='w-full border-b bg-blue-900'>
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
export default Home;