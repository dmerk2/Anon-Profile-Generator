// variables
var start = document.getElementById("generate");
var box = document.getElementById("box");
var whiteBtn = document.getElementById("white");
var blackBtn = document.getElementById("black");
var randomBtn = document.getElementById("randomColor");
var down = document.getElementById("down");
var monsterImage = document.getElementById("monster");
var finalText = document.getElementById("randomBio");
var reRoll = document.getElementById("yesroll");
var clip = document.getElementById("copy");
var save = document.getElementById("save");

// gets monster svg from pixel api
function getMonster() {
  var requestUrl =
    "	https://fast-dawn-89938.herokuapp.com/https://app.pixelencounter.com/api/basic/monsters/random";

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      monsterImage.innerHTML = xhr.response;
    }
  };

  xhr.open("GET", requestUrl);
  xhr.send();
}

// gets random fact from fact api
function getFact() {
  var requestUrl = "https://uselessfacts.jsph.pl/random.json?language=en";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      finalText.textContent = data.text;
    });
}

// random css color generation
function randomColor() {
  var randomCss = Math.floor(Math.random() * 1677215).toString(16);
  box.style.backgroundColor = "#" + randomCss;
}

// downloads profile picture render as a png
function downloading() {
  html2canvas(box).then(function (canvas) {
    const image = canvas.toDataURL("image/png", 1.0);
    const link = document.createElement("a");
    link.download = "profile-picture.png";
    link.href = image;
    link.click();
  });
}

// takes user from start screen to generate page
function goNext() {
  window.location.href = "generator.html";
}

// copies current random fact to clipboard
function copyFact() {
  const area = document.createElement("textarea");
  finalText.appendChild(area);
  area.value = finalText.textContent;
  area.select();
  document.execCommand("copy");
  finalText.removeChild(area);
}


// calls apis for initiation
function run() {
  getFact();
  getMonster();
}


//changes background color to white
whiteBtn.addEventListener("click", function () {
  box.style.backgroundColor = "white";
});

//changes background color to black
blackBtn.addEventListener("click", function () {
  box.style.backgroundColor = "black";
});

//changes background color to random css color
randomBtn.addEventListener("click", randomColor);

// triggers download of profile picture
down.addEventListener("click", downloading);

//triggers regeneration of apis
reRoll.addEventListener("click", run);

// triggers bio clipboard copy
clip.addEventListener("click", copyFact);


run();

// vvvvvvv local storage functionality vvvvvvv


//stores profile picture as data url in local storage
function storeProfile() {
  html2canvas(box).then(function (canvas) {
    const image = canvas.toDataURL("image/png", 1.0);
    saveLastProfile(image);
  });
}

// sets local storage object of saved profile picture and bio
function saveLastProfile(pic) {
  var savedProfile = JSON.parse(localStorage.getItem("allProfiles"));
  if (savedProfile === null) savedProfile = [];

  var profile = {
    picture: pic,
    bio: finalText.innerHTML,
  };
  localStorage.setItem("profile", JSON.stringify(profile));
  savedProfile.push(profile);
  localStorage.setItem("allProfiles", JSON.stringify(savedProfile));
}

//triggers profile picture and bio storage functions
save.addEventListener("click", function () {
  storeProfile();
});









