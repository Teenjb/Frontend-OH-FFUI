import '../index.css';
import logo from "../Img/logo.png";
import React, { useEffect, useState } from "react";

function Submission() {
    return (
        <div className="bg-white overflow-y-hidden relative" style={{ minHeight: 700 }}>
            <div className="min-h-full flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className=''>
                        <img className="h-12 w-auto" src={logo} alt="Workflow"/>
                        <h2 className="mt-6 text-3xl font-extrabold text-middle text-gray-900">Submission for Lomba</h2>
                    </div>

                    <div className="mt-8">
                        <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                            <label for="name" className="block text-sm font-medium text-gray-700"> Nama Proyek </label>
                            <div className="mt-1">
                                <input id="name" name="name" type="name" autocomplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>
                            
                            <div>
                            <label for="name" className="block text-sm font-medium text-gray-700"> Nama Tim </label>
                            <div className="mt-1">
                                <input id="username" name="name" type="name" autocomplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            </div>

                            <div>
                            <label for="confirmPassword" className="block text-sm font-medium text-gray-700"> Upload File </label>
                            <div class="flex justify-center items-center w-full">
                                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100">
                                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">DOCS, PDF, PNG (MAX. 10MB)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div> 
                            </div>
                                
                            <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="dataConfirm" name="remember-me" type="checkbox" className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label for="remember-me" className="ml-5 block text-sm text-gray-900"> Data yang saya isikan adalah data yang sebenar-benarnya. Jika ditemukan kecurangan saya siap menerima konsekuensinya</label>
                            </div>
                            </div>

                            <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700">Upload</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <h1 className='grid h-full place-items-center relative w-full bg-[#f5145b] font-serif text-white justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10'>Submission</h1>
                </div>
                </div>
        </div>
    );
}

export default Submission;
