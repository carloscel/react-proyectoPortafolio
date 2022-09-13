
export const Experiences = ({experienState}) => {

  const {experience} =  experienState
  
  return ( !!Object.keys(experienState).length && 
    <div className="container-experience">
      <h1 className="experienceTitle">{experienState.title}</h1>
      {
       experience.map((experience) => (
          <div className="container-brand" key={experience.id}>
            <div><img className="experienceLogo" src={experience.logo}/></div>
            <div>
              <h3 className="experienceDate">{experience.date}</h3>
              <h3 className="experienceJob">{experience.job}</h3>
              <p className="experienceDescription">{experience.description}</p>
            </div>     
          </div>   
        ))
      }  
      
    </div>
  )
}

