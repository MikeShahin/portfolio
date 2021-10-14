import React from 'react'
import projects from './projects'

const ProjectsCard = props => {

    return(
        <div className="project-card">
                <>
        {projects.map(({ name, language, description, picture, video }) => (
        <p key={name}>Name: {name},  Language: {language} </p>
      ))}
    </>

        </div>
    )
}

export default ProjectsCard