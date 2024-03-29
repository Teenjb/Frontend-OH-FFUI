import "../index.css";
import React from "react";
import hero from "../Img/Hero Banner.png";
import sayOne from "../Img/Group 28.png";
import sayTwo from "../Img/Group 29.png";
import sayThree from "../Img/Group 40.png";
import sayFour from "../Img/Group 41.png";
import pic5 from "../Img/Group 33.png";
import pic6 from "../Img/Group 34.png";
import pic7 from "../Img/Group 35.png";
import pic1 from "../Img/Group 36.png";
import pic2 from "../Img/Group 37.png";
import pic4 from "../Img/Group 38.png";
import pic3 from "../Img/Group 39.png";
import pic8 from "../Img/Group 43.png";
import fufi from "../Img/Maskot_Fufi_Hi.png";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Home() {
  return (
    <div
      className="h-full bg-gradient-to-b from-[#f57ae5] to-[#fdf56e] overflow-y-hidden relative"
      style={{ minHeight: 700 }}
    >
      <Header />
      <div className="relative">
        <div className="container mx-auto flex flex-col items-center py-12">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              <img src={hero} alt="" className=""></img>
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center py-6 sm:py-10">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5">
            <h1 className="font-serif py-10 text-[#f9f9fb] text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Get To Know Our Mascot!
            </h1>
            <div>
              <div className="md:flex md:justify-evenly md:items-center place-items-center grid">
                <img
                  src={fufi}
                  alt=""
                  className="object-scale-up h-96 px-10 py-5"
                />
                <div className="bg-[#ea3431] rounded-md px-8 py-10">
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    “ Hey, There! I’m Fufi, your guide to empowerment ”
                  </h3>
                  <p className="text-white text-l px-10 py-5 ">
                    Fufi kembali hadir sebagai maskot Open House FF UI Vol. IV
                    dengan bentuk api yang melambangkan perannya sebagai cahaya
                    penuntun bagi para peserta dalam perjalanan meraih mimpi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5">
            <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              What They Say?
            </h1>
            <div>
              <div className="bg-[#fa7f22] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayFour}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-white text-l px-10 py-5 ">
                    " Open House FF UI memberikanku banyak pengetahuan baru
                    tentang Farmasi UI. Rangkaian acaranya sangat seru dan
                    menarik, seperti Talkshow, Campus Tour, dan Pharmacy Quiz.
                    Terima kasih Open House FF UI yang sudah memotivasiku hingga
                    bisa masuk FF UI. "
                  </p>
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    Dafina Azzahra Meliana - Peserta OH Vol. III
                  </h3>
                  <h3 className="text-l text-white text-l px-10 ">
                    FF 2023/ Jalur SNBP
                  </h3>
                </div>
              </div>
              <div className="py-3 md:py-5"></div>
              <div className="bg-[#70bae9] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayTwo}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-white text-l px-10 py-5 ">
                    " Ikut Open House FF UI membuat aku jadi banyak tahu tentang
                    Farmasi UI!! Kita diajak ke tempat-tempat para mahasiswa
                    belajar dan praktik dan itu sangattt menarik. Kakak-kakaknya
                    juga menjelaskan banyakkk hal tentang Farmasi. Open House FF
                    UI sangat seruuu!!! karena kita bisa banyak bertanya sama
                    kakak-kakak mahasiswa farmasi UI dan menambah wawasan kita
                    tentang Farmasii!! "
                  </p>
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    Khalisah Bianka Azlin - Peserta OH Vol. III
                  </h3>
                  <h3 className="text-l text-white text-l px-10 ">
                    FF 2023/ Jalur SNBT
                  </h3>
                </div>
              </div>
              <div className="py-3 md:py-5"></div>
              {/* <div className="bg-[#fdf56e] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayOne}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-[#454e5d] text-l px-10 py-5 ">
                    " Open House FF UI menambah wawasan banget, banyak hal yang
                    dibahas dan dibicarakan oleh kakak-kakaknya di acaranya.
                    Semua yang aku ingin tahu tentang farmasi dibahas sama
                    kakaknya. Mulai dari hal yang dipelajari di farmasi, prospek
                    kerjanya, hingga budaya farmasi pun dibahas. Selain itu,
                    acaranya bukan hanya seminar, tapi ada juga quiz dan sesi
                    ngobrol dengan kakaknya jadi pasti seru acaranya. "
                  </p>
                  <h3 className="font-serif text-2xl text-[#454e5d] text-l px-10 ">
                    Kezya - FF 22
                  </h3>
                  <h3 className="text-l text-[#454e5d] text-l px-10 ">
                    Peserta Open House FF UI Vol.II
                  </h3>
                </div>
              </div> */}
              <div className="py-3 md:py-5"></div>
              {/* <div className="bg-[#ea3431] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayThree}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-white text-l px-10 py-5 ">
                    " Dengan mengikuti Open House FF UI, aku jadi mengetahui
                    sistem perkuliahan di farmasi serta prospek kerjanya. Selain
                    itu, aku juga belajar menggerus obat dan membuat hand
                    sanitizer melalui kegiatan workshop di Open House FF UI,
                    juga terdapat kuis dan kompetisi yang berhadiah. Buat aku,
                    Open House FF UI seru banget dan recommended untuk kalian
                    yang penasaran tentang farmasi atau tertarik tapi masih
                    ragu. Aku jadi semakin yakin untuk memilih jurusan farmasi
                    setelah mengikuti Open House FF UI Vol.II "
                  </p>
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    Amalia - FF 22
                  </h3>
                  <h3 className="text-l text-white text-l px-10 ">
                    Peserta Open House FF UI Vol.II
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="font-serif md:mb-10 py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Rangkaian Acara
            </h1>
            <div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-[#5b88d9] opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic1} alt="" className="hidden md:block md:px-5" />
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Roadshow
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Agustus - Oktober 2023
                  </h5>
                  <p className="text-white">
                    Kegiatan kunjungan dan presentasi ke SMA/SMK sederajat untuk
                    memperkenalkan program studi farmasi dan memberi informasi
                    mengenai Open House FF UI Vol. IV. Silahkan hubungi kami
                    jika sekolahmu ingin dikunjungi, ya!
                  </p>
                </div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Seminar
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 1: Sabtu, 11 November 2023
                  </h5>
                  <p className="text-white">
                    Salah satu acara dalam rangkaian Open House FF UI Vol. IV
                    yang menghadirkan pembicara untuk memperkenalkan Fakultas
                    Farmasi UI
                  </p>
                </div>
                <img src={pic2} alt="" className="hidden md:block md:px-5" />
                <div className="hidden md:block bg-[#5b88d9] opacity-0 rounded-md px-10 py-10 w-full"></div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-[#5b88d9] opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic3} alt="" className="hidden md:block md:px-5" />
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Talkshow Farmasi Klinis
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 1: Sabtu, 11 November 2023
                  </h5>
                  <p className="text-white">
                    Bincang-bincang antara peserta dengan narasumber melalui
                    moderator mengenai prospek kerja di bidang farmasi klinis.
                  </p>
                </div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Tur Kampus & Lab
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 1: Sabtu, 11 November 2023
                  </h5>
                  <p className="text-white">
                    Kegiatan mengajak peserta berkeliling laboratorium dan
                    kampus untuk melihat fasilitas-fasilitas yang mendukung
                    proses pembelajaran dan penelitian di bidang farmasi
                  </p>
                </div>
                <img src={pic4} alt="" className="hidden md:block md:px-5" />
                <div className="hidden md:block bg-[#5b88d9] opacity-0 rounded-md px-10 py-10 w-full"></div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-[#5b88d9] opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic5} alt="" className="hidden md:block md:px-5" />
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Talkshow Farmasi Industri
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 2: Sabtu, 18 November 2023
                  </h5>
                  <p className="text-white">
                    Bincang-bincang antara peserta dengan narasumber melalui
                    moderator mengenai prospek kerja di bidang farmasi industri
                  </p>
                </div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Sharing Session
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 2: Sabtu, 18 November 2023
                  </h5>
                  <p className="text-white">
                    Melibatkan mahasiswa sarjana Farmasi UI dari berbagai jalur
                    masuk untuk berbagi pengalaman dan kisah agar memberikan
                    motivasi dan pandangan langsung selama berjuang meraih
                    pendidikan farmasi
                  </p>
                </div>
                <img src={pic6} alt="" className="hidden md:block md:px-5" />
                <div className="hidden md:block bg-[#f57ae5]opacity-0 rounded-md px-10 py-10 w-full"></div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-[#5b88d9] opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic7} alt="" className="hidden md:block md:px-5" />
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Workshop
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 2: Sabtu, 18 November 2023
                  </h5>
                  <p className="text-white">
                    Kegiatan praktis yang memungkinkan peserta untuk simulasi
                    meracik sediaan obat
                  </p>
                </div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="bg-[#5b88d9] rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Pharmacy Ace
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 2: Sabtu, 18 November 2023
                  </h5>
                  <p className="text-white">
                    Ajang kompetisi peserta mengenai ilmu pengetahuan dasar
                    seputar farmasi yang mengadaptasi salah satu mekanisme ujian
                    OSCE
                  </p>
                </div>
                <img src={pic8} alt="" className="hidden md:block md:px-5" />
                <div className="hidden md:block bg-[#f57ae5]opacity-0 rounded-md px-10 py-10 w-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col">
            <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Video Teaser
            </h1>
          </div>
          <iframe
            src="https://www.youtube.com/embed/97Lq9V-UZZ8?si=soEG5lOVbmw5EiON"
            title="YouTube video player"
            frameborder="0"
            className="bg-[#fa7f22] md:items-center place-items-center w-11/12 h-64 p-2 md:p-10 rounded-md lg:w-11/12 lg:h-screen md:w-3/4 md:h-96"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
