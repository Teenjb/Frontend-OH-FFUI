import "../index.css";
import React, { useState, useEffect } from "react";
import "toastify-js/src/toastify.css";
import axios from "axios";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Profile() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const Hostendpoint = "http://localhost:1337/api/users/me?populate[0]=preorder&populate[1]=preorder.merchandises";
  const endpoint = "https://api-oh-ffui-2022.herokuapp.com/api/users/me?populate[0]=preorder&populate[1]=preorder.merchandises";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const tokenLocal = JSON.parse(localStorage.getItem("token"));
      axios
        .get(endpoint, {
          headers: { Authorization: `Bearer ${tokenLocal.token}` },
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      setLoading(false);
      console.log(data);
    }
  }, [data]);

  return (
    <div
      className="grid h-full bg-gradient-to-b from-blue-900 to-blue-200 overflow-y-hidden relative"
      style={{ minHeight: 700 }}
    >
      <Header />
      <div className="flex h-max">
        <div class="container mx-auto my-5 p-5">
          <div class="md:flex no-wrap md:mx-5 mx-auto ">
            <div class="w-full mx-2 h-full">
              <div class="bg-white p-3 shadow-sm rounded-md">
                <div class="flex my-3 items-center space-x-2 px-2 font-semibold text-pink-500 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-pink-500 font-black flex md:text-3xl text-base items-center py-2 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
                    {" "}
                    Profile{" "}
                  </h2>
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
              <div class="bg-white p-3 shadow-sm rounded-md mt-10">
                <div class="flex my-3 items-center space-x-2 px-2 font-semibold text-pink-500 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-pink-500 font-black flex md:text-3xl text-base items-center py-2 flex-row justify-center relative top-0 bottom-0 left-0 right-0">
                    {" "}
                    Profile{" "}
                  </h2>
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
      <Footer/>
      {loading && (
        <div className="flex absolute z-50 h-screen w-full items-center justify-center bg-black bg-opacity-50">
          <div role="status">
            <svg
              aria-hidden="true"
              className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-white fill-pink-500"
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
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
