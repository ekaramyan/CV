import React from 'react'

const InfoList = ({ header, text }) => {
    return (
        <div className='infolist'>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    )
}

export default InfoList