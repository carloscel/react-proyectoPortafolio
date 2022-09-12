
export const Experiences = ({experienState}) => {

  const exper =  experienState.experience
  console.log(exper)

  return (
    <div>
      <h1>{experienState.title}</h1>
      {
        exper.map((experience) => (
          <div key={experience.id}>
            <div><img src={experience.logo}/></div>
            <div>
              <h3>{experience.date}</h3>
              <h3>{experience.job}</h3>
              <p>{experience.description}</p>
            </div>     
          </div>   
        ))
      }  
      
    </div>
  )
}

