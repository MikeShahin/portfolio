import React from 'react'
import mainProjects from './mainProjects'

const ProjectsCard = () => {

    return(
        <>     
            {mainProjects.map(({ name, language, description, picture, video }) => (
                <div>
                    <p key={name}>Name: {name},  Language: {language} </p>
                </div>
            ))}
        </>
    )
}

export default ProjectsCard