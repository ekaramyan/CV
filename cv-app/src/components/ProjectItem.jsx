import React from 'react'

const ProjectItem = ({ repo }) => {

    // const project_link = { url }; //заглушка
    console.log(repo)

    if (!repo) {
        return null
    }

    return (

        <div className="repoItem">
            <h2>{repo.name}</h2>
            <div className="card">
                <a href={repo.svn_url} target='_blank'>
                    {/* <img src={repos} width={400}></img> */}
                    <p>{repo.name}</p>
                </a>
            </div>
        </div>

    )
}
export default ProjectItem