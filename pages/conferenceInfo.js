import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Styles from './../styles/Conference.module.css'
import { BiSortAlt2 } from "react-icons/bi";
import Image from 'next/image';
import { useState } from 'react'

export default function conferenceInfo() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(true)


    return (
        <>
            <Head>
                <title>Conference info</title>
            </Head>
            
            <div className="container mx-auto py-10 overflow-auto">
                <div className="py-10 mx-5">
                    <h2 className='text-[48px] font-bold'>Conference info</h2>
                    <p className='text-[20px] text-gray-500'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
                </div>
                <div className="flex gap-x-10">
                    <div className={`w-[40%]`}>
                        <div className={``}>
                            <div onClick={() => setShow(!show)} className="border border-[rgba(217, 217, 217, 0.5)] py-[5px] text-[20px] text-[#0A142F] font-bold hover:bg-[#FFC93E] hover:border-transparent hover:shadow-xl rounded-md flex items-center my-10">
                                <div className="bg-[#FFFCF6] p-2 rounded-md m-3"><BiSortAlt2 size={42} color="#FFC93E"></BiSortAlt2></div>
                                <div className="">Organizer</div>
                            </div>
                            <div className={`border border-[rgba(217, 217, 217, 0.5)] py-[5px] text-[20px] text-[#0A142F] font-bold hover:bg-[#FFC93E] hover:border-transparent hover:shadow-xl rounded-md flex items-center my-10`}>
                                <div className="bg-[#FFFCF6] p-2 rounded-md m-3"><BiSortAlt2 size={42} color="#FFC93E"></BiSortAlt2></div>
                                <div className="">Speakers</div>
                            </div>
                            <div className={`border border-[rgba(217, 217, 217, 0.5)] py-[5px] text-[20px] text-[#0A142F] font-bold hover:bg-[#FFC93E] hover:border-transparent hover:shadow-xl rounded-md flex items-center my-10`}>
                                <div className="bg-[#FFFCF6] p-2 rounded-md m-3"><BiSortAlt2 size={42} color="#FFC93E"></BiSortAlt2></div>
                                <div className="">Location</div>
                            </div>
                            <div className={`border border-[rgba(217, 217, 217, 0.5)] py-[5px] text-[20px] text-[#0A142F] font-bold hover:bg-[#FFC93E] hover:border-transparent hover:shadow-xl rounded-md flex items-center my-10`}>
                                <div className="bg-[#FFFCF6] p-2 rounded-md m-3"><BiSortAlt2 size={42} color="#FFC93E"></BiSortAlt2></div>
                                <div className="">Schedule</div>
                            </div>
                            <div className={`border border-[rgba(217, 217, 217, 0.5)] py-[5px] text-[20px] text-[#0A142F] font-bold hover:bg-[#FFC93E] hover:border-transparent hover:shadow-xl rounded-md flex items-center my-10`}>
                                <div className="bg-[#FFFCF6] p-2 rounded-md m-3"><BiSortAlt2 size={42} color="#FFC93E"></BiSortAlt2></div>
                                <div className="">Sponsors</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-[#FBFBFB] p-5 mt-10 rounded-md">
                            <div className="bg-white py-[30px] px-[30px] my-5">
                                <div className="flex items-center gap-x-10">
                                    <div className="">
                                        <div className="h-[140px] w-[140px] relative">
                                            <Image src="/assets/images/img1.png" alt="logo" layout="fill" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between mb-[10px]">
                                            <div className="">
                                                <h2 className='text-[20px] text-[#0A142F] font-bold'>John Blain Doe</h2>
                                            </div>
                                            <div className="text-[16px] text-gray-400">Company Name</div>
                                        </div>
                                        <div className="">
                                            <p className='text-[16px] text-[#0A142F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white py-[30px] px-[30px] my-5">
                                <div className="flex items-center gap-x-10">
                                    <div className="">
                                        <div className="h-[140px] w-[140px] relative">
                                            <Image src="/assets/images/img03.png" alt="logo" layout="fill" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between mb-[10px]">
                                            <div className="">
                                                <h2 className='text-[20px] text-[#0A142F] font-bold'>John Blain Doe</h2>
                                            </div>
                                            <div className="text-[16px] text-gray-400">Company Name</div>
                                        </div>
                                        <div className="">
                                            <p className='text-[16px] text-[#0A142F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white py-[30px] px-[30px] my-5">
                                <div className="flex items-center gap-x-10">
                                    <div className="">
                                        <div className="h-[140px] w-[140px] relative">
                                            <Image src="/assets/images/img02.png" alt="logo" layout="fill" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between mb-[10px]">
                                            <div className="">
                                                <h2 className='text-[20px] text-[#0A142F] font-bold'>John Blain Doe</h2>
                                            </div>
                                            <div className="text-[16px] text-gray-400">Company Name</div>
                                        </div>
                                        <div className="">
                                            <p className='text-[16px] text-[#0A142F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
