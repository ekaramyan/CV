import React from 'react'

const ProjectItem = ({ repo }) => {

    // const project_link = { url }; //заглушка


    if (!repo) {
        return null
    }

    const url = 'https://api.screenshotone.com/take?';
    let img = ``


    const screenshotKey = import.meta.env.VITE_SCREENSHOT_KEY;
    console.log(screenshotKey)


    if (repo.has_pages) {
        img = `${url}url=https://${repo.owner.login}.github.io/${repo.name}&access_key=${screenshotKey}`
        console.log(img)

    }
    else {
        img = repo.owner.avatar_url
    }

    return (

        <div className="repoItem">

            <h2>{repo.language}</h2>
            <div className="card">
                <a href={repo.svn_url} target='_blank'>
                    <img src={img} width={450} height={300}></img>
                    <p>{repo.name}</p>
                </a>
            </div>
        </div>

    )
}
export default ProjectItem