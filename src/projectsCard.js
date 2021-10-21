import React from 'react'
import mainProjects from './mainProjects'
import sideProjects from './sideProjects'

const ProjectsCard = () => {

    return(
        <>  
        <h2>Main Projects:</h2>   
            {mainProjects.map(({ name, language, description, picture, video }) => (
                <div className="main-projects">
                    <h4>Name: {name}</h4>
                    <h6>Language: {language}</h6>
                    <p>Description: {description}</p>
                    <img src={picture} alt="project pic" height="200"/>
                </div>
            ))}

        <h2>Side Projects: </h2>
            {sideProjects.map(({ name, language, description, picture, video }) => (
                <div className="side-projects">
                    <h4>Name: {name}</h4>
                    <h6>Language: {language}</h6>
                    <p>Description: {description}</p>
                </div>
            ))}
        </>
    )
}

export default ProjectsCard