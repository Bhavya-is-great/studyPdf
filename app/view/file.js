import React from 'react';

const useCard = ({ details, buttonclick }) => {


    return (
        <div className="card">
            <img src="/logo2.jpg" alt="imag" />
            <div className="card-content">
                <h3>{details.title}</h3>
                <p>
                    Institute : {details.institute} <br />
                    Type : {details.type} <br />
                    Year : {details.year} <br />
                </p>
                {/* <div className='flex justify-center items-center'> */}
                <button onClick={() => { let url = `${process.env.NEXT_PUBLIC_BASEURL}/${details.file}#toolbar=0`; buttonclick(url) }} className=' m-5 btn'>view</button>
                {/* <button onClick={handleChange}> */}
                {/* {
                            favourite ? (<Outline></Outline>) : (<Heart></Heart>)
                        } */}
                {/* </button> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default useCard
