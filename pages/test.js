import React from 'react'
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd"


export default function test() {
    const itemData = [
        {
            name: "One",
            id: 1
        },
        {
            name: "Two",
            id: 2
        },
        {
            name: "Three",
            id: 3
        },
        {
            name: "Three",
            id: 3
        },
        {
            name: "Three",
            id: 3
        },
        {
            name: "Three",
            id: 3
        },
        {
            name: "Three",
            id: 3
        },
    ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(itemData);

    return (
        <>
            <div className="container m-auto bg-lime-200 h-screen">
                <DragDropContext>
                    <Droppable droppableId='data'>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-400 py-[20px]">
                                {
                                    data && data.map((item, index) => {
                                        return (
                                            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                {(provided) => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-red-200 py-3 my-2">
                                                        {item.name}
                                                    </div>

                                                )}
                                            </Draggable>
                                        )
                                    })
                                }
                            </div>
                        )}

                    </Droppable>

                </DragDropContext>

            </div>
        </>
    )
}
resetServerContext()




