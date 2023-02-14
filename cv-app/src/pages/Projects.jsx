import React from 'react'
import ProjectItem from '../components/ProjectItem';

export default function Projects({ repos = [], imgs = [] }) {

    // console.log(repos)
    

    return (
        <div className='projects-wrapper'>
            <h1>Projects</h1>
            <div className="white-bg">
                {
                    repos
                        .map((repo, id, url) => (
                            <ProjectItem
                                key={id}
                                url={url}
                                repo={repo}
                            />
                        ))
                }

                {/* {
                    imgs.map((img, id) => (
                        <ProjectItem
                            key={id}
                            img={img}
                        />
                    ))
                } */}
            </div>
        </div>
    )
}
