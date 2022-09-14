import React from 'react'
import { Button } from './Button'

export const Projects = ({useProjects, buttonState}) => {

  return (
    <div className='container-projects'>
      
      {useProjects.map((project) => (
        <div className='project' key={project.id}>
          <div>
            <img className='projectPicture' src={project.picture}/>
          </div>
          <div>
              <div className='container-tags'>
                {project.tags.map(tag => (
                  <h3 className='tags' key={tag.id}>{tag.tag}</h3>
                  
                ))}
              </div>
              <h2 className='projectTitle'>{project.title}</h2>
              <p className='projectDescription'>{project.description}</p>
              <Button buttonState={buttonState}/>
          </div>
               
        </div>        
        
      ))}
    </div>
  )
}

