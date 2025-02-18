"use client"
import { FaBed, FaBell, FaUser } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { PiGenderIntersexFill } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { Chart } from "chart.js";
import { useEffect } from "react";




export const Dashboard = () => {


    const array = [
        "Cardiology",
        "Neurology",
        "Surgery",
        "Gyenocology",
        "Orthopediology",
        "Oncology",
        "Nephrology",
        "Pathology",
        "Pulmonology"
    ]
    

    useEffect(() => {
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart1 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [70, 30],
                    borderColor: [
                        "rgb(76, 29, 149)",                    
                        "rgb(1, 214, 155)",
                    ],
                    backgroundColor: [
                        "rgb(76, 29, 149)",
                        "rgb(1, 214, 155)",
                        
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
    }, [])

    
    useEffect(() => {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart2 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [66, 44],
                    borderColor: [
                        "rgb(76, 29, 149)",
                        "rgb(249, 115, 22)",
                        
                    ],
                    backgroundColor: [
                        "rgb(76, 29, 149)",
                        "rgb(249, 115, 22)",
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
    }, [])

    useEffect(() => {
        var ctx = document.getElementById('myChart3').getContext('2d');
        var myChart3 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Oct 2019", "Nov 2019", "Dec 2019", "Jan 2019", "Feb 2019", "Mar 2019"],
                datasets: [{
                    data: [40, 60, 25, 30, 40, 35],
                    label: "Inpatient",
                    borderColor: "rgb(1, 214, 155)",
                    backgroundColor: "rgb(1, 214, 155)",
                    borderWidth: 2
                }, {
                    data: [50, 60, 80, 50, 55, 70],
                    label: "OutPatient",
                    borderColor: "rgb(76, 29, 149)",
                    backgroundColor: "rgb(76, 29, 149)",
                    borderWidth: 2
                }, 
                ]
            },
        });
    }, [])

    useEffect(() => {
        var ctx = document.getElementById('myChart4').getContext('2d');
        var myChart4 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["07 am", "08 am", "09 am", "10 am", "11 am", "12 am"],
                datasets: [{
                    data: [50, 90,70, 105, 100, 140],
                    label: "Applied",
                    borderColor: "rgb(255, 125, 58)",
                    backgroundColor: "rgb(247, 214, 195)",
                }
                ]   
            },
        });
    }, [])
  
    useEffect(() => {
        var ctx = document.getElementById('myChart5').getContext('2d');
        var myChart5 = new Chart(ctx, {
            type: 'line',
            data: {
                // labels: ["14", "15", "16", "17", "18", "19"],
                datasets: [{
                    data: [50, 90,70, 105, 100, 140],
                    borderColor: "rgb(246, 241, 252)",
                    backgroundColor: "rgb(116, 43, 222)",
                }
                ]   
            },
        });
    }, [])

    return (
    <div className="w-[100%]">
        <div className="pl-4 bg-zinc-800">
            <div className="flex flex-row justify-between items-center p-4 bg-zinc-600">
                <div className="">
                    <input type="text" placeholder="Search" className="p-2 rounded-xl bg-zinc-400 placeholder:text-zinc-900 focus: outline-none font-mono"/>
                </div>
                <div className="flex flex-row justify-between items-center gap-3">
                    <FaBell className="w-[1rem] h-[1rem] cursor-pointer"/>
                    <FaUser className="w-[1rem] h-[1rem] cursor-pointer"/>
                    <p className="text-lg font-mono">Username</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between flex-row bg-zinc-800 items-center pb-4 pt-4 pr-4 pl-4">
            <div className="flex justify-around flex-row items-center bg-zinc-600 text-slate-900 w-[24%] h-32 rounded-xl gap-8 hover:shadow-2xl delay-75">
                <FaBed className="text-6xl text-gray-400 bg-gray-300 p-3 rounded-full" />
                <div>
                <h2 className="text-2xl font-bold font-mono">3,256</h2>
                <p className="font-semibold font-mono">Total Patients</p>
                </div>  
            </div>
            <div className="flex justify-around flex-row items-center bg-zinc-600 text-slate-900 w-[24%] h-32 rounded-xl gap-8 hover:shadow-2xl">
                <RiTeamFill className="text-6xl text-gray-400 bg-gray-300 p-3 rounded-full" />
                <div>
                <h2 className="text-2xl font-bold font-mono">3,256</h2>
                <p className="font-semibold font-mono">Total Patients</p>
                </div>
            </div>
            <div className="flex justify-around flex-row items-center bg-zinc-600 text-slate-900 w-[24%] h-32 rounded-xl gap-8 hover:shadow-2xl">
                <FaWallet className="text-6xl text-gray-400 bg-gray-300 p-3 rounded-full"/>
                <div>
                <h2 className="text-2xl font-bold font-mono">3,256</h2>
                <p className="font-semibold font-mono">Total Patients</p> 
                </div>
            </div>
            <div className="flex justify-around flex-row items-center bg-zinc-600 text-slate-900 w-[24%] h-32 rounded-xl gap-8 hover:shadow-2xl">
                <FaVanShuttle className="text-6xl text-gray-400 bg-gray-300 p-3 rounded-full"/>
                <div>
                <h2 className="text-2xl font-bold font-mono">3,256</h2>
                <p className="font-semibold font-mono">Total Patients</p>
                </div>  
            </div>
      </div>
      <div className="bg-zinc-800 flex justify-between items-start flex-row pb-4 pr-4 pl-4">
        <div className="bg-zinc-600 rounded-xl w-[75%] h-[24rem] hover:shadow-2xl ">
                <div className="border-b-2 border-gray-400 flex justify-between flex-row items-center p-4">
                    <h2 className="text-black text-xl font-bold font-mono">Outpatient vs. Inpatients Trend</h2>
                    <div>
                        <label className="text-black-700 font-mono">Show</label>
                        <select className="text-gray-700 bg-zinc-600 font-mono">
                            <option>by months</option>
                        </select>
                    </div>
                </div>            
                <div className="p-4 flex flex-row justify-around items-center gap-3">
                    <div className="right">
                        <div className="flex flex-row justify-between items-center ">
                            
                            <div className="w-full">
                                <canvas id="myChart3" className="w-[40vw] h-[18rem]"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <div className="flex flex-col justify-center items-center ">
                            <div>
                            <canvas id="myChart1" className="w-[20vw]">
                            </canvas>
                            </div>
                        </div>
                        <div className="flex justify-center flex-row items-center gap-3">
                            <div className="p-1 bg-green-400 rounded-full font-mono"></div>
                            <p>Inpatients</p>
                            <div className="p-1 bg-violet-900 rounded-full font-mono"></div>
                            <p>Outpatient</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className="bg-zinc-600 w-[24%] rounded-xl hover:shadow-2xl">
                <div className="border-b-2 border-gray-400 p-4">
                    <h2 className="text-xl font-bold font-mono">Patients by Gender</h2>
                </div>
                <div className="flex flex-col justify-center items-center p-4 h-[20rem]">
                    <div>
                        <canvas id="myChart2" className="w-[20vw]"></canvas>
                    </div>
                    <div className="flex justify-left flex-row items-center gap-3">
                        <div className="p-1 bg-orange-500 rounded-full font-mono"></div>
                        <p>Male</p>
                        <div className="p-1 bg-violet-900 rounded-full font-mono"></div>
                        <p>Female</p>
                    </div>
                </div>
         </div>
      </div>
      <div className="flex flex-row justify-between items-start bg-zinc-800 pb-4 pr-4 pl-4">
        <div className="w-[50%] bg-zinc-600 rounded-xl hover:shadow-2xl h-[30rem]">
            <div className="p-4 border-b-2 border-gray-400 flex flex-row justify-between items-center">
                <h2 className="text-xl font-bold font-mono">Time Admitted</h2>
                <select className="bg-zinc-600 font-mono">
                    <option>Today</option>
                </select>
            </div>
            <div className="p-4 h-[25%] w-[100%]">
                  <canvas id="myChart4" className="w-[15vw]"></canvas>
            </div>
        </div>
        <div className="bg-zinc-600 w-[24%] rounded-xl hover:shadow-2xl">
            <div className="p-4 border-b-2 border-gray-400">
                <h2 className="text-xl font-bold font-mono">Paient By Division</h2>
            </div>
            <div className="p-4 overflow-y-scroll whitespace-wrap h-[26rem] overflow-hidden scroll-smooth">
                <ul className="gap-2">
                    {
                        array.map((item, key) => (
                            <li className="p-3 bg-gray-400 rounded-xl mb-2 cursor-pointer hover:bg-slate-600 transition-all duration-400 ease-in-out font-mono">{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className="bg-violet-900 w-[24%] rounded-xl hover:shadow-2xl">
            <div className="p-4">
                <h2 className="text-2xl font-bold text-white font-mono">3,240</h2>
                <p className="text-white font-mono">Patients this month</p>
            </div>
            <div className="h-[24rem] flex flex-col justify-center items-center p-4">
                <canvas id="myChart5" className="w-[7rem] h-[7rem]"></canvas>
            </div>
        </div>
      </div>
    </div>
  )
}
