import React from 'react'
import ProjectItem from '../components/ProjectItem';

export default function Projects({ repos = [], pageTitle }) {
    return (
        <div className='projects-wrapper' id='projects'>
            <h1>{pageTitle}</h1>
            <div className="white-bg">
                {
                    repos
                        .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
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
