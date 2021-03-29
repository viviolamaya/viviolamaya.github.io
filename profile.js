const menuToggle = document.querySelector(".menu-toggle input");
const navbar = document.querySelector("ul");
const menuButton = document.querySelector(".navbar-links ul button")

menuToggle.onclick = function() {
    navbar.classList.toggle("slide")
}

menuButton.onclick = function() {
    navbar.classList.remove("slide")
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

var header = document.getElementById("navbar");
var navi = header.document.getElementByClassName("navi");
for(var i = 0; i < navi.length; i++) {
  navi[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  })
}
