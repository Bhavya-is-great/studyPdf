'use client';
import React, { useState } from "react";
// import { Dropdown } from 'primereact/dropdown';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';

export default function Drop({ list, update, Name }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mx-10 relative flex flex-col items-center max-sm:w-[140px] max-sm:h-[140px] max-md:w-[240px] max-md:h-[240px] w-[340px] h-[340px] rounded">
            <button onClick={() => setIsOpen((prev) => !prev)} className='bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white '>
                {Name}
                {
                    !isOpen ? (
                        <AiOutlineCaretDown />
                    ) : (
                        <AiOutlineCaretUp />
                    )
                }
            </button>

            {
                isOpen && (
                    <div className="bg-blue-400 absolute top-20 z-50 flex
                     flex-col items-start rounded-lg max-h-48 overflow-y-auto p-2 w-full ">
                        {list.map((item, i) => {
                            return (
                                <div onClick={() => { update(item); setIsOpen((prev) => !prev) }} className='flex w-full jsutify-between p-4 hover:bg-blue-300 cursor-pointer rounded-lg border-l-transparent hover:border-l-white border-l-4 ' key={i}>
                                    <h3 className='font-bold'> {item} </h3>
                                </div>
                            )
                        })}
                    </div>
                )
            }

        </div>
    )
}
