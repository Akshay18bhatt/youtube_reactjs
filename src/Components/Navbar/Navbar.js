import React from "react";
import "./navbar.css"
import logo from "../../assets/Logo.svg"

const Navbar = () => {

    return (
        <div className="navbar" >

            {/* Mobile View Navbar */}
            <div className="flex sm:hidden justify-between items-center" >
                <div>
                    <img src={logo} />
                </div>
                <div className="px-5" >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                </div>
            </div>


            {/* Large screen view */}
            <div className=" hidden sm:flex  justify-between items-center" >
                <div className="flex items-center ml-4 " >
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    <img src={logo} />
                </div>
                <div className="w-[45vw] h-10" >
                    <div className="flex h-full border border-slate-400 rounded-3xl " >
                        <input placeholder="Search" className="w-full pl-4 rounded-tl-3xl rounded-bl-3xl " />
                        <button className="flex border-l border-slate-400 justify-center items-center bg-white w-[4rem] bg-slate-200 rounded-tr-3xl rounded-br-3xl  " ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                        </button>
                    </div>

                </div>
                <div className=" flex mr-5 w-10 h-10 rounded-full   " >
                    <div className="w-full h-ful bg-orange-500 rounded-full " >

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar