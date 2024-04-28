import React, { useState } from 'react';
import Card from './Card';
import Pdfviewer from './pdfviewer';


const Allfiles = ({ list, change }) => {

    const GetUrl = (url) => {
        window.location.href = url;
    }

    return (
        <div>

            <div>
                <button className='home-start-button mt-24 mx-28' onClick={change} >{'<-'} Back</button>
            </div>

            {/* <div className="flex justify-center">
                <button onClick={() => setPol(true)} className="home-start-button m-5">
                    Pdf Lists
                </button>
                <button onClick={() => setPol(false)} className="home-start-button m-5">
                    Pdf
                </button>
            </div> */}

            {/* {pol ? (<div className="card-container">
                {
                    Array.isArray(list) ? list.map((item, i) => {
                        return (
                            <div key={i}>
                                <Card buttonclick={GetUrl} details={item}></Card>
                            </div>
                        )
                    }) : (<p> {list} </p>)
                }
            </div>) : (<Pdfviewer url={fileurl}></Pdfviewer>)} */}
            <div className="card-container">
                {
                    Array.isArray(list) ? list.map((item, i) => {
                        return (
                            <div key={i}>
                                <Card buttonclick={GetUrl} details={item}></Card>
                            </div>
                        )
                    }) : (<p> {list} </p>)
                }
            </div>
        </div>
    )
}

export default Allfiles
