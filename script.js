'use strict'

function getSearchInput(searchInput = 'CabinFeverLive'){

  console.log(searchInput)
  fetch(`https://api.github.com/users/${searchInput}/repos`)
    .then(response => response.json())
    .then((response =>{
      console.log('responseJson', responseJson)
    }))
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

function watchForm(){
  const searchInput = document.getElementById("gitSearch").value
  $('gitSearch').submit(event => {
    event.preventDefault();
    getSearchValue(searchInput);
  });
}



$(function(){
  console.log('App loaded...waiting next step')
  getSearchInput()
})