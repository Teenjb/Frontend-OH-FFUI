import '../index.css'
import logo from "../Img/logo.png";
import React, { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const axios = require('axios');
const endpoint = "https://api-oh-ffui-2022.herokuapp.com/";
const hostendpoint = "http://localhost:1337/";

function Login (){

    //variable used in this page
    const [identifier, setIdentifier] = useState(null);
    const [password, setPassword] = useState(null);
    const [token, setToken] = useState(null);
    const [name, setName] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const obj = {name: name, token: token};
        console.log(obj);
        localStorage.setItem('token', JSON.stringify(obj));
      }, [token]);

    //function to handle any change on input
    const handleInputChange = (event) =>{
        const {id,value} = event.target;
        if(id === 'identifier'){
            setIdentifier(value);
        }
        if(id === 'password'){
            setPassword(value);
        }
    }

    //function to handle submit login request
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setLoading(true);
        const headers = {
            "content-type": "application/json"
        };
        const graphqlQuery = {
            query: `mutation($identifier: String!,$password: String!){
                login(
                    input:{
                        identifier: $identifier,
                        password: $password
                    }
                ){
                    jwt,user{
                        username
                    }
                }
            }`,
            variables: {
                identifier: identifier,
                password: password
            }
        };
        const response = await axios.post(endpoint+"graphql", graphqlQuery, {headers: headers})
        setLoading(false);
        if(response.data.errors){
            Toastify({
                text: "Login Gagal",
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
                text: "Login Success",
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
              setName(response.data.data.login.user.username)
              window.location.href = '/';
        }
    }

    return (
        <div className='grid w-full h-screen'>
            {loading && <div className="flex absolute z-50 h-screen w-full items-center justify-center bg-black bg-opacity-50">
                <div role="status">
                    <svg aria-hidden="true" className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-white fill-pink-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
              </div>}
        <div className="bg-white overflow-y-hidden relative" style={{ minHeight: 700 }}>
        <div className="min-h-full flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className=''>
                    <img className="h-12 w-auto" src={logo} alt="Workflow"/>
                    <h2 className="mt-6 text-3xl font-extrabold text-middle text-gray-900">Welcome Back!</h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                        <label for="email" className="block text-sm font-medium text-gray-700"> Alamat Email atau Username </label>
                        <div className="mt-1">
                            <input id="identifier" name="email" type="email" autocomplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={identifier} onChange={(e)=>(handleInputChange(e))}/>
                        </div>
                        </div>

                        <div className="space-y-1">
                        <label for="password" className="block text-sm font-medium text-gray-700"> Password </label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={password} onChange={(e)=>(handleInputChange(e))}/>
                        </div>
                        </div>
                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember Me </label>
                        </div>
                        </div>

                        <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white  border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700" onClick={(e)=>(handleSubmit(e))}>Login</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
                <h1 className='grid h-full place-items-center relative w-full bg-[#87b07b] font-serif text-white justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10'>Login</h1>
            </div>
            </div>
    </div>
    </div>
    );
}
export default Login;