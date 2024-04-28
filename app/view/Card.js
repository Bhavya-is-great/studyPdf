import React from 'react';

const Card = ({ details, buttonclick }) => {

    const handleclick = () => {
        let url = `http://study-pdf.infinityfreeapp.com/${details.file}#toolbar=0`;
        buttonclick(url);
    }

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
                <button onClick={handleclick} className=' m-5 btn'>view</button>
            </div>
        </div>
    )
}

export default Card
