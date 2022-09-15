// code to collapse and expand navbar from toggle button
const navButton = document.getElementsByClassName('toggle')[0]
const navLinks = document.getElementsByClassName('topbar')[0]

navButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

// slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("projectImage");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides1(n2) {
  showSlides2(slideIndex2 += n2);
}

// Thumbnail image controls
function currentSlide1(n2) {
  showSlides2(slideIndex2 = n2);
}

function showSlides2(n2) {
  var i;
  var slides1 = document.getElementsByClassName("projectImages");
  var dots1 = document.getElementsByClassName("dots");
  if (n2 > slides1.length) { slideIndex2 = 1 }
  if (n2 < 1) { slideIndex2 = slides1.length }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex2 - 1].style.display = "block";
  dots1[slideIndex2 - 1].className += " active";
}