import React from 'react'


export default function Projects(props) {
    return (
        <>
            <div className="white-bg">
                <h2>{props.title}</h2>
                <div className="card">
                    <iframe src="https://ekaramyan.github.io/Project-tofix/" frameborder="0" width={900} height={600}></iframe>
                    <p>{props.card_title}</p>
                </div>
            </div>
        </>
    )
}
