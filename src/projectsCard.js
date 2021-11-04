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

                        {video !== "" &&
                            <iframe width="420" height="315"
                            src={video}>
                            </iframe> 
                        }
                        {picture !== "" && 
                        <img src={picture} alt="project pic" height="200"/>
                        }
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
                        <div>
                            <h4>{name}</h4>
                            <h6>Language: {language}</h6>
                        </div>
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