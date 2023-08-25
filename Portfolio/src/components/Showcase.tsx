const Showcase = ( {showcaseImage, showcaseTitle, showcaseDescription, showcaseLink, position }: {showcaseImage: string, showcaseTitle: string, showcaseDescription: string, showcaseLink: string, position: string} ) => {
  
  return (
    <div className={`showcase hidden light-color-4 p-3`} >
        <img className='showcase-image' src={showcaseImage} height="200em" alt='Showcase Image'/>
        <div className='pl-3' style={{
          display:'flex',
          flexFlow: 'column wrap',
          justifyContent: 'space-evenly',
          height: '75%',
        }}>
          <h3 className='showcase-title'> {showcaseTitle} </h3>
          <p className='my-3 showcase-description' > {showcaseDescription} </p>
          <a  href={showcaseLink} target="_blank" style={{
            color: 'rgb(0, 128, 191)'
          }}>Click here for demo</a>
        </div>
      </div>
  )
}

export default Showcase