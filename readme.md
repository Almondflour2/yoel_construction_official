Yoel Construction Website

1. Built mobile first with media queries
2. Features: sticky header



/* rewrite.css | http://127.0.0.1:3000/css/rewrite.css */

.card p {
  /* font-size: 3vmin; */
  font-size: 13px;
}

/* contactform.css | http://127.0.0.1:3000/css/contactform.css */

.contactcontainer section {
  /* display: flex; */
  /* height: 100%; */
  /* width: 100%; */
  /* margin-right: 50px; */
}

@media only screen and (min-width: 800px) {
  .contact-form.card {
    /* margin: 0 20em 0 20em; */
    width: 100% !important;
    max-width: 600px;
    margin: 0 auto;
  }
}
