import React from 'react'
import sideProjects from './sideProjects'

const MainProjectsCard = () => {

    return(
        <>  
            {sideProjects.map(({ name, language, description, picture, github }) => (
                <>
                <div className="side-projects">
                    <div>
                    <h2>{name}</h2>
                    <img src={picture} alt="project pic" height="200"/>
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