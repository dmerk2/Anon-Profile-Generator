var ulEl = document.getElementById("savedBios")


function renderSaved(){
    var tryThis = localStorage.getItem('allProfiles')
    var printObj = JSON.parse(tryThis);
    console.log(printObj)
    
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

    }
    }
    
    renderSaved();