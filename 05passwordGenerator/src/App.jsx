import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
   
  const [length,setLength ] = useState(15);
  const [number,setNumber]=useState(true);
  const [charaters,setCharacter]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator = useCallback(()=>{
  let pass ="";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";
  if(number) str += "0123456789"
  if(charaters) str += "!@#$%^&*()_+<>?/,"

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
  }
  setPassword(pass);

  },[length,number,charaters,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,number,charaters])
  
  const passwordref = useRef(null);

  const copytoclipboard = useCallback(()=>{
    passwordref.current?.select();
     window.navigator.clipboard.writeText(password)
    },[password])
  return (
    <>
        <div className='w-full max-w-md mx-auto my-8 shadow-md px-4 py-4 bg-gray-800 rounded '>
          <h1 className='text-white text-3xl text-center my-4'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly 
            ref={passwordref}
            />
            <button onClick={copytoclipboard} className='ml-2'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex item-center gap-x-1'>
              <input type="range"
               min={6}
               max={20}
               value={length}
               className='cursor-pointer'
               onChange={(e)=>setLength(e.target.value)}
              />
              <label>Length:{length}</label>
            </div>
            <div className='flex gap-x-1 item-ceneter'>
             <input type="checkbox"
             defaultChecked={number}
             onChange={()=>{
              setNumber((prev)=>!prev);
             }} 
             id='numberInput'
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex gap-x-1 item-ceneter'>
             <input type="checkbox"
             defaultChecked={charaters} 
             id='characterInput'
             onChange={()=>{
              setCharacter((prev)=>!prev);
             }}
            />
            <label htmlFor="numberInput">Characters</label>
            </div>

          </div>
        </div>
    </>
  )
}

export default App
