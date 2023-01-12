import React from 'react'
import p1 from '../img/p1.png'


export default function Projects(props) {
    return (
        <>
            <div className="white-bg">
                <h2>{props.title}</h2>
                <div className="card">
                    <img src={p1} width={400}></img>
                    <p>{props.card_title}</p>
                </div>
            </div>
        </>
    )
}
