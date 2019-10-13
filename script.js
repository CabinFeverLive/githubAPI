'use strict'

function getSearchInput(searchInput = 'CabinFeverLive'){
//   const searchInput = document.getElementById("gitSearch").value
  console.log(searchInput)
  fetch(`https://api.github.com/users/:${searchInput}/repos`)
    .then(response => response.json())
    console.log(response.json)
    // .then((responseJson => {
    //     if (responseJson.status === 'error'){
    //       console.log('Username is not found')
    //     }
    //     //  show error message
    //     else {
    //       displayResults(responseJson)
    //     }
    //     //  displayResults()
    //     // displayResults(responseJson))
    //   }))

}
$(function(){
  console.log('App loaded...waiting next step')
  getSearchInput()
})