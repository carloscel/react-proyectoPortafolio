import React from 'react'

export const Blogs = ({blogState}) => {
  return (
    <div className='container-blog'>
      <div className='container-text'>
        <h3 className='blogSubtitle'>{blogState.subTitle}</h3>
        <h1 className='blogTitle'>{blogState.title}</h1>
        <p className='blogDescription'>{blogState.description01}</p>
        <p className='blogDescription'>{blogState.description02}</p>
        <p className='blogfooter'>{blogState.footer}</p>
      </div>
      <div className='container-pictureBlog'>
        <img className='blogPicture' src={blogState.picture}/>
      </div>
    </div>
  )
}


