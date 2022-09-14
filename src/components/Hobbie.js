import React from 'react'

export const Hobbie = ({hobbieState}) => {
  const {hobbies} = hobbieState;
 
  return (!!Object.keys(hobbieState).length &&
    <div className='container-hobbies'>
      <h1 className='hobbies-title'>{hobbieState.title}</h1>
      {
        hobbies.map( hobbie => (
          <div className='hobbie' key={hobbie.id}>
            <div>
              <img className='hobbiePicture' src={hobbie.picture}/>
            </div>
            <div>
              <h2 className='hobbieTitle'>{hobbie.title}</h2>
              <p className='hobbieDescription'>{hobbie.description}</p>
            </div>
          </div>
          
        ))
      }
    </div>
  )
}


