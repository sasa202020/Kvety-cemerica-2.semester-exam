//changing images on click
function changeImage1() {
    var image = document.getElementById('testimage');
    if (image.src.match("spring")) {
        image.src = "img/spring.png";
    }
    else {
        image.src = "img/spring.png";
    }
}

function changeImage2() {
    var image = document.getElementById('testimage');
    if (image.src.match("summer")) {
        image.src = "img/summer.png";
    }
    else {
        image.src = "img/summer.png";
    }
}

function changeImage3() {
    var image = document.getElementById('testimage');
    if (image.src.match("autum")) {
        image.src = "img/autum.png";
    }
    else {
        image.src = "img/autum.png";
    }
}

function changeImage4() {
    var image = document.getElementById('testimage');
    if (image.src.match("winter")) {
        image.src = "img/winter.png";
    }
    else {
        image.src = "img/winter.png";
    }
}
// choose us 3 ailes 
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "";
  } else {
    x.style.display = "none";
  }
}
