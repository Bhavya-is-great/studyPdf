'use client';
import React, { useState } from 'react';
import Drop from '@/components/Drop';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { list } from 'postcss';

const Stuff = () => {

    const [list, setList] = useState([]);
    const [std, setStd] = useState('Standard');
    const stdlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const HandleSubmit = () => {

        const data = new FormData();

        if (std == 'Standard') {
            return alert('Plz fill details');
        }

        data.append('std', std);

        axios.post(`http://study-pdf.infinityfreeapp.com/stuff.php`, data)
            .then((res) => { setList(res.data) })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-24 relative'>
                <h1>Standard:</h1>
                <Drop list={stdlist} update={setStd} Name={std} ></Drop>
                <button onClick={HandleSubmit} className=" absolute top-[7rem] home-start-button">Get stuff</button>
            </div>
            <div className="stuff">
                {
                    Array.isArray(list) ? (
                        <div>
                            {
                                list.map((item, i) => {
                                    return (
                                        <div key={i} className=' stuf mt-5 mb-5 rounded-lg text-2xl  border-slate-900'>
                                            Title : {item.title} <br />
                                            Type : {item.type} <br />
                                            Year : {item.year} <br />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (<div> {list} </div>)
                }
            </div>
        </div>
    )
}

export default Stuff
