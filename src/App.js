import React, {  useState } from 'react'
import './App.css'
const App = () => {

  const [weight,setWeight]=useState(null)
  const [height,setHeight]=useState(null)

  const weightHandler =(e)=>{
    setWeight(e.target.value)
  }
  const heightHandler =(e)=>{
    setHeight(e.target.value)
  }


  return (
    <>
    <div id='heading'>Bmi Calculator
    </div>
    <div id='cover'>

      <div id='container'>
      <label>Weight   {weight}  kg</label>
      {/* <input min={20} max={100} onChange={weightHandler} value={weight} type='range'/> */}
      <input type='text' onChange={weightHandler} value={weight}/>
    </div>
    <div id='container'>
      <label>height   {height}   m</label>
      {/* <input min={1} max={3} onChange={heightHandler} value={height} type='range'/> */}
      <input type='number' onChange={heightHandler} value={height}/>

    </div>
    
    </div>
    <div id='result'>
      result :
      <span>{isNaN(weight/(height*height)) || height===""|| weight===""  ? "":`${(weight/(height*height)).toFixed(1)}` }
      </span>
    </div>
    <div>
      <img src='https://www.bodybuildingmealplan.com/wp-content/uploads/male-body-fat-percentage-reference.jpg' alt=''/>
    </div>
    </>
  )
}

export default App