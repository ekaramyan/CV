import React from 'react'
import p1 from '../img/p1.png'

export default function Projects(repos) {

    const project_link = {repos}; //заглушка
    return (
        <>
            <div className="white-bg">

               { repos.map()
               //<h2>{repos.title}</h2>
                // <div className="card">
                //     <a href={project_link} target='_blank'>
                //         <img src={repos} width={400}></img>
                //         <p>{repos.card_title}</p>
                //     </a>
                // </div>
               
                }

            </div>
        </>
    )
}
