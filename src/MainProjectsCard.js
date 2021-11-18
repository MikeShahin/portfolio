import React from 'react'
import mainProjects from './mainProjects'

const MainProjectsCard = () => {

    return(
        <>  
        <h1>Projects:</h1>   
            {mainProjects.map(({ name, language, description, picture, video, github }) => (
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
                        <ul>Language: {language} || <a href={github}>Github</a></ul>
                        </div>
                        <p>{description}</p>
                    </div>
                    <br>
                    </br>
                </>
            ))}
        </>
    )
}

export default MainProjectsCard