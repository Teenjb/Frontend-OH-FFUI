import "../index.css";
import React, { useState, useEffect } from "react";
import "toastify-js/src/toastify.css";
import axios from "axios";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import PreorderCard from "../Component/PreorderCard";

function Profile() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const endpoint = "http://localhost:1337/api/users/me?populate=preorders";
  const hostendpoint =
    "https://api-oh-ffui-2022.herokuapp.com/api/users/me?populate[0]=preorders&populate[1]=preorders.merchandises";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const tokenLocal = JSON.parse(localStorage.getItem("token"));
      axios
        .get(endpoint, {
          headers: { Authorization: `Bearer ${tokenLocal.token}` },
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          //console.log(err);
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div
        className="grid h-full lg:h-screen bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative"
        style={{ minHeight: 700 }}
      >
        <div className="flex h-max">
          <div className="container mx-auto my-5 p-5">
            <div className="flex items-center no-wrap md:mx-5 mx-auto ">
              <div className="w-full h-full">
                <div className="bg-white p-3 shadow-sm rounded-md">
                  <div className="flex my-3 items-center space-x-2 px-2 font-semibold text-pink-500 leading-8">
                    <span clas="text-green-500">
                      <svg
                        className="h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <h2 className="text-pink-500 font-black flex md:text-3xl text-base items-center py-2 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
                      {" "}
                      Profile{" "}
                    </h2>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Username</div>
                        {!data && <div className="px-4 py-2">loading</div>}
                        {data && (
                          <div className="px-4 py-2">{data.username}</div>
                        )}
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Nama Lengkap
                        </div>
                        {!data && <div className="px-4 py-2">loading</div>}
                        {data && (
                          <div className="px-4 py-2">{data.fullName}</div>
                        )}
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        {!data && <div className="px-4 py-2">loading</div>}
                        {data && <div className="px-4 py-2">{data.email}</div>}
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Nomor Telepon
                        </div>
                        {!data && <div className="px-4 py-2">loading</div>}
                        {data && (
                          <div className="px-4 py-2">{data.phoneNumber}</div>
                        )}
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Asal Sekolah
                        </div>
                        {!data && <div className="px-4 py-2">loading</div>}
                        {data && (
                          <div className="px-4 py-2">{data.schoolOrigin}</div>
                        )}
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Alamat</div>
                        {!data && <div className="px-4 py-2">loading</div>}
                        {data && (
                          <div className="px-4 py-2">{data.address}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading && <Loading />}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
