import React from 'react'
import $ from 'jquery'

function GetRandomUser () {
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    
  }
});

}



export default GetRandomUser;