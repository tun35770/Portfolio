import React from 'react'

const Showcase = ( {showcaseImage, showcaseTitle, showcaseDescription, showcaseLink }: {showcaseImage: string, showcaseTitle: string, showcaseDescription: string, showcaseLink: string} ) => {
  return (
    <div className='Showcase'>
        <h1 className='Showcase-Title'> {showcaseTitle} </h1>
        <img className='Showcase-Image' src={showcaseImage} alt='Showcase Image'/>
        <p className='Showcase-Description'> {showcaseDescription} </p>
        <a href={showcaseLink}>Link</a>
    </div>
  )
}

export default Showcase