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
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Home() {
  return (
    <div
      className="grid h-full bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative"
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
        <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5">
            <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
            Get To Know Our Mascot!
            </h1>
            <div>
              <div className="bg-orange-400 md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayFour}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-white text-l px-10 py-5 ">
                    " Di fakultas farmasi, kami dipertemukan dengan dosen-dosen
                    yang ahli dan kompeten dalam bidang masing-masing, juga
                    fasilitas yang memadai. Kami diajari beragam mata kuliah
                    spesifik mengenai farmasi, ilmu pengetahuan alam, hingga
                    ilmu kesehatan. Kami juga bebas mengakses kegiatan-kegiatan
                    non akademik, seperti perlombaan, organisasi, hingga magang.
                    So, jika kalian tertarik untuk mengetahui jurusan farmasi
                    lebih lanjut, yuk ikuti Open House FF UI Vol. III! "
                  </p>
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    Mishbahus Surur - FF 19
                  </h3>
                  <h3 className="text-l text-white text-l px-10 ">
                    Ketua BEM FF UI 2022
                  </h3>
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
              <div className="bg-orange-400 md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayFour}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-white text-l px-10 py-5 ">
                    " Di fakultas farmasi, kami dipertemukan dengan dosen-dosen
                    yang ahli dan kompeten dalam bidang masing-masing, juga
                    fasilitas yang memadai. Kami diajari beragam mata kuliah
                    spesifik mengenai farmasi, ilmu pengetahuan alam, hingga
                    ilmu kesehatan. Kami juga bebas mengakses kegiatan-kegiatan
                    non akademik, seperti perlombaan, organisasi, hingga magang.
                    So, jika kalian tertarik untuk mengetahui jurusan farmasi
                    lebih lanjut, yuk ikuti Open House FF UI Vol. III! "
                  </p>
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    Mishbahus Surur - FF 19
                  </h3>
                  <h3 className="text-l text-white text-l px-10 ">
                    Ketua BEM FF UI 2022
                  </h3>
                </div>
              </div>
              <div className="py-3 md:py-5"></div>
              <div className="bg-cyan-600 md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayTwo}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-white text-l px-10 py-5 ">
                    " Di fakultas farmasi, kalian akan banyak mempelajari hal
                    mulai dari kimia, fisika, biologi. Tapi bagian terpentingnya
                    adalah bagaimana kita dapat mengembangkan potensi diri untuk
                    menjadi pribadi yang lebih baik. Mendaftarkan diri di IISMA
                    adalah suatu perjalanan yang panjang, mulai dari
                    mengumpulkan dokumen, seleksi berkas, wawancara hingga
                    kemarin aku diterima menjadi perwakilan FF UI di IISMA tahun
                    ini. Aku merasa honoured, dan aku percaya di IISMA aku dapat
                    mengembangkan diriku untuk dapat memiliki mindset yang lebih
                    global. "
                  </p>
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    Adriel Sebastian - FF 19
                  </h3>
                  <h3 className="text-l text-white text-l px-10 ">
                    Awardee IISMA
                  </h3>
                </div>
              </div>
              <div className="py-3 md:py-5"></div>
              <div className="bg-[#87b07b] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <img
                  src={sayOne}
                  alt=""
                  className="object-scale-down h-80 w-100"
                />
                <div>
                  <p className="text-white text-l px-10 py-5 ">
                    " Open House FF UI menambah wawasan banget, banyak hal yang
                    dibahas dan dibicarakan oleh kakak-kakaknya di acaranya.
                    Semua yang aku ingin tahu tentang farmasi dibahas sama
                    kakaknya. Mulai dari hal yang dipelajari di farmasi, prospek
                    kerjanya, hingga budaya farmasi pun dibahas. Selain itu,
                    acaranya bukan hanya seminar, tapi ada juga quiz dan sesi
                    ngobrol dengan kakaknya jadi pasti seru acaranya. "
                  </p>
                  <h3 className="font-serif text-2xl text-white text-l px-10 ">
                    Kezya - FF 22
                  </h3>
                  <h3 className="text-l text-white text-l px-10 ">
                    Peserta Open House FF UI Vol.II
                  </h3>
                </div>
              </div>
              <div className="py-3 md:py-5"></div>
              <div className="bg-[#f5145b] md:flex md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
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
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic1} alt="" className="hidden md:block md:px-5" />
                <div className="bg-pink-500 rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Roadshow
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Agustus-November 2022
                  </h5>
                  <p className="text-white">
                    Roadshow merupakan ajang memperkenalkan dan mempromosikan
                    Open House FF UI Vol. III dengan mengunjungi SMA/SMK
                    sederajat. Tertarik dan sekolahmu ingin dikunjungi? Yuk
                    hubungi linimasa kami!
                  </p>
                </div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="bg-pink-500 rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Seminar Daring
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 1: Sabtu, 19 November 2022
                  </h5>
                  <p className="text-white">
                    Rangkaian acara pada main event yang menghadirkan pembicara
                    ahli untuk membahas topik tertentu.
                  </p>
                </div>
                <img src={pic2} alt="" className="hidden md:block md:px-5" />
                <div className="hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full"></div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic3} alt="" className="hidden md:block md:px-5" />
                <div className="bg-pink-500 rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Talkshow
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 1: Sabtu, 19 November 2022
                  </h5>
                  <p className="text-white">
                    Suatu jenis acara yang berupa perbincangan antara moderator
                    dengan pembicara berdasarkan term of reference yang
                    diberikan oleh panitia.
                  </p>
                </div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="bg-pink-500 rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Sharing session
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 1: Sabtu, 19 November 2022
                  </h5>
                  <p className="text-white">
                    Live streaming talkshow dengan mahasiswa FFUI yang aktif,
                    berprestasi, dan representatif dari masing-masing jalur
                    masuk UI.
                  </p>
                </div>
                <img src={pic4} alt="" className="hidden md:block md:px-5" />
                <div className="hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full"></div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic5} alt="" className="hidden md:block md:px-5" />
                <div className="bg-pink-500 rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Tur kampus dan laboratorium
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 2: Sabtu, 26 November 2022
                  </h5>
                  <p className="text-white">
                    Rangkaian acara pada main event yang mengajak peserta untuk
                    melihat langsung laboratorium di FF UI, apotek simulasi di
                    Gedung Pascasarjana dan Profesi FF UI, serta Gedung RIK UI.
                  </p>
                </div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-5"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="bg-pink-500 rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Workshop
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 2: Sabtu, 26 November 2022
                  </h5>
                  <p className="text-white">
                    Kegiatan simulasi praktikum yang memberikan kesempatan bagi
                    peserta untuk membuat suatu sediaan (pulveres, kapsul, dan
                    liquid hand soap).
                  </p>
                </div>
                <img src={pic6} alt="" className="hidden md:block md:px-5" />
                <div className="hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full"></div>
                <div className="grid md:hidden mx-auto py-5">
                  <div className="w-6 h-6 rounded-full bg-blue-900" />
                  <div className="mt-5 w-6 h-6 rounded-full bg-blue-900" />
                </div>
              </div>
              <div className="py-2 md:py-1"></div>
              <div className="grid md:flex justify-evenly items-center">
                <div className="hidden md:block bg-pink-500 opacity-0 rounded-md px-10 py-10 w-full"></div>
                <img src={pic7} alt="" className="hidden md:block md:px-5" />
                <div className="bg-pink-500 rounded-md px-10 py-10 w-full">
                  <h3 className="font-serif text-3xl text-white pb-2">
                    Pharmacy Championship (Pharmission dan Pharmacy Quiz)
                  </h3>
                  <h5 className="font-bold text-xl text-white pb-4">
                    Day 2: Sabtu, 26 November 2022
                  </h5>
                  <p className="text-white">
                    Acara perlombaan berhadiah yang terdiri atas Pharmission
                    (submisi karya) dan Pharmacy Quiz (pos soal) untuk
                    memperkenalkan mata kuliah farmasi dengan dibantu dengan
                    pemberian modul.
                  </p>
                </div>
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
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FomHhPZxlEU"
            title="YouTube video player"
            frameborder="0"
            className="bg-orange-400 md:items-center place-items-center p-5 md:p-10 rounded-md lg:w-11/12 lg:h-screen md:w-3/4 md:h-96"
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
