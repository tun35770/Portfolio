const Showcase = ( {showcaseImage, showcaseTitle, showcaseDescription, showcaseLink, position }: {showcaseImage: string, showcaseTitle: string, showcaseDescription: string, showcaseLink: string, position: string} ) => {
  
  const getPositionClassName = (position:string) => {
    let classname;
    if(position === 'left')
      classname = 'Showcase-Left light-color-3 '
    else 
      classname = 'Showcase-Right light-color-4 '

    
    return classname;
  }
  
  return (
    <div className={` ${getPositionClassName(position)} showcase hidden p-3`} >
        <div style={{
          display:'flex',
          
        }}>
          {position === 'left' &&
            <>
              <img className='showcase-image' src={showcaseImage} alt='Showcase Image'/>
              <div className='pl-3' style={{
                display:'flex',
                flexFlow: 'column wrap',
                justifyContent: 'space-evenly'
              }}>
                <h3 className='showcase-title'> {showcaseTitle} </h3>
                <p className='my-3 showcase-description' > {showcaseDescription} </p>
                <a  href={showcaseLink} target="_blank" style={{
                  color: 'rgb(0, 128, 191)'
                }}>Click here for demo</a>
              </div>
            </> 
          }
          {position === 'right' && 
            <>
              
              <div className='px-3' style={{
                display:'flex',
                flexFlow: 'column wrap',
                justifyContent: 'space-evenly'
              }}>
            
                <h3 className='showcase-title'> {showcaseTitle} </h3>
                <p className='my-3 showcase-description' > {showcaseDescription} </p>
                <a  href={showcaseLink} target="_blank" style={{
                  color: 'rgb(0, 128, 191)'
                }}>Click here for demo</a>
              </div>
              
              <img className='showcase-image' src={showcaseImage} alt='Showcase Image'/>
            </> 
          
          }
        </div>
    </div>
  )
}

export default Showcase