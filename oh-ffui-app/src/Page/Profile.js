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
  const [preorder, setPreorder] = useState([]);
  const Hostendpoint =
    "http://localhost:1337/api/users/me?populate[0]=preorders&populate[1]=preorder.merchandises";
  const endpoint =
    "https://api-oh-ffui-2022.herokuapp.com/api/users/me?populate[0]=preorders&populate[1]=preorders.merchandises";

  async function getPreorder() {
    setLoading(true);
    setPreorder(data.preorders);
  }

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
          console.log(err);
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      getPreorder();
      setLoading(false);
      console.log(preorder);
    }
  }, [data]);

  return (
    <div
      className="grid h-full bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative"
      style={{ minHeight: 700 }}
    >
      <Header />
      <div className="flex h-max">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:mx-5 mx-auto ">
            <div className="w-full mx-2 h-full">
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
                      {data && <div className="px-4 py-2">{data.username}</div>}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Nama Lengkap</div>
                      {!data && <div className="px-4 py-2">loading</div>}
                      {data && <div className="px-4 py-2">{data.fullName}</div>}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      {!data && <div className="px-4 py-2">loading</div>}
                      {data && <div className="px-4 py-2">{data.email}</div>}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Nomor Telepon</div>
                      {!data && <div className="px-4 py-2">loading</div>}
                      {data && <div className="px-4 py-2">{data.phoneNumber}</div>}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Asal Sekolah</div>
                      {!data && <div className="px-4 py-2">loading</div>}
                      {data && <div className="px-4 py-2">{data.schoolOrigin}</div>}
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Alamat</div>
                      {!data && <div className="px-4 py-2">loading</div>}
                      {data && <div className="px-4 py-2">{data.address}</div>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 shadow-sm rounded-md mt-10">
                <div className="flex my-3 items-center space-x-2 px-2 font-semibold text-pink-500 leading-8">
                  <span clas="text-green-500">
                  <svg
              className="flex-1 w-10 h-8 fill-pink-600 pointer-events-none"
              viewBox="0 0 24 24"
            >
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
                  </span>
                  <h2 className="text-pink-500 font-black flex md:text-3xl text-base items-center py-2 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
                    {" "}
                    Preorder{" "}
                  </h2>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">
                    Id
                  </h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">
                    Tanggal
                  </h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">
                    Status
                  </h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/6 text-center">
                    Detail
                  </h3>
                </div>
                {preorder.map((item) => (
                  <PreorderCard id={item.id} date={item.createdAt} status={item.status} detail={item.merchandises}/>
                ))}
                {preorder.length === 0 && <div className="text-center">Tidak ada preorder</div>}
                {!preorder && (
                      <div className="w-full h-full flex justify-center items-center">
                        <svg
                          role="status"
                          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-sky-900 fill-gray-600 dark:fill-orange-500"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {loading && (
        <Loading/>
      )}
    </div>
  );
}

export default Profile;
