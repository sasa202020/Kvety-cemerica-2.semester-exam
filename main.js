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
    var a = document.getElementById(1);
    var b = document.getElementById(2);
    var c = document.getElementById(3);

  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";

  var x = document.getElementById(id);
    x.style.display = "";
}
function hideOptions(){
    var b = document.getElementById(2);
    var c = document.getElementById(3);

    b.style.display = "none";
    c.style.display = "none";
}
//scroll down button                      thanks to https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
var scrollToTopBtn = document.getElementById("downButton");
var rootElement = document.documentElement;

function scrollToTop() {
 
  rootElement.scrollTo({
    top: 800,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
