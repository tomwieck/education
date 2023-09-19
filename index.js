function togglemenu() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " nav--open";
  } else {
    x.className = "nav";
  }
  var element = document.getElementById("menu-toggle");
  element.classList.toggle("menu-toggle--open");
}
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion--open");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}