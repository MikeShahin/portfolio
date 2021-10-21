import React from 'react'
import projects from './projects'

const ProjectsCard = () => {

    return(
        <>     
            {projects.map(({ name, language, description, picture, video }) => (
                <div>
                    <p key={name}>Name: {name},  Language: {language} </p>
                </div>
            ))}
        </>
    )
}

export default ProjectsCard