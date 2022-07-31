var fetchButton = document.getElementById('fetch-button');
var bio = document.getElementById('bio')
function getApi() {

   var requestUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';

  fetch(requestUrl)
    .then(function (response) {
    console.log(response.status)
      return response.json();
    })
    .then(function (data){
      console.log(data)
      var finalText = document.getElementById('finalText')
      finalText.textContent = data.text 
      bio.appendChild(finalText)
    })
  }
    
fetchButton.addEventListener('click', getApi);
 