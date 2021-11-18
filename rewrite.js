console.log('SUCCESS!')

// sticky header
window.onscroll = function() {myFunction()};

var stickyheadercontainer = document.getElementById("stickyHeader");
var sticky = stickyheadercontainer.offsetTop;
var stickylogo = document.getElementById("myStickylogo");

stickylogo.style.visibility ='hidden';

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

// lightbox script
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//end lightbox script

// Contact sendForm
   (function() {
       // https://dashboard.emailjs.com/admin/integration
       emailjs.init('YOUR_USER_ID');
   })();

   window.onload = function() {
       document.getElementById('contact-form').addEventListener('submit', function(event) {
           event.preventDefault();
           // generate a five digit number for the contact_number variable
           this.contact_number.value = Math.random() * 100000 | 0;
           // these IDs from the previous steps
           emailjs.sendForm('contact_service', 'contact_form', this)
               .then(function() {
                   console.log('SUCCESS!');
               }, function(error) {
                   console.log('FAILED...', error);
               });
       });
   }
