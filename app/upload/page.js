'use client';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import Form from './form';

const Upload = () => {

    useEffect(() => {
        if (localStorage.getItem('userdata')) {
            if (JSON.parse(localStorage.getItem('userdata'))[0].email == 'bdopcreator123@gmail.com') {
                // return console.log(JSON.parse(localStorage.getItem('userdata')))
                return
            }
            else {
                window.location.href = '/view'
            }

        } else {
            window.location.href = '/view'
        }
    })

    // console.log(JSON.parse(localStorage.getItem('userdata')))

    return (
        <>
            <Navbar />
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" async />
            <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" async />
            {/* <div className='mt-24'> */}
            <Form />
            {/* </div> */}
        </>
    )
}

export default Upload
