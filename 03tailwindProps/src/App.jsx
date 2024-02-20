import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './card';

function App() {


  return (
    <>
     <h1 className='bg-green-400 text-black rounded p-4 mb-4' >HELLO</h1>
     <Card username="Apoorva" btntext="Visit Profile"/>
     <Card username="Ridhi" btntext="Know more"/>


    </>
  )
}

export default App
