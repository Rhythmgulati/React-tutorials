import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive");

  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor:color}}>
     <div className='flex flex-wrap justify-center gap-3 fixed bottom-12 inset-x-0 px-2'>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> setColor("red")}>Red</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> setColor("green")}>Green</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> setColor("blue")}>Blue</button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> setColor("black")}>Black</button>
     
     </div>
     </div>
    </>

  )
}

export default App
