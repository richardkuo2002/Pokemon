var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function color_1(){
    var x = document.getElementById("work");
    x.style.backgroundColor = "#6cb9e3"
}
function color_2(){
    var x = document.getElementById("work");
    x.style.backgroundColor = "#72efdd"
}
function color_3(){
    var x = document.getElementById("work");
    x.style.backgroundColor = "#99ff8e";
}