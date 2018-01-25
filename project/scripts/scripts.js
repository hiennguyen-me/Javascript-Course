/********** Scroll window***************/
window.onscroll=  function(){
   var header = document.querySelector("header");
   var logo = document.querySelector("img#logo");
   var slider = document.querySelector(".slider");
   var nav = document.querySelector("#menu-nav");
   if(slider.getBoundingClientRect().top < header.offsetHeight){
      header.classList.add("small");
      logo.style.height = "70px";
      nav.setAttribute("style", "margin-top: 20px");
      // nav.classList.add("scroll-nav");
   }
   else
   {
      header.classList.remove("small");
      logo.style.height = "80px";
      nav.setAttribute("style", "margin-top: 25px");
    }
};



/************** Navigation menu ************/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
};
/************** Toggle menu ********************/
var theToggle = document.getElementById('toggle-menu');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
      elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}



theToggle.onclick = function() {
  toggleClass(this, 'on');
  var menu = document.getElementById("main-menu");
  toggleClass(menu, 'toggle');
  return false;
}

window.onresize = function setDefault(){
  if(window.innerWidth > 900){
    var menu = document.getElementById("main-menu");
    var btnToggle = document.getElementById("toggle-menu");

    if(menu.classList.contains("toggle")){
      menu.classList.remove("toggle");
    }
    btnToggle.classList.remove("on");

  }
}

//setDefault();

/************** Slider ****************/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n){
  showDivs(n);
}

function showDivs(n) {
    var i;
    var slide = document.getElementsByClassName("mySlides");
    var circle =  document.getElementsByClassName("circle-click");
    if (n > slide.length) 
      slideIndex = 1; 
    else if (n < 1) {
      slideIndex = slide.length;
    }
    else
      slideIndex = n;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"; 
        circle[i].classList.remove("cir-active");
    }
    slide[slideIndex-1].style.display = "block"; 
    circle[slideIndex-1].classList.add("cir-active");
}

/* Automatic slider */
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var circle =  document.getElementsByClassName("circle-click");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      circle[i].classList.remove("cir-active"); 
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1;
    } 
    x[slideIndex-1].style.display = "block"; 
    circle[slideIndex-1].classList.add("cir-active");
    setTimeout(carousel, 5000); // Change image every 5 seconds
}


/************** Book Now *******************/
var Book = document.querySelector(".book p a");
Book.onclick = function (e){
  e.preventDefault();
  if(Book.innerHTML == "Book Now!")
    Book.innerHTML = "Oooooops!";
  else
    Book.innerHTML = "Book Now!";
};

/**************** Learn More *************/
// var detail = document.querySelectorAll(".learn-more a");
// detail.onclick = function(e){
//   console.log ("Success");
//   e.preventDefault();
//   // var p = document.createElement("p");
//   // p.createTextNode("Yes, you're on the moon, but that doesn't mean gravity won't do its work on your body. After a long day of excitement, bunk down in our luxurious beds to recharge for the next day.");
// };


function ShowDetail(elem, e){
  e.preventDefault();     //
  console.log("Hello");
  var des = elem.parentElement.previousElementSibling;
  console.log(des.querySelector("p"));
  if (!des.querySelector("p")){
    var newElement = document.createElement("p");
    var newTextNode = document.createTextNode("Yes, you're on the moon, but that doesn't mean gravity won't do its work on your body. After a long day of excitement, bunk down in our luxurious beds to recharge for the next day.");
    newElement.appendChild(newTextNode);
    des.appendChild(newElement);
  }
  else{
    console.log(des.lastChild);
    des.removeChild(des.lastChild);

  }
  

  
}
var show1 = document.getElementById("show1");
var show2 = document.getElementById("show2");
var show3 = document.getElementById("show3");
show1.addEventListener('click', function(e){ShowDetail(show1, e);});
show2.addEventListener('click', function(e){ShowDetail(show2, e);});
show3.addEventListener('click', function(e){ShowDetail(show3, e);});


/******* Images ************/
 const IMAGES = document.querySelectorAll("img");

const SIZES = {
    cate: "(max-width: 400px) 100vw, 372px",
    slider: "(max-width: 799px) 100vw, 670px"
};

function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400;

    for (let i = 0; i<5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400;
    }

    return markup.join();
}

//don't make with image[0] because that is logo.
for (let i = 1; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  imgSrc = imgSrc.slice(0,-8);
  
  let srcset = makeSrcset(imgSrc);
  IMAGES[i].setAttribute("srcset", srcset);

  let type = IMAGES[i].getAttribute("data-type");
  let sizes = SIZES[type];
  IMAGES[i].setAttribute("sizes", sizes);
}