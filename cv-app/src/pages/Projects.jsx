import React from 'react'
import p1 from '../img/p1.png'

export default function Projects(props) {
    const project_link = 'https://ekaramyan.github.io/Project-tofix/'; //заглушка
    return (
        <>
            <div className="white-bg">
                <h2>{props.title}</h2>
                <div className="card">
                    <a href={project_link} target='_blank'>
                        <img src={p1} width={400}></img>
                        <p>{props.card_title}</p>
                    </a>
                </div>

            </div>
        </>
    )
}
