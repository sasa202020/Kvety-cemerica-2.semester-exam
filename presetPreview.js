//Preset preview slideshow  thanks goes again to https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2
var slideIndex2 = 1;
showDivs(slideIndex2);

function currentDiv(n) {
  showDivs((slideIndex2 = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " w3-white";
}
