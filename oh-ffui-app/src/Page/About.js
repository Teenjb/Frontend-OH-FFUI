import '../index.css';
import React, { useState,useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from "../Img/logo.png";
import instagram from "../Img/icons8-instagram-100.svg";
import whatsapp from "../Img/icons8-whatsapp-100.svg";
import line from "../Img/icons8-line-100.svg";
import tiktok from "../Img/icons8-tiktok-100.svg";
import am1 from "../Img/ABOUTME1.png";
import am2 from "../Img/ABOUTME2.png";
import am3 from "../Img/ABOUTME3.png";
import am4 from "../Img/ABOUTME4.jpg";
import am5 from "../Img/ABOUTME5.jpg";
import am6 from "../Img/ABOUTME6.png";
import am7 from "../Img/ABOUTME7.png";
import am8 from "../Img/ABOUTME8.png";
import am9 from "../Img/ABOUTME9.png";
import am10 from "../Img/ABOUTME10.png";
import am11 from "../Img/ABOUTME11.png";
import am12 from "../Img/ABOUTME12.jpg";


function About() {




    return (
        <div className="grid h-full bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative" style={{ minHeight: 700 }}>
              {/* <nav className="w-full bg-blue-900">
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
              </nav> */}

              <div className='relative'>
                <div className="bg-orange-400 w-full mx-auto md:flex md:flex-col items-center py-12 sm:py-24">
                    <div className="md:w-11/12 flex justify-center items-center w-full mb-5 sm:mb-10">
                        <h1 className="font-serif py-10 text-white text-5xl xl:text-6xl text-center leading-7 md:leading-10">About Us</h1>
                    </div>
                </div>
                
            </div>
            
            <Carousel>
                <div>
                    <img src={am1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={am2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={am3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>


                <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
                    <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                        <h1 className="font-serif py-10 text-black text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">Sejarah</h1>
                        <div className='bg-pink-600 md:flex md:text-xl text-medium text-white md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md'>
                            <p>Farmasi merupakan ilmu dan seni yang berkaitan dengan obat. Mereka yang berkecimpung di bidang kefarmasian adalah para ahli obat yang menguasai ilmu dan pengetahuan obat-obatan secara mendalam dari segala aspek, mulai dari identifikasi, seleksi, preservasi, kombinasi, aksi farmakologi, analisis dan standarisasi obat dan bahan obat, serta cara distribusi, penyimpanan dan penggunaan yang tepat dan aman.
                            Farmasi UI didirikan pada bulan September 1965 di Jl. Diponegoro, Jakarta Pusat. Jurusan Farmasi UI awalnya berada di bawah Fakultas Ilmu Pasti dan Ilmu Alam (FIPIA) yang kemudian berdasarkan Kepres No. 44 tahun 1982, berubah menjadi Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA). Pada tanggal 18 Januari 2003, Jurusan Farmasi FMIPA UI berubah menjadi Departemen Farmasi FMIPA UI. Selanjutnya dalam rangka mendukung pendirian Rumpun Ilmu Kesehatan, pada tanggal 29 November 2011, Departemen Farmasi FMIPA UI berubah menjadi Fakultas Farmasi Universitas Indonesia (FF UI).</p>
                        </div>
                    </div>
                <div className="container mx-auto grid md:flex md:flex-col items-center py-6 sm:py-12">
                    <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                        <h1 className="font-serif py-10 text-black text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">Program Pendidikan</h1>
                        <p className="text-medium text-xl justify-center mb-5 items-center">Fakultas farmasi Universitas Indonesia menyediakan 5 jenis program pendidikan, yaitu:</p>
                        <div class="container bg-[#87b07b] rounded-md flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 items-center text-medium">
                            <div className='rounded-md px-10 py-10 w-auto text-center'>
                                <div className='container rounded-md bg-[#f0eaa3] px-10 py-10'>
                                    <h3 className='font-serif text-3xl text-black pb-2 mb-3'>Program Pendidikan Sarjana (S1) Farmasi</h3>
                                    <p className='text-medium'>Dalam jenjang ini, diberikan dasar–dasar ilmu pengetahuan dan teknologi bidang kefarmasian. Tersedia dalam dua kelas yaitu S1 Reguler dan S1 Paralel. Lulusan akan mendapatkan gelar S.Farm.</p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto text-center'>
                                <div className='container rounded-md px-10 py-10'>
                                    <h3 className='font-serif text-3xl text-black pb-2 mb-3'>Program Pendidikan Profesi Apoteker</h3>
                                    <p className='text-medium'>Program pendidikan ini diperlukan untuk memperoleh keahlian dengan gelar Apoteker/Farmasis (Apt.). Merupakan salah satu program pendidikan setelah Program Sarjana (S1) Farmasi. Terdapat 2 macam peminatan yaitu:
                                    Praktek Kerja Profesi Apoteker di Industri Farmasi dan Praktek Kerja Profesi Apoteker di Rumah Sakit dan Puskesmas
                                    </p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto text-center'>
                                <div className='container rounded-md  bg-[#f0eaa3] md:bg-transparent md:text-black px-10 py-10'>
                                    <h3 className='font-serif text-3xl text-black pb-2 mb-3'>Program Pendidikan Magister Ilmu Kefarmasian (S2)</h3>
                                    <p className='text-medium'>Lulusan program pendidikan ini akan mendapatkan gelar M.Farm. Terdiri dari 6 peminatan yaitu:
                                    Program Pendidikan Magister Farmasi kekhususan Biologi Farmasi, Program Pendidikan Magister Farmasi kekhususan Farmasi Klinik, Program Pendidikan Magister Farmasi kekhususan Kimia Farmasi, Program Pendidikan Magister Farmasi kekhususan Teknologi Farmasi, Program Pendidikan Magister Farmasi kekhususan Bioteknologi Farmasi, Program Pendidikan Magister Farmasi kekhususan Farmakologi dan Toksikologi</p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto text-center'>
                                <div className='container rounded-md  md:bg-[#f0eaa3] px-10 py-10'>
                                    <h3 className='font-serif text-3xl text-black pb-2 mb-3'>Program Pendidikan Magister Ilmu Herbal (S2)</h3>
                                    <p className='text-medium'>Lulusan program pendidikan ini akan mendapatkan gelar M.Farm. Terdiri dari 2 peminatan yaitu:
                                    Program Pendidikan Magister Ilmu Herbal Kekhususan Herbal Medis dan Program Pendidikan Magister Ilmu Herbal Kekhususan Herbal dalam Keperawatan dan Estetika Indonesia
                                    </p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto text-center'>
                                <div className='container rounded-md bg-[#f0eaa3] px-10 py-10'>
                                    <h3 className='font-serif text-3xl text-black pb-2 mb-3'>Doktor Ilmu Farmasi (S3)</h3>
                                    <p className='text-medium'>Program ini merupakan tingkat pendidikan tenaga farmasis yang paling tinggi secara formal dan lulusan akan mendapat gelar Dr. Program Doktor ini didasari kenyataan bahwa dalam kebutuhan penelitian bidang farmasi saat ini mencakup ilmu dasar farmasi serta ilmu terapan bidang farmasi klinik.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto grid md:flex md:flex-col items-start py-6 sm:py-12">
                    <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                        <h1 className="font-serif py-10 text-black text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">Jalur Masuk</h1>
                        <p className="text-medium text-xl justify-center items-center">Terdapat 5 jalur masuk untuk Fakultas Farmasi UI, yaitu :</p>
                        <div class="container rounded-md flex items-start justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 items-start text-medium">
                            <div className='rounded-md px-10 py-10 w-auto'>
                                <div className='container rounded-md bg-cyan-700 px-5 py-5'>
                                    <h3 className='font-serif text-3xl text-center text-white pb-2 mb-3'>Paralel</h3>
                                    <p className='text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md'>PPKB : Jalur seleksi berdasarkan nilai akademik rapor yang melibatkan peran sekolah yang diselenggarakan oleh Universitas Indonesia.</p>
                                    <p className='text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md'>SIMAK UI Paralel : Ujian seleksi tanpa nilai UTBK yang diselenggarakan oleh Universitas Indonesia.</p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto'>
                                <div className='container rounded-md bg-blue-900 px-5 py-5'>
                                    <h3 className='font-serif text-3xl text-center text-white pb-2 mb-3'>Reguler</h3>
                                    <p className='text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md'>SNMPTN : Jalur seleksi berdasarkan nilai akademik rapor yang diselenggarakan secara nasional oleh LTMPT.</p>
                                    <p className='text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md'>SBMPTN : Seleksi bersama yang diselenggarakan secara nasional oleh LTMPT melalui Ujian Tulis Berbasis Komputer (UTBK).</p>
                                    <p className='text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md'>SIMAK UI Reguler : Ujian seleksi dengan pertimbangan nilai UTBK yang diselenggarakan oleh Universitas Indonesia.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto grid md:flex md:flex-col items-center text-center py-6 sm:py-12">
                    <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                        <h1 className="font-serif py-10 text-black text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">Daya Tampung & Keketatan</h1>
                        <p className="text-medium text-xl justify-center items-center">Berdasarkan jalur masuknya, pada tahun 2022 Fakultas Farmasi UI jenjang sarjana (S1) memiliki daya tampung dan keketatan sebagai berikut :</p>
                        <div class="container rounded-md flex items-start justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 items-start text-medium">
                            <div className='rounded-md px-10 py-10 w-auto'>
                                <div className='container rounded-md bg-pink-600 px-5 py-5'>
                                    <h3 className='font-serif text-3xl text-center text-white pb-2 mb-3'>Paralel</h3>
                                    <p className='text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md'>PPKB : 30 orang (8.04%)</p>
                                    <p className='text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md'>SIMAK UI Paralel : 30 orang (3.09%)</p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto'>
                                <div className='container rounded-md bg-red-600 px-5 py-5'>
                                    <h3 className='font-serif text-3xl text-center text-white pb-2 mb-3'>Reguler</h3>
                                    <p className='text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md'>SNMPTN : 18 orang (4.89%)</p>
                                    <p className='text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md'>SBMPTN : 27 orang (3.74%)</p>
                                    <p className='text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md'>SIMAK UI Reguler : 45 orang (1.49%)</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto grid md:flex md:flex-col items-center text-center py-6 sm:py-12">
                    <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                        <h1 className="font-serif py-10 text-black text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">Organisasi</h1>
                        <div class="container bg-[#f0eaa3] rounded-md flex items-center justify-center">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-5 items-start text-medium">
                            <div className='rounded-md px-10 py-10 w-auto'>
                                <div className='container rounded-md bg-pink-600 px-5 py-5'>
                                    <h3 className='font-serif text-3xl text-center  pb-2 mb-3'>Badan Eksekutif Mahasiswa (BEM)</h3>
                                    <p className='text-white text-small'>BEM FF UI adalah lembaga eksekutif dari Fakultas Farmasi Universitas Indonesia yang memiliki tiga fungsi utama. Diantaranya, pertama sebagai wadah untuk menampung dan mengembangkan potensi, minat, dan bakat para mahasiswanya. Kedua, sebagai pintu untuk menyalurkan kepedulian sosialnya bagi masyarakat di sekitar. Ketiga, organisasi ini juga berperan dalam mengadvokasikan dan menyampaikan kebutuhan mahasiswanya kepada stakeholder terkait. Didirikan sejak tahun 2012 dan BEM FF UI bertanggung jawab langsung kepada BPM FF UI.</p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto'>
                                <div className='container rounded-md bg-red-600 px-5 py-5'>
                                    <h3 className='font-serif text-3xl text-center  pb-2 mb-3'>Badan Perwakilan Mahasiswa (BPM)</h3>
                                    <p className='text-white text-small'>BPM FF UI adalah sebuah organisasi kemahasiswaan Fakultas Farmasi Universitas Indonesia yang memiliki fungsi sebagai lembaga legislatif, yudikatif, serta pengendalian dan audit keuangan lembaga kemahasiswaan dalam IKM FF UI . BPM FF UI didirikan pada tanggal 10 juni 2012.</p>
                                </div>
                            </div>
                            <div className='rounded-md px-10 py-10 w-auto'>
                                <div className='container rounded-md bg-orange-400 px-5 py-5'>
                                    <h3 className='font-serif text-3xl text-center  pb-2 mb-3'>Syiar Islam Farmasi (SYIFA FF UI)</h3>
                                    <p className='text-white text-small'>SYIFA FF UI adalah sebuah organisasi dan lembaga dakwah fakultas yang didirikan sejak tahun 2012. Organisasi ini digunakan sebagai wadah untuk mempererat persaudaraan antara sesama mahasiswa farmasi yang beragama islam serta tempat untuk berbagi kisah bermanfaat bersama melalui kegiatan yang diadakan, yaitu seperti Sulfa.</p>
                                </div>
                            </div>
                        </div>
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

export default About;
