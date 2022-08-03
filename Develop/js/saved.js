var ulEl = document.getElementById("savedBios")
var clear = document.getElementById("clear")

function renderSaved(){
    var tryThis = localStorage.getItem('allProfiles')
    var printObj = JSON.parse(tryThis);
    
    
    for(i = 0; i < printObj.length; i++){
 var printPicture = printObj[i].picture
 var printBio = printObj[i].bio
    var liEl = document.createElement("li")
    ulEl.appendChild(liEl)
    var imgEl = document.createElement('img')
    
    liEl.appendChild(imgEl)
    imgEl.src = printPicture 
    
    var p = document.createElement('p')
    p.textContent = printBio
    liEl.appendChild(p)
   var download = document.createElement('button')
   download.textContent = "download"
   liEl.appendChild(download)
    }
    }
    
    renderSaved();
   
 clear.addEventListener("click", function(){
   localStorage.clear()
   ulEl.style.display = "none"
 })   