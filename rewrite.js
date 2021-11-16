
// sticky header
window.onscroll = function() {myFunction()};

var stickyheadercontainer = document.getElementById("stickyHeader");
var sticky = stickyheadercontainer.offsetTop;
var stickylogo = document.getElementById("myStickylogo");

stickylogo.style.visibility ='hidden';

// function stickylogofade()
// {
//   (function reveal(val){
//   document.getElementById('myStickylogo').style.opacity = val;
//   if(val<1) setTimeout(reveal,1,val+0.001);
// })(0);
// }

function myFunction() {
  if (window.pageYOffset > sticky) {
    stickyheadercontainer.classList.add("sticky");
    stickylogo.style.visibility = 'visible';
  } else {
    stickyheadercontainer.classList.remove("sticky");
    stickylogo.style.visibility = 'hidden';
  }
}
// end sticky
