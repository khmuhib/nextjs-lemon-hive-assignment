import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  z-[50]`}>

            <div className="flex flex-col justify-center items-center mt-28">
                <a className="text-2xl font-bold text-red-500 my-4" href="#" >
                    About us
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                    What We do
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                    Our work
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                    Blog
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                    Say hi
                </a>
            </div>
        </div>
    )
}

export default function header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)
    return (
        <nav className='w-full z-10'>
            <div className="w-full">
                <div className="flex items-center h-20 w-full">
                    <div className="flex items items-center mx-[20px] justify-between w-full md:mx-20">
                        <div className="flex justify-center items-center flex-shrink-0">
                            <div className="h-[33px] w-[120px] relative">
                                <Image src="/assets/images/React.png" alt="logo" layout="fill" />
                            </div>
                        </div>
                        <div className="justify-center items-center flex-shrink-0 hidden sm:block">

                            <a className="text-[18px] font-[600] text-[#0A142F] px-[25px]" href="#" >
                                About us
                            </a>
                            <a className="text-[18px] font-[600] text-[#0A142F] px-[25px]" href="#" >
                                What We do
                            </a>
                            <a className="text-[18px] font-[600] text-[#0A142F] px-[25px]" href="#" >
                                Our work
                            </a>
                            <a className="text-[18px] font-[600] text-[#0A142F] px-[25px]" href="#" >
                                Blog
                            </a>
                            <a className="text-[18px] font-[600] text-[#0A142F] px-[25px]" href="#" >
                                Say hi
                            </a>
                        </div>
                        <div className="flex justify-center items-center flex-shrink-0">
                            <div className="group z-[55] relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                                setOpen(!open)
                            }}>
                                {/* hamburger button */}
                                <span className={`h-[3px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                                <span className={`h-[3px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                                <span className={`h-[3px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileNav open={open} setOpen={setOpen} />

        </nav>
    )
}
