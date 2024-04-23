import React from 'react'

const Button = ({ text, setRef }) => {
    return (
        <>
            <br />
            <button ref={setRef} className='border-x-black transition-all'>
                {text}▲
            </button>
        </>
    )
}

export default Button
