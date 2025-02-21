
import { useState } from 'react'
import './App.css'
import Cooks from './Components/Cooks/Cooks'
import Herosection from './Components/Herosection/Herosection'


import Navbar from './Components/Navbar/Navbar'
import Recipe from './Components/Recipe/Recipe'

function App() {
 
  const [cooks,setCooks]=useState([])
  
  const handleAddToCook = recipe =>{
    const newCook =[...cooks,recipe]
    setCooks(newCook)
  }
  
 

  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <div className='md:flex'>
        <Recipe handleAddToCook={handleAddToCook}></Recipe>
        <Cooks cooks={cooks}></Cooks>
      </div>
     
    
      
      
    </>
  )
}

export default App
