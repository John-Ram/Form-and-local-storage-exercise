'use strict'

var timesBeenOnPage = localStorage.getItem('times-visited');
var userName = document.getElementById('username');
var others = document.getElementById('others');

// ================= times users been on page ========================

timesBeenOnPage++;
console.log(timesBeenOnPage);

localStorage.setItem('times-visited', timesBeenOnPage);

var spanElement = document.getElementById('times-visited');

spanElement.textContent = timesBeenOnPage;


//==================================== User Name form=================================================================


function yourName(name){
  this.name = name;

  
  yourName.yourInfo.push(this);
}

yourName.yourInfo = [];



function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);


  var info = event.target;
  var name = info.name.value;

  new yourName(name);

  renderothers();

  var stringyArr = JSON.stringify(yourName.yourInfo);
  localStorage.setItem('yourInfo', stringyArr);

}


function renderothers(){
  others.textContent = '';

  
  for(var i=0; i < yourName.yourInfo.length; i++){
    var infoLI = document.createElement('li');
    var infoP = document.createElement('p');

    infoP.textContent = `${yourName.yourInfo[i].name} was here before. `;
    infoLI.appendChild(infoP);
    others.appendChild(infoLI);
  }
}

userName.addEventListener('submit', handleSubmit);

var nameFromLocalStorage = localStorage.getItem('yourInfo');
var parsedInfo = JSON.parse(nameFromLocalStorage);

if(parsedInfo !== null){
  yourName.yourInfo = parsedInfo; 
}

