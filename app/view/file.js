import axios from 'axios';
import React, { useState } from 'react';

const card = ({ details, buttonclick }) => {

    const [favourite, setFavorite] = useState(true);

    const Heart = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="40px"
                height="40px"
                viewBox="0 -5.37 77.646 77.646"
            >
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="1.044"
                        y1="0.005"
                        x2="0.413"
                        y2="0.749"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset={0} stopColor="#ff7471" />
                        <stop offset={1} stopColor="#ff5245" />
                    </linearGradient>
                </defs>
                <g
                    id="heart_red"
                    data-name="heart red"
                    transform="translate(-263.982 -435.283)"
                >
                    <g id="Group_25" data-name="Group 25">
                        <path
                            id="Path_69"
                            data-name="Path 69"
                            d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z"
                            fill="none"
                        />
                        <path
                            id="Path_70"
                            data-name="Path 70"
                            d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z"
                            fill="#ff5245"
                        />
                    </g>
                    <path
                        id="Path_71"
                        data-name="Path 71"
                        d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z"
                        fill="url(#linear-gradient)"
                    />
                </g>
            </svg>
        )
    }

    const Outline = () => {
        return (
            <img src="/heart.png" style={{ width: 40, height: 40 }} alt="imagee" />
        )
    }

    // const handleChange = () => {
    //     setFavorite((prev) => !prev)

    //     if (favourite == false) {

    //         const data = new FormData();

    //         data.append('data', details);

    //         console.log(data)

    //         const userdata = JSON.parse(localStorage.getItem('userdata'));

    //         console.log(userdata)

    //         axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/givefav.php`, data)
    //             .then(res => console.log(res.data))
    //             .catch(err => console.log(err))
    //     }
    // }


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

export default card
