import '../index.css';

import logo from "../Img/logo.png";
import React, { useEffect, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const axios = require("axios");
const endpoint = "http://localhost:1337/graphql";
const provinsiEndpoint = "https://dev.farizdotid.com/api/daerahindonesia/provinsi";
const kotaEndpoint = "https://dev.farizdotid.com/api/daerahindonesia/kota";



function Register(){
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [whatsapp, setWhatsapp] = useState(null);
    const [schoolOrigin, setSchoolOrigin] = useState(null);
    const [provinsi, setProvinsi] = useState(null);
    const [kota, setKota] = useState(null);
    const [kodePos, setKodePos] = useState(null);
    const [alamat, setAlamat] = useState(null);
    const [dataConfirm, setDataConfirm] = useState(false);
    const [dataProvinsi, setDataProvinsi] = useState([]);
    const [dataKota, setDataKota] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingkota, setLoadingkota] = useState(false);
    const [selectedProvinsi, setSelectedProvinsi] = useState(0);
    const [token, setToken] = useState(null);
    const [notMatch, setNotMatch] = useState(false);

    async function loadData(){
        setLoading(true);
        axios.get(provinsiEndpoint).then(response => {
            setDataProvinsi(response.data.provinsi);
            setLoading(false);
        }).catch(error => {
            console.log(error);
        });
    }

    async function loadDataKota(){
        setLoadingkota(true);
        axios.get(kotaEndpoint,{params:{id_provinsi:selectedProvinsi}}).then(response => {
            setDataKota(response.data.kota_kabupaten);
            setLoadingkota(false);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        loadData();
    },[])

    useEffect(() => {
        loadDataKota();
    },[selectedProvinsi])
    
    const handleInputChange = (event) => {
        const { id, value, checked, options} = event.target;

        if (id === "name") {
            console.log(value);
            setName(value);
        }
        if (id === "username") {
            setUsername(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            console.log(value);
            if(password !== value){
                setNotMatch(true);
            }else{
                setNotMatch(false);
            }
            setConfirmPassword(value);
        }
        if (id === "whatsapp") {
            setWhatsapp(value);
        }
        if (id === "schoolOrigin") {
            setSchoolOrigin(value);
        }
        if (id === "provinsi") {
            const selectedIndex = event.target.options.selectedIndex;
            setSelectedProvinsi(options[selectedIndex].getAttribute("dataKey"));
            setProvinsi(value);
        }
        if (id === "kota") {
            setKota(value);
        }
        if (id === "kodePos") {
            setKodePos(value);
        }
        if (id === "alamat") {
            setAlamat(value);
        }
        if (id === "dataConfirm") {
            setDataConfirm(checked);
        }
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const headers = {
            "content-type": "application/json"
        };
        const graphqlQuery = {
            query: `mutation register ($username: String!, $email: String!, $password: String!, $fullName: String!, $phoneNumber: String, $schoolOrigin: String!, $address: String!) {
                register (
                    input: {
                        username: $username,
                        email: $email,
                        password: $password,
                        fullName: $fullName,
                        phoneNumber: $phoneNumber,
                        schoolOrigin: $schoolOrigin,
                        address: $address
                    }
                ){
                    jwt
                }
            }`,
            variables: {
                username: username,
                email: email,
                password: password,
                fullName: name,
                phoneNumber: whatsapp,
                schoolOrigin: schoolOrigin,
                address:`${alamat}, ${kodePos}, ${kota}, ${provinsi}`

            }
        };
        console.log(graphqlQuery);
        const response = await axios.post(endpoint, graphqlQuery, {headers: headers})
        console.log(response.data);
        if(response.data.errors){
            Toastify({
                text: "Register Gagal",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "#FF0000",
                },
                onClick: function(){} // Callback after click
              }).showToast();
              setToken(null);
        }else{
            Toastify({
                text: "Register Berhasil",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "#87B07B",
                },
                onClick: function(){} // Callback after click
              }).showToast();
              setToken(response.data.data.login.jwt);
              window.location.href = '/';
        }
    }

    return(
        <div className="bg-white overflow-y-hidden relative" style={{ minHeight: 700 }}>
            <div className="min-h-full flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className=''>
                        <img className="h-12 w-auto" src={logo} alt="Workflow"/>
                        <h2 className="mt-6 text-3xl font-extrabold text-middle text-gray-900">Your Future Starts Here!</h2>
                    </div>

                    <div className="mt-8">
                        <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                            <label for="name" className="block text-sm font-medium text-gray-700"> Nama Lengkap </label>
                            <div className="mt-1">
                                <input id="name" name="name" type="name" autocomplete="name" required value={name} onChange={(e)=>(handleInputChange(e))} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>
                            
                            <div>
                            <label for="name" className="block text-sm font-medium text-gray-700"> Username </label>
                            <div className="mt-1">
                                <input id="username" name="name" type="name" autocomplete="name" required value={username} onChange={(e)=>(handleInputChange(e))} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div>
                            <label for="email" className="block text-sm font-medium text-gray-700"> Alamat Email </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required value={email} onChange={(e)=>(handleInputChange(e))} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div className="space-y-1">
                            <label for="password" className="block text-sm font-medium text-gray-700"> Password </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" value={password} required onChange={(e)=>(handleInputChange(e))} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div className="space-y-1">
                            <label for="confirmPassword" className="block text-sm font-medium text-gray-700"> Konfirmasi Password </label>
                            <div className="mt-1">
                                <input id="confirmPassword" name="confirmpassword" type="password" autocomplete="current-password" value={confirmPassword} required onChange={(e)=>(handleInputChange(e))} className={`${notMatch ? "border-red-500" : "border-green-500" } appearance-none block w-full px-3 py-2 border  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}/>
                                {notMatch && <p className="block text-xs mt-1 font-medium text-red-500">Password tidak cocok</p>}
                            </div>
                            </div>

                            <div>
                            <label for="phoneNumber" className="block text-sm font-medium text-gray-700"> Nomor Whatsapp </label>
                            <div className="mt-1">
                                <input id="whatsapp" name="phoneNumber" type="phoneNumber" autocomplete="phoneNumber" required value={whatsapp} onChange={(e)=>(handleInputChange(e))} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div>
                            <label for="school" className="block text-sm font-medium text-gray-700"> Asal Sekolah </label>
                            <div className="mt-1">
                                <input id="schoolOrigin" name="school" type="school" autocomplete="school" required value={schoolOrigin} onChange={(e)=>(handleInputChange(e))} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>
                                <div className='w-50 w-2/5'>
                                <label for="school" className="block text-sm font-medium text-gray-700"> Provinsi </label>
                                {!loading && <select id='provinsi' className="form-select block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" key="0" dataKey="0" value={provinsi} onChange={(e)=>(handleInputChange(e))}>
                                    <option key="0" value="0">Pilih Provinsi</option>
                                    {dataProvinsi.map((item) => {
                                        return <option key={item.id} dataKey={item.id} value={item.name}>{item.nama}</option>
                                    }
                                    )}
                                </select>}
                                {loading && <div className="w-full h-full flex justify-center items-center">
                                    <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-sky-900 fill-gray-600 dark:fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                </div>
                                }
                                </div>
                                <div className='w-50 w-3/5'>
                                <label for="school" className="block text-sm font-medium text-gray-700"> Kota </label>
                                {!loadingkota && <select id='kota' className="form-select block block- px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={kota} onChange={(e)=>(handleInputChange(e))}>
                                    <option key="0" value="0">Pilih Kota</option>
                                    {dataKota.map((item, index) => {
                                        return <option key={item.id} value={item.name}>{item.nama}</option>
                                    }
                                    )}
                                </select>}
                                {loadingkota && <div className="w-full h-full flex justify-center items-center">
                                    <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-sky-900 fill-gray-600 dark:fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                </div>
                                }
                                </div>
                            <div>
                            <label for="postal code" className="block text-sm font-medium text-gray-700"> Kode Pos </label>
                            <div className="mt-1">
                                <input id="kodePos" name="school" type="school" autocomplete="school" required value={kodePos} onChange={(e)=>(handleInputChange(e))} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div>
                                <label for="address" className="block text-sm font-medium text-gray-700"> Alamat </label>
                                <div className="mt-1">
                                <textarea id="alamat" rows="4" value={alamat} onChange={(e)=>(handleInputChange(e))} class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                                </div>
                            </div>
                                
                            <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="dataConfirm" name="remember-me" value={dataConfirm} onChange={(e)=>(handleInputChange(e))} type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Data yang saya isikan adalah data yang sebenar-benarnya. </label>
                            </div>
                            </div>

                            <div>
                            <button type="submit" disabled={dataConfirm && !notMatch} className= {`${dataConfirm && !notMatch ? 'text-pink-500 bg-white border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700':'text-gray-400 bg-white border-gray-500'} w-full flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-mediu`} onClick={(e)=>(handleSubmit(e))}>Register</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <h1 className='grid h-full place-items-center relative w-full bg-orange-400 font-serif text-white justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10'>Register</h1>
                </div>
                </div>
        </div>
    );
}
export default Register;
