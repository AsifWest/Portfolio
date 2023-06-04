$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


// typing text animation script
// Get the current Typed instance
var currentTyped = $(".typing").data("typed");

// If a Typed instance already exists, destroy it
if (currentTyped) {
  currentTyped.destroy();
}

// Create a new Typed instance with the desired settings
var typed = new Typed(".typing", {
  strings: ["Calisthenics Athelete", "Developer", "Designer", ""],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true
});
    

// Get the current Typed instance for the second element
var currentTyped2 = $(".typing-2").data("typed");

// If a Typed instance already exists, destroy it
if (currentTyped2) {
  currentTyped2.destroy();
}

// Create a new Typed instance with the desired settings for the second element
var typed2 = new Typed(".typing-2", {
  strings: ["Calisthenics Athelete", "Developer", "Designer", ""],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true
});

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// night n day implementation
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png";
    }
    
}

// change of colors under developement
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });
var themeToggler = document.querySelector('.change-of-colors');
var toggleBtn = document.querySelector('.toggle-btn');
const widget = document.querySelector('.toggle-btn');
const control = document.querySelector('.change-of-colors');

widget.addEventListener('click', ()=>{
  control.classList.toggle('open')
})


// animations underdevelopement
window.addEventListener('scroll', function() {
    var scrollElement = document.querySelector('.scroll-element');
    var elementPosition = scrollElement.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (elementPosition < windowHeight) {
      scrollElement.classList.add('appear');
    }
  });
  
  
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {

        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenelements = document.querySelectorAll('.title');
hiddenelements.forEach((el) => observer.observe(el));