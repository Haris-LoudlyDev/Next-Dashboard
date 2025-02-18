    "use client"

    import Image from 'next/image'
    import React, { useState } from 'react'
    import login from '../../images/login-pic-removebg-preview.png'
    import logo from '../../images/autoplai (1).png'
    import { IoMdMail } from "react-icons/io";
    import { IoIosLock } from "react-icons/io";
    import { LuEye } from "react-icons/lu";
    import google from '../../images/search.png'
    import fb from '../../images/facebook.png'
    import { LuEyeOff } from "react-icons/lu";





    const Login = () => {

    const [password, setPassword] = useState("");
    const [ChangeIcon, SetChangeIcon] = useState();
    const [type, setType] = useState('password');

    const toggleEye = () => {
        if (type === 'password'){
            // SetChangeIcon(prev);
            SetChangeIcon(prev => !prev);
            setType('password');
        } else {
            SetChangeIcon(prev => !prev);
            setType('text')
        }
    }


    return (
        <div className="flex justify-center flex-col items-center  w-[100%] h-[100vh] bg-white">
            <div className="flex flex-row w-[50%] justify-between items-center bg-white p-2 rounded-3xl shadow-2xl">
                <div className="w-[50%] flex flex-col justify-center items-center bg-white rounded-2xl pr-10 pl-10 pt-12 pb-12">
                    <div className=" w-[100%] flex flex-row justify-left items-center mb-8">
                        <Image src={logo} className="w-[50%]"/>
                    </div>
                    <div className="w-[100%] flex flex-col justify-center items-start mb-8">
                        <h1 className="text-2xl font-semibold text-[#0E111D]">Log in to your account.</h1>
                        <p className="text-[#86909D] text-sm">Enter your email address and password to log in.</p>
                    </div>
                    <div className="flex flex-col justify-between items-center w-[100%] gap-3 mb-3">
                        <div className="flex flex-row items-center bg-[#F9FAFB] w-[100%] rounded-xl pl-2">
                            <IoMdMail className="text-[#96A0AD]"/>
                            <input type='email' placeholder='Email Address' className="w-[100%] bg-[#F9FAFB] rounded-xl pt-2 pb-2 pl-2 focus:outline-none text-[#96A0AD] text-sm"/>
                        </div>
                        <div className="flex flex-row items-center justify-between bg-[#F9FAFB] w-[100%] rounded-xl pl-2 pr-2">
                            <div className="flex flex-row items-center">
                            <IoIosLock className="text-[#96a0ad]"/>
                            <input type={type} placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" className="w-[100%] bg-[#F9FAFB] rounded-xl pt-2 pb-2 pl-2 focus:outline-none text-[#96A0AD] text-sm"/>
                            </div>
                            <div onClick={toggleEye}>
                                {ChangeIcon ? <LuEye className="text-[#96a0ad]"/> : <LuEyeOff className="text-[#96a0ad]"/>} 
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end w-[100%] mb-8">
                        <a href='#' className="text-violet-900 text-sm font-semibold">Forgot password?</a>
                    </div> 
                    <div className=" w-[100%] mb-8">
                        <button className="bg-violet-900 w-[100%] pt-2 pb-2 text-white rounded-xl cursor-pointer text-sm">Login</button>
                    </div>
                    <div className="w-[100%] flex flex-row justify-between items-center mb-8">
                        <div className="border-b-slate-200 w-[50%] border-b"></div>
                        <p className="text-[#A1ABB5] text-sm">or</p>
                        <div className="border-b-slate-200 w-[50%] border-b"></div>
                    </div> 
                    <div className="flex flex-row justify-center items-center w-[100%] mb-8 gap-8">
                        <button className="border-[#F2F4F7] border-2 w-[50%] pb-2 pt-2 rounded-xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-[1.1] text-sm flex justify-center items-center gap-2 font-semibold"><Image src={google} className="w-5 h-5"/>Google</button>
                        <button className="border-[#F2F4F7] border-2 w-[50%] pb-2 pt-2 rounded-xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-[1.1] text-sm flex justify-center items-center gap-2 font-semibold"><Image src={fb} className="w-5 h-5"/>Facebook</button>
                    </div>
                    <div>
                        <p className="text-sm">Don't you have an account <span><a href='#' className="text-violet-900 font-semibold">Sign up</a></span></p>
                    </div>


                </div>
                <div className="w-[50%]">
                        <Image src={login} className="w-[100%] h-[100%] rounded-3xl"/>
                </div>
            </div>
        </div>  
    )
    }

    export default Login