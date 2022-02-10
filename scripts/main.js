let myPhoto = document.querySelector(".self");
let garamon = true;

function changeImage() {
  if (garamon === true) {
    myPhoto.src='images/image000000.JPG';
    garamon = false;
  } else {
    myPhoto.src='images/garamon.gif';
    garamon = true;
  }
}
myPhoto.addEventListener('click', changeImage);

const select = document.querySelector('select');
const map = document.querySelector('embed');

select.addEventListener('change', setMap);

function setMap() {
  const choice = select.value;

  if (choice === 'guns') {
    map.type = "text/html";
    map.src = "pages/map911guns.html";
    map.width="700";
    map.height="700";
  } else if (choice === 'privcon') {
    map.type = "text/html";
    map.src = "pages/map911privcon.html";
    map.width="700";
    map.height="700";
  } else if (choice === 'socdis') {
    map.type = "text/html";
    map.src = "pages/map911socdis.html";
    map.width="700";
    map.height="700";
  } else if (choice === 'vio') {
    map.type = "text/html";
    map.src = "pages/map911viol.html";
    map.width="700";
    map.height="700";
  } else {
    map.type = "text/html";
    map.src = "pages/hwk03 copy.html";
    map.width="900";
    map.height="4250";
  }
}