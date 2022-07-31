var start = document.getElementById("generate")
var box = document.getElementById("box")
var whiteBtn = document.getElementById("white")
var blackBtn = document.getElementById("black")
var randomBtn = document.getElementById("randomColor")
var down = document.getElementById("down")
 var monsterImage = document.getElementById("monster")

// var repoList = document.querySelector('img');
// var fetchButton = document.getElementById('box');

 
  var requestUrl = "	https://cors-anywhere.herokuapp.com/https://app.pixelencounter.com/api/basic/monsters/random"

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE){

    monsterImage.innerHTML = xhr.response
    
  }
};

xhr.open('GET', requestUrl)
xhr.send()







whiteBtn.addEventListener("click", function(){
    box.style.backgroundColor = "white"
})

blackBtn.addEventListener("click", function(){
    box.style.backgroundColor = "black"
})

randomBtn.addEventListener("click", randomColor)

down.addEventListener("click", downloading)


function randomColor(){
var randomCss = Math.floor(Math.random()*1677215).toString(16);
box.style.backgroundColor = "#" + randomCss;

}

function downloading(){
html2canvas(box, {scale: 0.44}).then(function(canvas){
   
const image = canvas.toDataURL("image/png", 1.0)
    const link = document.createElement("a")
    link.download = "profile-picture.png";
    link.href = image;
    link.click()
})
   
}

function goNext (){
    window.location.href= "generator.html"
}
// 180px x 180px
// {scale: 0.44}

// 170px x 170px 
// {scale: 0.417}