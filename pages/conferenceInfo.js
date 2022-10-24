import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import Styles from './../styles/Conference.module.css'
import { BiSortAlt2 } from "react-icons/bi";
import Image from 'next/image';
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd"

export default function conferenceInfo() {
    const itemData = [
        {
            name: "Organizer",
            id: 1
        },
        {
            name: "Speakers",
            id: 2
        },
        {
            name: "Location",
            id: 3
        },
        {
            name: "Schedule",
            id: 4
        },
        {
            name: "Sponsors",
            id: 5
        },
    ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(itemData)

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(data);
        const [reorderData] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderData);
        setData(items);
    }


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
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId='data'>
                            {(provided) => (
                                <div className={`w-[40%]`} {...provided.droppableProps} ref={provided.innerRef}>
                                    <div className={``}>
                                        {
                                            data && data.map((item, index) => {
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                        {(provided) => (
                                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="border border-[rgba(217, 217, 217, 0.5)] py-[5px] text-[20px] text-[#0A142F] font-bold hover:bg-[#FFC93E] hover:border-transparent hover:shadow-xl rounded-md flex items-center my-10">
                                                                <div className="bg-[#FFFCF6] p-2 rounded-md m-3"><BiSortAlt2 size={42} color="#FFC93E"></BiSortAlt2></div>
                                                                <div className="">{item.name}</div>
                                                            </div>

                                                        )}
                                                    </Draggable>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            )}
                        </Droppable>
                    </DragDropContext>
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
