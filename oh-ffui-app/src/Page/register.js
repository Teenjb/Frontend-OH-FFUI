import '../index.css';

import React, { useState } from "react";
import logo from "./logo.png";

function Register(){
    const [show, setShow] = useState(false);
    return(
        <div className="bg-white pb-12 overflow-y-hidden relative" style={{ minHeight: 700 }}>
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
                                <input id="name" name="name" type="name" autocomplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div>
                            <label for="email" className="block text-sm font-medium text-gray-700"> Alamat Email </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div className="space-y-1">
                            <label for="password" className="block text-sm font-medium text-gray-700"> Password </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div className="space-y-1">
                            <label for="password" className="block text-sm font-medium text-gray-700"> Konfirmasi Password </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div>
                            <label for="phoneNumber" className="block text-sm font-medium text-gray-700"> Nomor Whatsapp </label>
                            <div className="mt-1">
                                <input id="phoneNumber" name="phoneNumber" type="phoneNumber" autocomplete="phoneNumber" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div>
                            <label for="school" className="block text-sm font-medium text-gray-700"> Asal Sekolah </label>
                            <div className="mt-1">
                                <input id="school" name="school" type="school" autocomplete="school" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div class="">
                                <div class="flex justify- mb-3">
                                    <div>
                                    <label for="school" className="block text-sm font-medium text-gray-700"> Provinsi </label>
                                    <select class="form-select aappearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option selected>Pilih Provinsi</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    </div>
                                    <div className=''>
                                    <label for="school" className="block text-sm font-medium text-gray-700"> Kota </label>
                                    <select class="form-select aappearance-none block w-full px-3 py-2 border left-10 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option selected>Pilih Kota</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label for="school" className="block text-sm font-medium text-gray-700"> Alamat </label>
                                <div className="mt-1">
                                    <input id="school" name="school" type="school" autocomplete="school" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                </div>
                            </div>
                                
                            <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Data yang saya isikan adalah data yang sebenar-benarnya. </label>
                            </div>
                            </div>

                            <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700">Register</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <img className="absolute inset-0 h-full w-full object-cover bg-blend-overlay" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt=""/>
                    <h1 className='grid h-full place-items-center relative w-full bg-yellow-300 bg-opacity-50 font-serif text-white justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10 text-center'>Register</h1>
                </div>
                </div>
        </div>
    );
}
export default Register;