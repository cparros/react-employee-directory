import React from 'react'
import  './FilterButtonsData.css'

function FilterButtons (props) {

  return (
  <div className='buttons'>
    <button className="btn btn-primary" onClick={props.handleSort}>Filter by Name</button> 
    
    <button className="btn btn-primary" onClick={props.handleGender}>Filter by Gender</button>
  </div>
  )
}

export default FilterButtons