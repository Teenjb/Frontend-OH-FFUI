import "../index.css";
import logo from "../Img/logo.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Submission() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [namaProyek, setNamaProyek] = useState(null);
  const [jenisLomba, setJenisLomba] = useState(null);
  const [fileLomba, setFileLomba] = useState(null);
  const [jenisLombaFlag, setJenisLombaFlag] = useState(false);
  const endpoint = "http://localhost:1337/api/competitions/create";
  const checkEndpoint =
    "http://localhost:1337/api/competitions/checkMyCompetition";
  const hostendpoint =
    "https://api-oh-ffui-2022.herokuapp.com/api/competitions/create";

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem("token"));
    setToken(obj.token);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      checkMyCompetition();
    }, 500);
  }, [jenisLomba]);

  async function checkMyCompetition() {
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
            console.log("Competition exists");
          } else {
            setJenisLombaFlag(true);
            console.log("Competition does not exist");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
    const { id, value } = event.target;
    if (id === "namaProyek") {
      setNamaProyek(value);
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
    });
  };

  return (
    <div>
      {loading && (
        <div className="flex fixed z-50 h-screen w-full items-center justify-center bg-black bg-opacity-50">
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
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div
        className="bg-white h-screen overflow-y-hidden relative"
        style={{ minHeight: 700 }}
      >
        <div className="min-h-full flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="">
                <img className="h-12 w-auto" src={logo} alt="Workflow" />
                <h2 className="mt-6 text-3xl font-extrabold text-middle text-gray-900">
                  Submission for Lomba
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label
                        for="name"
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
                          autocomplete="name"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={namaProyek}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="name"
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
                            !jenisLombaFlag ? "border-red-500" : "border-gray-300"
                          }appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        >
                          <option value="Select" disabled>Pilih Jenis Lomba</option>
                          <option value="Desain">Desain</option>
                          <option value="Poster">Poster</option>
                        </select>
                        {!jenisLombaFlag && (
                          <div className="block text-xs mt-1 font-medium text-red-500">
                            Submission for this Competition is Already Taken
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        for="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {" "}
                        Upload File{" "}
                      </label>
                      <div class="flex justify-center items-center w-full">
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
                          type="checkbox"
                          className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          for="remember-me"
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
                      <button disabled={jenisLombaFlag ? false : true}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
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
