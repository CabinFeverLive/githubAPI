'use strict'

function getSearchInput(){
  const searchInput = document.getElementById("gitSearch").val
  console.log(searchInput)
  fetch(`https://api.github.com/users/${searchInput}/repos`)
    // .then(response => response.json())
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