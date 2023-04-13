import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Showcase from './components/Showcase.tsx'

function App() {
  const [count, setCount] = useState(0)
  const [boxSize, setBoxSize] = useState(15);
  let sizeIterable = 0;
  let isPaused = false;
  
  useEffect(() => {
    const updateBox = () => {
      sizeIterable+=0.025;
      let newSize = (Math.sin(sizeIterable) + 1) * 100;
      setBoxSize(newSize);

      setTimeout(updateBox, 20);
    }

    updateBox();
  }, []);

  return (
    <div className='App'>
      <div className='Header'> 
        <h1 className='Header-Title'>Ryan's Portfolio</h1>
      </div>

      <div className='Showcase-Group'>
        <Showcase showcaseImage='' showcaseTitle='Title' showcaseDescription='Description' showcaseLink='Link'/>

        <Showcase showcaseImage='' showcaseTitle='Title' showcaseDescription='Description' showcaseLink='Link'/>

        <Showcase showcaseImage='' showcaseTitle='Title' showcaseDescription='Description' showcaseLink='Link'/>

        <Showcase showcaseImage='' showcaseTitle='Title' showcaseDescription='Description' showcaseLink='Link'/>

        <Showcase showcaseImage='' showcaseTitle='Title' showcaseDescription='Description' showcaseLink='Link'/>
      </div>
    </div>
  )
}

export default App
