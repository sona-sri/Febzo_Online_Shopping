 //navigation bar//
 let menu = document.querySelector("#menu-bars");
 let navbar = document.querySelector(".navbar")

 menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 }
 
 //scroll-bar//
 let section = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header .navbar a');


 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

   //scroll-bar//

   section.forEach(sec=> {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
      if(top => offset && top <offset+height){
         navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelectorAll('header .navbar a[href* ='+id+']').classList.add('active');
         });
      };
   });
 }

 document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
 }
 
 document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
 }




var dest = new Date("april 30,2023 10:00:00").getTime();

var x = setInterval(function(){
var now = new Date().getTime();
var diff = dest-now;

var days = Math.floor(diff/ (1000*60*60*24));
console.log(days);
var hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
console.log(hours);
var minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
console.log(minutes);
var seconds = Math.floor((diff % (1000*60)) / 1000);
console.log(seconds);

document.getElementById("Days").innerHTML = days;
document.getElementById("Hours").innerHTML = hours;
document.getElementById("Minutes").innerHTML = minutes;
document.getElementById("Seconds").innerHTML = seconds;

},1000);

















//swiper for home//
var swiper = new Swiper(".home-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   loop:true,
});

var swiper = new Swiper(".review-slider", {
   spaceBetween: 50,
   centeredSlides: true,
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
   loop:true,
   breakpoints: {
      0:{
         slidesPerView: 1,
      },
      640:{
         slidesPerView: 2,
      },
      768:{
         slidesPerView: 2,
      },
      1024:{
         slidesPerView: 3,
      },
   },
});

 