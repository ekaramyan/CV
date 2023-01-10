import React from 'react'


export default function Projects(props) {
    return (
        <>
            <div className="white-bg">
                <h2>{props.title}</h2>
                <div className="card">
                    <img src="" alt="" />
                    <p>{props.card_title}</p>
                </div>
            </div>
        </>
    )
}
