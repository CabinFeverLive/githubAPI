'use strict'

function getSearchInput(searchInput = 'CabinFeverLive'){
  console.log(searchInput)
  fetch(`https://api.github.com/users/${searchInput}/repos`)
    .then(response => response.json())
    .then((responseJson =>{
      console.log('responseJson', responseJson)
      displayResults(responseJson);
    }))
}

function displayResults(responseJson){
 let html = `
    <ul>
  `

  for (const repo of responseJson) {
    html += `
      <li>
        <h3>${repo.name}</h3>
          <p>${repo.html_url}</p>
      </li>
    `
  }

  html += `</ul>`
  $('#searchResults').html(html)
}


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