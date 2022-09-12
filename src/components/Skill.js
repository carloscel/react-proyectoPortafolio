import React from 'react';

export const Skill = ({skillsStateInfo}) => {

  return (
    <div className='containerSkills'>

      {
        skillsStateInfo.map((skillState) => (
          <div className='container-category' key={skillState.id}>
            <h1 className='skilltitle'>{skillState.title}</h1>
            {skillState.skill.map( (skills) => (
              <div className='container-skill' key={skills.id}>
                <h2 className='skillname'>{skills.name}</h2>
                <progress className='skillporcentage'  value={skills.porcentage} max='100'>
                  {skills.porcentage}
                </progress>
              </div>
            ))}
          </div>
        ))
      }
      
    </div>
  )
}


