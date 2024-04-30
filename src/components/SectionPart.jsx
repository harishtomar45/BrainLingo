import React, { useState } from 'react'
import CardGroup from './CardGroup'

const SectionPart = () => {

  const [key ,setkey] = useState()
// console.log(key)
  return (
    <>
      <div className='container text-center  d-flex flex-column justify-content-center    ' style={{height : "200px"}}> 
      <h3 className='fw-bold '>Science Fiction Stories</h3>

      <div className='d-flex justify-content-evenly align-items-center my-4'>
        <button value={"New"} onClick={(e)=>(setkey(e.target.value))} className='btn btn-primary rounded-pill'>New</button>
        <button value={"In Progress"} onClick={(e)=>(setkey(e.target.value))} className='btn btn-warning text-light rounded-pill'>In Progress</button>
        <button value={"Complete"} onClick={(e)=>(setkey(e.target.value))} className='btn btn-success rounded-pill'> Completed</button>
        <button className='btn btn-primary rounded-pill'>Clear All</button>

      </div>
      </div>


      <CardGroup value={key}/>
    </>
  )
}

export default SectionPart