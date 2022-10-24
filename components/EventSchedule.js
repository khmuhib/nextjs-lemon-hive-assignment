import Link from 'next/link'
import React from 'react'
import Styles from '../styles/EventSchedule.module.css'

export default function EventSchedule() {
    return (
        <>
            <div className="container mx-auto py-5 overflow-auto">
                <div className="py-10 mx-5">
                    <h2 className='text-[48px] font-bold'>Event Schedule</h2>
                    <p className='text-[20px] text-gray-500'>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>
                </div>
                <div className={`${Styles.table_main} mx-5`}>
                    <table className="">
                        <tr>
                            <th></th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                        <tr>
                            <td>9.00</td>
                            <td>
                                <p className='my-4 text-[16px] font-bold'>02-08-2022</p>
                                <Link href="/conferenceInfo">
                                    <div className="bg-[#FFFCF6] border border-[#FCB12A] text-left w-[150px] m-auto p-2 my-3 rounded-md hover:cursor-pointer">
                                        <p className='text-[#725114] text-[16px] font-bold'>Intro to the Conference</p>
                                        <small className='text-[#8B6F3B]'>09:00-11:50 </small>
                                    </div>
                                </Link>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <p className='my-4 text-[16px] font-bold'>02-08-2022</p>
                                <Link href="/conferenceInfo">
                                    <div className="bg-[#FFFCF6] border border-[#FCB12A] text-left w-[150px] m-auto p-2 my-3 rounded-md hover:cursor-pointer">
                                        <p className='text-[#725114] text-[16px] font-bold'>Intro to the Conference</p>
                                        <small className='text-[#8B6F3B]'>09:00-11:50 </small>
                                    </div>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>10.00</td>
                            <td></td>
                            <td></td>
                            <td>
                                <p className='my-4 text-[16px] font-bold'>02-08-2022</p>
                                <Link href="/conferenceInfo">
                                    <div className="bg-[#FFFCF6] border border-[#FCB12A] text-left w-[150px] m-auto p-2 my-3 rounded-md hover:cursor-pointer">
                                        <p className='text-[#725114] text-[16px] font-bold'>Intro to the Conference</p>
                                        <small className='text-[#8B6F3B]'>09:00-11:50 </small>
                                    </div>
                                </Link>
                            </td>
                            <td>
                                <p className='my-4 text-[16px] font-bold'>02-08-2022</p>
                                <Link href="/conferenceInfo">
                                    <div className="bg-[#FFFCF6] border border-[#FCB12A] text-left w-[150px] m-auto p-2 my-3 rounded-md hover:cursor-pointer">
                                        <p className='text-[#725114] text-[16px] font-bold'>Intro to the Conference</p>
                                        <small className='text-[#8B6F3B]'>09:00-11:50 </small>
                                    </div>
                                </Link>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>11.00</td>
                            <td></td>
                            <td>
                                <p className='my-4 text-[16px] font-bold'>02-08-2022</p>
                                <Link href="/conferenceInfo">
                                    <div className="bg-[#FFFCF6] border border-[#FCB12A] text-left w-[150px] m-auto p-2 my-3 rounded-md hover:cursor-pointer">
                                        <p className='text-[#725114] text-[16px] font-bold'>Intro to the Conference</p>
                                        <small className='text-[#8B6F3B]'>09:00-11:50 </small>
                                    </div>
                                </Link>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                <p className='my-4 text-[16px] font-bold'>02-08-2022</p>
                                <Link href="/conferenceInfo">
                                    <div className="bg-[#FFFCF6] border border-[#FCB12A] text-left w-[150px] m-auto p-2 my-3 rounded-md hover:cursor-pointer">
                                        <p className='text-[#725114] text-[16px] font-bold'>Intro to the Conference</p>
                                        <small className='text-[#8B6F3B]'>09:00-11:50 </small>
                                    </div>

                                </Link>
                            </td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
