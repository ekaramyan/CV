import React from 'react'
import ProjectItem from '../components/ProjectItem';

export default function Projects({ repos = [] }) {

    console.log(repos)

    return (
        <>
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
        </>
    )
}
