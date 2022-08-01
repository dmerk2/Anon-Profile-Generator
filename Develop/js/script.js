var start = document.getElementById("generate")
var box = document.getElementById("box")
var whiteBtn = document.getElementById("white")
var blackBtn = document.getElementById("black")
var randomBtn = document.getElementById("randomColor")
var down = document.getElementById("down")
 var monsterImage = document.getElementById("monster")
 var finalText = document.getElementById('randomBio')
var reRoll = document.getElementById("yesroll")
var clip = document.getElementById("clip")


// gets from pixel api
function getMonster(){
 
  var requestUrl = "	https://fast-dawn-89938.herokuapp.com/https://app.pixelencounter.com/api/basic/monsters/random"
  
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  
  if(xhr.readyState === XMLHttpRequest.DONE){
    
    monsterImage.innerHTML = xhr.response
    
  }
};


xhr.open('GET', requestUrl)
xhr.send()

 }


// gets from fact api
function getFact() {

  var requestUrl = 'https://uselessfacts.jsph.pl/random.json?language=en';

 fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data){
     
     finalText.textContent = data.text 
     
   })
 }

 
// random css color
 function randomColor(){
  var randomCss = Math.floor(Math.random()*1677215).toString(16);
  box.style.backgroundColor = "#" + randomCss;
  
  }
  
  // downloads box div as a png
  function downloading(){
  html2canvas(box).then(function(canvas){
     
  const image = canvas.toDataURL("image/png", 1.0)
      const link = document.createElement("a")
      link.download = "profile-picture.png";
      link.href = image;
      link.click()
  })
     
  }
  
  // takes user from start screen to generate page
  function goNext (){
      window.location.href= "generator.html"
  }

// copies current random fact to clipboard
 function copyFact(){
  const area = document.createElement('textarea')
  finalText.appendChild(area)
  area.value = finalText.textContent
  area.select();
  document.execCommand('copy')
  finalText.removeChild(area)
 }


whiteBtn.addEventListener("click", function(){
    box.style.backgroundColor = "white"
})

blackBtn.addEventListener("click", function(){
    box.style.backgroundColor = "black"
})

randomBtn.addEventListener("click", randomColor)

down.addEventListener("click", downloading)

reRoll.addEventListener("click", run)

// clip.addEventListener("click", copyFact)

function run(){
getFact();
getMonster();
}

run();
// 180px x 180px
// {scale: 0.44}

// 170px x 170px 
// {scale: 0.417}