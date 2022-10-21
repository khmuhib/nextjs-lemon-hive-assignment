import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import Image from 'next/image';

export default function heroSection() {
    return (
        <>
            {/* For Mobile */}
            <div className="block sm:hidden">

                <div className="after:content[''] after:absolute after:top-[80px] after:right-[30px] after:h-[430px] after:w-[340px] after:bg-[url('/assets/images/p2.png')] after:block">

                    <div className="z-[10] relative before:content[''] before:absolute before:top-[-10px] before:left-[165px] before:h-[50px] before:w-[50px] before:bg-[url('/assets/images/p1.png')] before:block">

                        <h1 className="text-[48px] font-extrabold text-[#000] text-right mr-[80px] relative">React</h1>

                        <h1 className="text-[48px] font-extrabold text-[#000] text-right mr-[80px] relative">Conference</h1>

                        <p className="mx-[20px] text-[16px] text-[#0A142F]">Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id fermentu me.In quis diam turpis quam id fermentum.</p>

                        <button className="bg-[#FFC93E] px-[30px] py-[20px] rounded-[50px] text-[18px] font-bold block m-auto mt-[20px]" >Buy Tickets <FiArrowUpRight className="inline-block" size={30}></FiArrowUpRight></button>

                    </div>
                </div>
                <div className="relative w-[327px] m-auto">
                    <div className="z-[60] before:content[''] before:absolute before:top-[10px] before:right-[100px] before:h-[50px] before:w-[50px] before:bg-[url('/assets/images/p5.png')] before:block before:bg-no-repeat before:z-10 after:content[''] after:absolute after:bottom-[-60px] after:right-[0px] after:h-[130px] after:w-[100px] after:bg-[url('/assets/images/p4.png')] after:block after:bg-no-repeat after:z-10">

                        <div className="h-[333px] w-[327px] block m-auto mt-[20px] relative">
                            <Image src="/assets/images/h3.png" alt="logo" layout="fill" />
                        </div>

                    </div>
                </div>

                <div className="mt-[20px]">
                    <div className="flex relative">
                        <div className="ml-[50px] z-[60] before:content[''] before:absolute before:top-[80px] before:right-[170px] before:h-[80px] before:w-[100px] before:bg-[url('/assets/images/p7.png')] before:block before:bg-no-repeat before:z-10">
                            <div className="h-[200px] w-[157px] block m-auto mt-[20px] relative">
                                <Image src="/assets/images/p6.png" alt="logo" layout="fill" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="h-[150px] w-[100px] block relative float-right mt-[70px] mr-[-0px]">
                                <Image src="/assets/images/p8.png" alt="logo" layout="fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
