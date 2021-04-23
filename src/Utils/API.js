import $ from 'jquery'

export default { 
  
  search: $.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",

  success: function (data) {
    // console.log(data.results[0].cell);
      console.log(data)
  }
})

}