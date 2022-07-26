import '../index.css';
import React, { useState,useEffect } from "react";
import logo from "../Img/logo.png";
import hero from "../Img/Hero Banner.png";
import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import sayOne from "../Img/Group 28.png";
import sayTwo from "../Img/Group 29.png";
import sayThree from "../Img/Group 40.png";
import sayFour from "../Img/Group 41.png";
import pic2 from "../Img/Group 33.png";
import pic1 from "../Img/Group 34.png";
import pic3 from "../Img/Group 35.png";
import bg from "../Img/Group 42.png";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Home(){
    const [show, setShow] = useState(false);
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const token = await localStorage.getItem('token');
            console.log(token);
            if (token !== "null") {
                setToken(token);
                setAuthenticated(true);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    
    // useEffect(() => {
    //     setLoading(false);
    //     console.log("loading " + loading);
    //     console.log("token " +token);
    //     console.log("authenticated " +authenticated);
    //     }, [token]);

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

    if(loading){
        return(<div role="status">
            <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>)
    }

    return(
        <div className="grid h-full bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative" style={{ minHeight: 700 }}>
              <nav className="w-full bg-blue-900">
                  <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                      <div aria-label="Home. logo" role="img">
                          <img className="w-10 h-10 md:w-auto" src={logo} alt="" id='home' onClick={(e)=>(handleClick(e))}/>
                      </div>
                      <div>
                          <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-white hover:text-blue-200 focus:text-blue-200 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                              <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="ml-64 md:hidden icon icon-tabler icon-tabler-menu " width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round">
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
                                      <a href="javascript: void(0)" id='shop' onClick={(e)=>(handleClick(e))}>Shop</a>
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

              <div className="relative">
                  <div className="container mx-auto flex flex-col items-center py-12">
                      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                              <img src={hero} alt="" className=''></img>
                          </h1>
                      </div>
                  </div>
                  <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5">
                          <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                              What They Say?
                          </h1>
                          <div>
                          <div className='bg-orange-400 md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md'>
                                  <img src={sayFour} alt="" className='object-scale-down h-80 w-100'/>
                                  <div>
                                    <p className='text-white text-l px-10 py-5 '>" Dengan mengikuti Open House FF UI, aku jadi mengetahui sistem perkuliahan di farmasi serta prospek kerjanya. Selain itu, aku juga belajar menggerus obat dan membuat hand sanitizer melalui kegiatan workshop di Open House FF UI, juga terdapat kuis dan kompetisi yang berhadiah. Buat aku, Open House FF UI seru banget dan recommended untuk kalian yang penasaran tentang farmasi atau tertarik tapi masih ragu. Aku jadi semakin yakin untuk memilih jurusan farmasi setelah mengikuti Open House FF UI Vol.2. "</p>
                                    <h3 className='font-serif text-2xl text-white text-l px-10 '>Mishbahus Surur - FF 19</h3>
                                    <h3 className='text-l text-white text-l px-10 '>Ketua BEM FF UI 2022</h3>
                                  </div>
                              </div>
                              <div className='py-3 md:py-5'></div>
                            <div className='bg-cyan-600 md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md'>
                                  <img src={sayTwo} alt="" className='object-scale-down h-80 w-100'/>
                                  <div>
                                    <p className='text-white text-l px-10 py-5 '>" Di fakultas farmasi, kalian akan banyak mempelajari hal mulai dari kimia, fisika, biologi. Tapi bagian terpentingnya adalah bagaimana kita dapat mengembangkan potensi diri untuk menjadi pribadi yang lebih baik. Mendaftarkan diri di IISMA adalah suatu perjalanan yang panjang, mulai dari mengumpulkan dokumen, seleksi berkas, wawancara hingga kemarin aku diterima menjadi perwakilan FF UI di IISMA tahun ini. Aku merasa honoured, dan aku percaya di IISMA aku dapat mengembangkan diriku untuk dapat memiliki mindset yang lebih global. "</p>
                                    <h3 className='font-serif text-2xl text-white text-l px-10 '>Adriel Sebastian - FF 19</h3>
                                    <h3 className='text-l text-white text-l px-10 '>Awardee IISMA</h3>
                                  </div>
                              </div>
                              <div className='py-3 md:py-5'></div>
                              <div className='bg-[#87b07b] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md'>
                                  <img src={sayOne} alt="" className='object-scale-down h-80 w-100'/>
                                  <div>
                                    <p className='text-white text-l px-10 py-5 '>" Open House FF UI menambah wawasan banget, banyak hal yang dibahas dan dibicarakan oleh kakak-kakaknya di acaranya. Semua yang aku ingin tahu tentang farmasi dibahas sama kakaknya. Mulai dari hal yang dipelajari di farmasi, prospek kerjanya, hingga budaya farmasi pun dibahas. Selain itu, acaranya bukan hanya seminar, tapi ada juga quiz dan sesi ngobrol dengan kakaknya jadi pasti seru acaranya. "</p>
                                    <h3 className='font-serif text-2xl text-white text-l px-10 '>Kezya - FF 22</h3>
                                    <h3 className='text-l text-white text-l px-10 '>Peserta Open House FF UI Vol.2</h3>
                                  </div>
                              </div>
                              <div className='py-3 md:py-5'></div>
                              <div className='bg-[#f5145b] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md'>
                                  <img src={sayThree} alt="" className='object-scale-down h-80 w-100'/>
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