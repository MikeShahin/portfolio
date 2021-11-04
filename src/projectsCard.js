import React from 'react'
import mainProjects from './mainProjects'
import sideProjects from './sideProjects'

const ProjectsCard = () => {

    return(
        <>  
        <h1>Main Projects:</h1>   
            {mainProjects.map(({ name, language, description, picture, video }) => (
                <>
                    <div className="main-projects">
                        <div>
                        <h2>{name}</h2>
                        <img src={picture} alt="project pic" height="200"/>
                        <h6>Language: {language}</h6>
                        </div>
                        <p>Description: {description}</p>
                    </div>
                    <br>
                    </br>
                </>
            ))}

        <h2>Side Projects: </h2>
            {sideProjects.map(({ name, language, description, picture, video }) => (
                <>
                    <div className="side-projects">
                        <h4>Name: {name}</h4>
                        <h6>Language: {language}</h6>
                        <p>Description: {description}</p>
                    </div>
                    <br>
                    </br>
                </>
            ))}
        </>
    )
}

export default ProjectsCard