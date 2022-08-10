import "../index.css";
import logo from "../Img/logo.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Component/Loading";

function Submission() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [namaProyek, setNamaProyek] = useState("");
  const [jenisLomba, setJenisLomba] = useState("");
  const [fileLomba, setFileLomba] = useState(null);
  const [jenisLombaFlag, setJenisLombaFlag] = useState(true);
  const [dataConfirm, setDataConfirm] = useState(false);
  const checkEndpoint =
    "https://api-oh-ffui-2022.herokuapp.com/api/competitions/checkMyCompetition";
  const endpoint =
    "https://api-oh-ffui-2022.herokuapp.com/api/competitions/create";

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("token"));
    if (obj !== null) {
      setToken(obj.token);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      checkMyCompetition();
    }, 250);
  }, [jenisLomba]);

  async function checkMyCompetition() {
    if (jenisLomba !== "") {
      let config = {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          jenisLomba: jenisLomba,
        },
      };

      await axios
        .get(checkEndpoint, config)
        .then((response) => {
          if (response.data.errors) {
            console.log(response.data);
          } else {
            if (response.data.status === "Competition exists") {
              setJenisLombaFlag(false);
            } else {
              setJenisLombaFlag(true);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setJenisLombaFlag(false);
    }
  }

  const handleOnSelect = (e) => {
    const { value } = e.target;

    if (value === "Select") {
      setJenisLomba(null);
    } else {
      setJenisLomba(value);
    }
  };

  const handleInputChange = (event) => {
    const { id, checked, value } = event.target;
    if (id === "namaProyek") {
      setNamaProyek(value);
    }
    if (id === "dataConfirm") {
      setDataConfirm(checked);
    }
  };

  const handleFileChange = async (e) => {
    const { files } = e.target;
    setFileLomba(files[0]);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(token);
    const formData = new FormData();
    const data = `{"namaProyek": "${namaProyek}", "jenisLomba": "${jenisLomba}"}`;
    formData.append("data", data);
    console.log(data);
    formData.append("files.fileLomba", fileLomba);
    axios({
      method: "POST",
      url: endpoint,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      setLoading(false);
      window.location.href = "/home";
    });
  };

  return (
    <div>
      {loading && (
        <Loading/>
      )}
      <div
        className="bg-white h-full overflow-y-hidden relative"
        style={{ minHeight: 700 }}
      >
        <div className="min-h-full flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="">
                <img className="h-12 w-auto" src={logo} alt="Workflow" />
                <h2 className="mt-6 text-3xl font-extrabold text-middle text-gray-900">
                  Submission For Lomba
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Nama Proyek{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="namaProyek"
                          name="name"
                          type="name"
                          autoComplete="name"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={namaProyek}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Jenis Lomba{" "}
                      </label>
                      <div>
                        <select
                          value={jenisLomba}
                          onChange={(e) => handleOnSelect(e)}
                          className={`${
                            !jenisLombaFlag
                              ? "border-red-500"
                              : "border-gray-300"
                          }appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        >
                          <option value="Select">Pilih Jenis Lomba</option>
                          <option value="Desain">Desain Kemasan Obat</option>
                          <option value="Poster">Poster</option>
                        </select>
                        {!jenisLombaFlag && (
                          <div className="block text-xs mt-1 font-medium text-red-500">
                            Please select a valid competition type
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Upload File{" "}
                      </label>
                      <div className="flex justify-center items-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col justify-center items-center w-full h-64 mb-10 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100"
                        >
                          {!fileLomba && (
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                              <svg
                                aria-hidden="true"
                                className="mb-3 w-10 h-10 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                Image (MAX. 10MB)
                              </p>
                            </div>
                          )}
                          {fileLomba && (
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                              <img
                                src={fileLomba}
                                alt="file Lomba"
                                className="w-full h-full object-cover"
                              />
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {fileLomba.name}
                              </p>
                            </div>
                          )}
                          <input
                            id="dropzone-file"
                            onChange={(e) => handleFileChange(e)}
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="dataConfirm"
                          name="remember-me"
                          onChange={(e) => handleInputChange(e)}
                          type="checkbox"
                          value={dataConfirm}
                          className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-5 block text-sm text-gray-900"
                        >
                          {" "}
                          Data yang saya isikan adalah data yang
                          sebenar-benarnya. Jika ditemukan kecurangan saya siap
                          menerima konsekuensinya
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        disabled={!dataConfirm || !jenisLombaFlag || fileLomba === null}
                        type="submit"
                        className={`${
                          jenisLombaFlag && fileLomba !== null && dataConfirm
                            ? "text-pink-500 bg-white border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
                            : "text-gray-400 bg-white border-gray-500"
                        } w-full flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-mediu`}
                        onClick={(e) => handleOnSubmit(e)}
                      >
                        Upload
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative w-0 flex-1">
            <h1 className="grid h-full place-items-center relative w-full bg-[#f5145b] font-serif text-white justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10">
              Submission
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submission;
