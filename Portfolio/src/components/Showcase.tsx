import React from 'react'

const Showcase = ( {showcaseImage, showcaseTitle, showcaseDescription, showcaseLink }: {showcaseImage: string, showcaseTitle: string, showcaseDescription: string, showcaseLink: string} ) => {
  return (
    <div className='Showcase light-color-2 my-3 p-3' style={{
      width: '50%',
    }}>
        <h1 className='Showcase-Title'> {showcaseTitle} </h1>
        <img className='Showcase-Image' src={showcaseImage} alt='Showcase Image'/>
        <p className='my-3 Showcase-Description' > {showcaseDescription} </p>
        <a  href={showcaseLink} target="_blank" style={{
          color: 'rgb(0, 128, 191)'
        }}>Click here for demo</a>
    </div>
  )
}

export default Showcase