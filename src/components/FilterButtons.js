import React from 'react'
import  './FilterButtonsData.css'

function FilterButtons ({props, handleSort, handleGender}) {

  
  return (
  <div className='buttons'>
    <button className="btn btn-primary" onClick={handleSort}>Filter by Name</button> 

    <button className="btn btn-primary" onClick={handleGender}>Filter by Gender</button>
  </div>
  )
}

export default FilterButtons