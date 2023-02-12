import React from 'react'

const ProjectItem = ({ repo }) => {

    // const project_link = { url }; //заглушка


    if (!repo) {
        return null
    }
    // console.log(repo.language)
    return (

        <div className="repoItem">

            <h2>{repo.language}</h2>
            <div className="card">
                <a href={repo.svn_url} target='_blank'>
                    <img src={repo.owner.avatar_url} width={400}></img>
                    <p>{repo.name}</p>
                </a>
            </div>
        </div>

    )
}
export default ProjectItem