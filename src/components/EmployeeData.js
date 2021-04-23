import React from 'react'
import $ from 'jquery'

function EmployeeData () {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
  
    success: function (data) {
      // console.log(data.results[0].cell);
        console.log(data)
    }
  })
}

export default EmployeeData