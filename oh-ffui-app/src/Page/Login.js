import '../index.css'
import logo from "../Img/logo.png";
import React, { useState } from "react";

const axios = require('axios');
const endpoint = 'http://localhost:1337/graphql';

function Login (){

    //variable used in this page
    const [identifier, setIdentifier] = useState(null);
    const [password, setPassword] = useState(null);

    //funvtion to handle any change on input
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
    const handleSubmit = async () =>{
        console.log(identifier,password);
        const headers = {
            "content-type": "application/json"
        };
        const graphqlQuery = {
            //"operationName": "fetchAuthor",
            query: `mutation($identifier: String!,$password: String!){
                login(
                    input:{
                        identifier: $identifier,
                        password: $password
                    }
                ){
                    jwt
                }
            }`,
            variables: {
                identifier: identifier,
                password: password
            }
        };
        const response = await axios.post(endpoint, graphqlQuery, {headers: headers})
        console.log(response.data);
    }

    return (
        <div className='grid w-full h-screen'>
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
                        <label for="email" className="block text-sm font-medium text-gray-700"> Alamat Email </label>
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
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border rounded-full shadow-sm text-sm font-medium text-pink-500 bg-white  border-pink-500 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700" onClick={()=>(handleSubmit())}>Login</button>
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