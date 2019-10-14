'use strict'

function getSearchInput(searchInput = 'CabinFeverLive'){
  console.log(searchInput)
  fetch(`https://api.github.com/users/${searchInput}/repos`)
    .then(response => response.json())
    .then((responseJson =>{
      console.log('responseJson', responseJson)
      
    }))
}

// fucntion displayResults(responseJson){
//   let html = ""
//   for (let i = 0; i < responseJson.length; i++)


function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    const searchInput = document.getElementById("gitSearch").value
    console.log('searchInput', searchInput)
    getSearchInput(searchInput);
  });
}



$(function(){
  console.log('App loaded...waiting next step')
  watchForm()
})