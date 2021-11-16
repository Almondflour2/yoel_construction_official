
// sticky header
window.onscroll = function() {myFunction()};

var stickyheadercontainer = document.getElementById("stickyHeader");
var sticky = stickyheadercontainer.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    stickyheadercontainer.classList.add("sticky");
  } else {
    stickyheadercontainer.classList.remove("sticky");
  }
}
// end sticky
