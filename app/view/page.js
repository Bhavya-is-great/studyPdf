'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Form from './form';
import axios from 'axios';
import Allfiles from './allfiles';

const View = () => {

    const [show, setShow] = useState(true);

    const [pdfList, setPdfList] = useState([]);
    const [txt, settxt] = useState('');

    const handleBack = () => {
        setShow((prev) => !prev);
    }

    const getdata = (data) => {
        setPdfList([]);
        settxt('');
        axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/givelist.php`, data)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setPdfList(res.data);
                    console.log(res.data)
                    // console.log(res.data)
                    setShow((prev) => !prev);
                } else {
                    settxt(res.data);
                    setShow((prev) => !prev);
                }
            })
            .catch(err => console.log(err));
    }

    const givelsit = () => {
        if (txt != '') {
            return txt;
        } else {
            return pdfList;
        }
    }

    return (
        <>
            <Navbar></Navbar>

            {
                show ? (<Form getdata={getdata}></Form>) : (<Allfiles change={handleBack} list={givelsit()}></Allfiles>)
            }

            {/* <Form getdata={getdata}></Form> */}
        </>
    )
}

export default View
