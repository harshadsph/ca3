var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n,divName,dots) {
  showDivs(slideIndex += n, divName, dots);
}

function currentDiv(n, divName) {
  showDivs(slideIndex = n, divName);
}

function showDivs(n, divName, dotsId) {
  var i;
  var dots;
  var x = document.getElementsByClassName(divName);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  if(slideIndex){
        x[slideIndex-1].style.display = "block";  
        x[slideIndex-1].style.width = "100%";  
        x[slideIndex-1].style.height = "100%";  
        x[slideIndex-1].style.opacity = "0.8";  
  }
  if(dotsId){
    dots = document.getElementsByClassName(dotsId);
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    dots[slideIndex-1].className += " w3-white";
  }
}