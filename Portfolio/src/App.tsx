import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [boxSize, setBoxSize] = useState(15);
  let sizeIterable = 0;

  useEffect(() => {
    const updateBox = () => {
      sizeIterable+=0.025;
      let newSize = (Math.sin(sizeIterable) + 1) * 100;
      setBoxSize(newSize);

      console.log(boxSize)
      setTimeout(updateBox, 20);
    }

    updateBox();
  }, []);

  return (
    <div>
      <h1 className='Header'>Ryan's Portfolio</h1>
      <div style={{border: '1px solid black', width: boxSize, height:boxSize, borderRadius:'100%', margin:'0 auto'}}></div>
    </div>
  )
}

export default App
