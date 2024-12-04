
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let menu = document.querySelector(".menu-icon");
let navbar =document.querySelector("navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};



//Animation

const animate = scrollReveal({
  origin:top,
  distance:'60px',
  duration:"2500",
  delay:"400",

});

animate.reveal(".navbar");
animate.reveal(".home-text",{origin: "left" });