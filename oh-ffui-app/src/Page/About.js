import "../index.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function About() {
  return (
    <div
      className="bg-gradient-to-b from-[#f57ae5] to-[#fdf56e] overflow-y-hidden relative"
      style={{ minHeight: 700 }}
    >
      <Header />
      <div className="relative">
        <div className="mx-auto md:flex md:flex-col items-center py-12 sm:py-24">
          <div className="md:w-11/12 flex justify-center items-center ">
            <h1 className="font-serif py-10 text-white text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              About Us
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center py-12">
          <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
            <div className="w-11/12 md:w-2/3 lg:flex justify-center items-center flex-col">
              <Carousel>
                <div>
                  <img src={am1} alt="" />
                  <p className="legend bg-pink-600">Gedung FF UI</p>
                </div>
                <div>
                  <img src={am2} alt="" />
                  <p className="legend bg-pink-600">Gedung FF UI</p>
                </div>
                <div>
                  <img src={am3} alt="" />
                  <p className="legend bg-pink-600">Gedung FF UI</p>
                </div>
                <div>
                  <img src={am4} alt="" />
                  <p className="legend bg-pink-600">Gedung FF UI</p>
                </div>
                <div>
                  <img src={am5} alt="" />
                  <p className="legend bg-pink-600">Gedung FF UI</p>
                </div>
                <div>
                  <img src={am6} alt="" />
                  <p className="legend bg-pink-600">Gedung FF UI</p>
                </div>
                <div>
                  <img src={am7} alt="" />
                  <p className="legend bg-pink-600">Gedung RIK</p>
                </div>
                <div>
                  <img src={am8} alt="" />
                  <p className="legend bg-pink-600">Gedung RIK</p>
                </div>
                <div>
                  <img src={am9} alt="" />
                  <p className="legend bg-pink-600">Gedung RIK</p>
                </div>
                <div>
                  <img src={am10} alt="" />
                  <p className="legend bg-pink-600">Gedung RIK</p>
                </div>
                <div>
                  <img src={am11} alt="" />
                  <p className="legend bg-pink-600">Gedung RIK</p>
                </div>
                <div>
                  <img src={am12} alt="" />
                  <p className="legend bg-pink-600">Gedung RIK</p>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
            <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
              <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                Sejarah
              </h1>
              <div className="bg-[#ea3431] md:flex md:text-xl text-medium text-white md:justify-evenly md:items-center place-items-center grid py-10 px-10 rounded-md">
                <p>
                  Farmasi merupakan ilmu dan seni yang berkaitan dengan obat.
                  Mereka yang berkecimpung di bidang kefarmasian adalah para
                  ahli obat yang menguasai ilmu dan pengetahuan obat-obatan
                  secara mendalam dari segala aspek, mulai dari identifikasi,
                  seleksi, preservasi, kombinasi, aksi farmakologi, analisis dan
                  standarisasi obat dan bahan obat, serta cara distribusi,
                  penyimpanan dan penggunaan yang tepat dan aman. Farmasi UI
                  didirikan pada bulan September 1965 di Jl. Diponegoro, Jakarta
                  Pusat. Jurusan Farmasi UI awalnya berada di bawah Fakultas
                  Ilmu Pasti dan Ilmu Alam (FIPIA) yang kemudian berdasarkan
                  Kepres No. 44 tahun 1982, berubah menjadi Fakultas Matematika
                  dan Ilmu Pengetahuan Alam (FMIPA). Pada tanggal 18 Januari
                  2003, Jurusan Farmasi FMIPA UI berubah menjadi Departemen
                  Farmasi FMIPA UI. Selanjutnya dalam rangka mendukung pendirian
                  Rumpun Ilmu Kesehatan, pada tanggal 29 November 2011,
                  Departemen Farmasi FMIPA UI berubah menjadi Fakultas Farmasi
                  Universitas Indonesia (FF UI).
                </p>
              </div>
            </div>
            <div className="container mx-auto grid md:flex md:flex-col items-center py-6 sm:py-12">
              <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                <h1 className="font-serif py-10 text-white  text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                  Program Pendidikan
                </h1>
                <p className="text-medium text-xl text-white  justify-center mb-5 items-center">
                  Fakultas farmasi Universitas Indonesia menyediakan 5 jenis
                  program pendidikan, yaitu:
                </p>
                <div className="container bg-[#5b88d9] rounded-md flex items-center justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 items-center text-medium">
                    <div className="rounded-md md:p-10 w-auto text-center">
                      <div className="container rounded-md bg-[#70bae9] px-10 py-10">
                        <h3 className="font-serif text-3xl text-black pb-2 mb-3">
                          Program Pendidikan Sarjana (S1) Farmasi
                        </h3>
                        <p className="text-medium">
                          Dalam jenjang ini, diberikan dasar–dasar ilmu
                          pengetahuan dan teknologi bidang kefarmasian. Tersedia
                          dalam dua kelas yaitu S1 Reguler dan S1 Paralel.
                          Lulusan akan mendapatkan gelar S.Farm.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto text-center">
                      <div className="container rounded-md px-10 py-10">
                        <h3 className="font-serif text-3xl text-black pb-2 mb-3">
                          Program Pendidikan Profesi Apoteker
                        </h3>
                        <p className="text-medium">
                          Program pendidikan ini diperlukan untuk memperoleh
                          keahlian dengan gelar Apoteker/Farmasis (Apt.).
                          Merupakan salah satu program pendidikan setelah
                          Program Sarjana (S1) Farmasi. Terdapat 2 macam
                          peminatan yaitu: Praktek Kerja Profesi Apoteker di
                          Industri Farmasi dan Praktek Kerja Profesi Apoteker di
                          Rumah Sakit dan Puskesmas
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto text-center">
                      <div className="container rounded-md  bg-[#70bae9] md:bg-transparent md:text-black px-10 py-10">
                        <h3 className="font-serif text-3xl text-black pb-2 mb-3">
                          Program Pendidikan Magister Ilmu Kefarmasian (S2)
                        </h3>
                        <p className="text-medium">
                          Lulusan program pendidikan ini akan mendapatkan gelar
                          M.Farm. Terdiri dari 6 peminatan yaitu: Program
                          Pendidikan Magister Farmasi kekhususan Biologi
                          Farmasi, Program Pendidikan Magister Farmasi
                          kekhususan Farmasi Klinik, Program Pendidikan Magister
                          Farmasi kekhususan Kimia Farmasi, Program Pendidikan
                          Magister Farmasi kekhususan Teknologi Farmasi, Program
                          Pendidikan Magister Farmasi kekhususan Bioteknologi
                          Farmasi, Program Pendidikan Magister Farmasi
                          kekhususan Farmakologi dan Toksikologi
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto text-center">
                      <div className="container rounded-md  md:bg-[#70bae9] px-10 py-10">
                        <h3 className="font-serif text-3xl text-black pb-2 mb-3">
                          Program Pendidikan Magister Ilmu Herbal (S2)
                        </h3>
                        <p className="text-medium">
                          Lulusan program pendidikan ini akan mendapatkan gelar
                          M.Farm. Terdiri dari 2 peminatan yaitu: Program
                          Pendidikan Magister Ilmu Herbal Kekhususan Herbal
                          Medis dan Program Pendidikan Magister Ilmu Herbal
                          Kekhususan Herbal dalam Keperawatan dan Estetika
                          Indonesia
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto text-center">
                      <div className="container rounded-md bg-[#70bae9] px-10 py-10">
                        <h3 className="font-serif text-3xl text-black pb-2 mb-3">
                          Doktor Ilmu Farmasi (S3)
                        </h3>
                        <p className="text-medium">
                          Program ini merupakan tingkat pendidikan tenaga
                          farmasis yang paling tinggi secara formal dan lulusan
                          akan mendapat gelar Dr. Program Doktor ini didasari
                          kenyataan bahwa dalam kebutuhan penelitian bidang
                          farmasi saat ini mencakup ilmu dasar farmasi serta
                          ilmu terapan bidang farmasi klinik.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto grid md:flex md:flex-col items-start py-6 sm:py-12">
              <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                <h1 className="font-serif py-10 text-white  text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                  Jalur Masuk dan Daya Tampung
                </h1>
                <p className="text-medium text-xl justify-center text-white  items-center">
                  Terdapat 4 jalur masuk untuk Fakultas Farmasi UI, yaitu :
                </p>
                <div className="container rounded-md flex items-start justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 md:p-5 items-start text-medium">
                    <div className="rounded-md md:p-10 w-auto">
                      <div className="container rounded-md bg-[#fdf56e] px-5 py-5">
                        <h3 className="font-serif text-3xl text-center text-blackd pb-2 mb-3">
                          SNBP
                        </h3>
                        <p className="text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md">
                          Jalur seleksi berdasarkan nilai akademik rapor yang
                          diselenggarakan secara nasional oleh LTMPT.
                        </p>
                        <p className="text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md">
                          Daya tampung (reguler): 30 orang
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto">
                      <div className="container rounded-md bg-[#fa7f22] px-5 py-5">
                        <h3 className="font-serif text-3xl text-center text-white pb-2 mb-3">
                          SNBT
                        </h3>
                        <p className="text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md">
                          Seleksi bersama yang diselenggarakan secara nasional
                          oleh LTMPT melalui Ujian Tulis Berbasis Komputer
                          (UTBK).
                        </p>
                        <p className="text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md">
                          Daya tampung (reguler): 45 orang
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto">
                      <div className="container rounded-md bg-[#5b88d9] px-5 py-5">
                        <h3 className="font-serif text-3xl text-center text-white pb-2 mb-3">
                          PPKB
                        </h3>
                        <p className="text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md">
                          Jalur seleksi berdasarkan nilai akademik rapor yang
                          melibatkan peran sekolah yang diselenggarakan oleh
                          Universitas Indonesia.
                        </p>
                        <p className="text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md">
                          Daya tampung (reguler): 8 orang Daya tampung (non
                          reguler): 30 orang
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto">
                      <div className="container rounded-md bg-[#e09bf4] px-5 py-5">
                        <h3 className="font-serif text-3xl text-center text-blackd pb-2 mb-3">
                          SIMAK UI
                        </h3>
                        <p className="text-medium container bg-white mx-auto mb-4 px-2 py-2 rounded-md">
                          Ujian seleksi dengan pertimbangan nilai UTBK yang
                          diselenggarakan oleh Universitas Indonesia.
                        </p>
                        <p className="text-medium container bg-white mx-auto mt-4 px-2 py-2 rounded-md">
                          Daya tampung (reguler): 8 orang Daya tampung (non
                          reguler): 29 orang
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto grid md:flex md:flex-col items-center text-center py-6 sm:py-12">
              <div className="lg:flex justify-center items-center flex-col mb-5 md:mx-36 mx-10">
                <h1 className="font-serif py-10 text-white text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
                  Organisasi
                </h1>
                <div className="container rounded-md flex items-center justify-center">
                  <div className="grid grid-cols-1 gap-2 p-5 items-start text-medium">
                    <div className="rounded-md md:p-10 w-auto">
                      <div className="container rounded-md bg-[#ea3431] px-5 py-5">
                        <h3 className="font-serif text-white text-3xl text-center  pb-2 mb-3">
                          Badan Eksekutif Mahasiswa (BEM)
                        </h3>
                        <p className="text-small container bg-white mx-auto mb-4 px-2 py-2 rounded-md">
                          BEM FF UI adalah lembaga eksekutif dari Fakultas
                          Farmasi Universitas Indonesia yang memiliki tiga
                          fungsi utama. Diantaranya, pertama sebagai wadah untuk
                          menampung dan mengembangkan potensi, minat, dan bakat
                          para mahasiswanya. Kedua, sebagai pintu untuk
                          menyalurkan kepedulian sosialnya bagi masyarakat di
                          sekitar. Ketiga, organisasi ini juga berperan dalam
                          mengadvokasikan dan menyampaikan kebutuhan
                          mahasiswanya kepada stakeholder terkait. Didirikan
                          sejak tahun 2012 dan BEM FF UI bertanggung jawab
                          langsung kepada BPM FF UI.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto">
                      <div className="container rounded-md bg-[#fdf56e] px-5 py-5">
                        <h3 className="font-serif text-black text-3xl text-center  pb-2 mb-3">
                          Badan Perwakilan Mahasiswa (BPM)
                        </h3>
                        <p className="text-small container bg-white mx-auto mb-4 px-2 py-2 rounded-md">
                          BPM FF UI adalah sebuah organisasi kemahasiswaan
                          Fakultas Farmasi Universitas Indonesia yang memiliki
                          fungsi sebagai lembaga legislatif, yudikatif, serta
                          pengendalian dan audit keuangan lembaga kemahasiswaan
                          dalam IKM FF UI . BPM FF UI didirikan pada tanggal 10
                          juni 2012.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-md md:p-10 w-auto">
                      <div className="container rounded-md bg-[#fa7f22] px-5 py-5">
                        <h3 className="font-serif text-white text-3xl text-center  pb-2 mb-3">
                          Syiar Islam Farmasi (SYIFA FF UI)
                        </h3>
                        <p className="text-small container bg-white mx-auto mb-4 px-2 py-2 rounded-md">
                          SYIFA FF UI adalah sebuah organisasi dan lembaga
                          dakwah fakultas yang didirikan sejak tahun 2012.
                          Organisasi ini digunakan sebagai wadah untuk
                          mempererat persaudaraan antara sesama mahasiswa
                          farmasi yang beragama islam serta tempat untuk berbagi
                          kisah bermanfaat bersama melalui kegiatan yang
                          diadakan, yaitu seperti Sulfa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
