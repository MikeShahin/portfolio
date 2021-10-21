import React from 'react'
import mainProjects from './mainProjects'
import sideProjects from './sideProjects'

const ProjectsCard = () => {

    return(
        <>  
        <h2>Main Projects:</h2>   
            {mainProjects.map(({ name, language, description, picture, video }) => (
                <div className="main-projects">
                    <p key={name}>Name: {name},  Language: {language} </p>
                </div>
            ))}

        <h2>Side Projects: </h2>
            {sideProjects.map(({ name, language, description, picture, video }) => (
                <div className="side-projects">
                    <p key={name}>Name: {name},  Language: {language} </p>
                </div>
            ))}
        </>
    )
}

export default ProjectsCard