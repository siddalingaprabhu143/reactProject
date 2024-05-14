import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColur] = useState("olive")

  return (
    <div className='w-full h-screen duration-400' style={{backgroundColor:color}}>
         <div className='fixed flex flex-wrap bottom-6 justify-center rounded-lg px-0 bg-white text-center right-52'>
             <div className='border-y-cyan-950 flex flex-wrap justify-center gap-2 shadow-lg rounded-xl bg-white px-2 py-1 '>
                   <button className='border-y-cyan-950 rounded-xl px-1' style={{backgroundColor:"red"}} 
                   onClick={()=>{setColur("red")}}>red</button>
                   <button className='rounded-xl px-1' style={{backgroundColor:"green"}} 
                   onClick={()=>{setColur("green")}}>red</button>
                   <button className='rounded-xl px-1' style={{backgroundColor:"brown"}} 
                   onClick={()=>{setColur("brown")}}>red</button>
                   <button className='rounded-xl px-1' style={{backgroundColor:"yellow"}} 
                   onClick={()=>{setColur("yellow")}}>red</button>

                  <button className='rounded-xl px-1' style={{backgroundColor:"olive"}} 
                   onClick={()=>{setColur("olive")}}>red</button>
                   <button className='rounded-xl px-1' style={{backgroundColor:"pink"}} 
                   onClick={()=>{setColur("pink")}}>red</button>
                   <button className='rounded-xl px-1' style={{backgroundColor:"white"}} 
                   onClick={()=>{setColur("white")}}>red</button>
                   <button className='rounded-xl px-1' style={{backgroundColor:"black"}} 
                   onClick={()=>{setColur("black")}}>red</button>
              </div>

         </div>
    </div>
  )
}

export default App
