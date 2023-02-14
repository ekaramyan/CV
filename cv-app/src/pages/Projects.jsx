import React from 'react'
import ProjectItem from '../components/ProjectItem';

export default function Projects({ repos = []}) {

    return (
        <div className='projects-wrapper' id='projects'>
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
            </div>
        </div>
    )
}
