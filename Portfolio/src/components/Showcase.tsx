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
    <div className={` ${getPositionClassName(position)} showcase hidden light-color-3 my-3 p-3`} >
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