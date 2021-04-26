import React from 'react'
import  './FilterButtonsData.css'

function FilterButtons () {
 function nameClicked (event) {
   event.preventDefault() 
   console.log('Name clicked')
 }

 function genderClicked (event) {
  event.preventDefault() 
  console.log('Gender clicked')
}

  return (
  <div className='buttons'>
    <button className="btn btn-primary" onClick={nameClicked}>Filter by Name</button>
    <button className="btn btn-primary" onClick={genderClicked}>Filter by Gender</button>
  </div>
  )
}

export default FilterButtons