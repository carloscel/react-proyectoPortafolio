import React from 'react'

export const Button = ({buttonState}) => {

  return (
    <div className='container-button'>
      <button className='blueButton'>{buttonState.buttonBlue}</button>
      <button className='whiteButton'>{buttonState.buttonWhite}</button>
    </div>
  )
}


