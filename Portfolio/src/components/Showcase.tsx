const Showcase = ( {showcaseImage, showcaseTitle, showcaseDescription, showcaseLink, position }: {showcaseImage: string, showcaseTitle: string, showcaseDescription: string, showcaseLink: string, position: string} ) => {
  
  const getPositionClassName = (position:string) => {
    let classname;
    if(position === 'left')
      classname = 'Showcase-Left'
    else 
      classname = 'Showcase-Right'

    return classname;
  }
  
  return (
    <div className={` ${getPositionClassName(position)} showcase hidden light-color-3 p-3`} >
        <h3 className='Showcase-Title'> {showcaseTitle} </h3>
        <div style={{
          display:'flex',
          
        }}>
          <img className='Showcase-Image' src={showcaseImage} alt='Showcase Image'/>
          <div className='pl-3' style={{
            display:'flex',
            flexFlow: 'column wrap',
            justifyContent: 'space-evenly'
          }}>
            <p className='my-3 Showcase-Description' > {showcaseDescription} </p>
            <a  href={showcaseLink} target="_blank" style={{
              color: 'rgb(0, 128, 191)'
            }}>Click here for demo</a>
          </div>
        </div>
    </div>
  )
}

export default Showcase