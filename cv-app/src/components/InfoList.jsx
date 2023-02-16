import React from 'react'

const InfoList = ({ id, header, text, skill }) => {

    return (
        <>
            <div className='infolist' key={id} >
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default InfoList