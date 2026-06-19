$(document).ready(function()
{
    // navbar shrink
    $(window).on("scroll",function()
    {
        if($(this).scrollTop() > 90)
        {
            $(".navbar").addClass("navbar-shrink");
        }
        else
        {
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    // parallax js
    function parallaxMouse()
    {
        if($('#parallax').length)
        {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        }
    }
    parallaxMouse();
    // skills bar
    $(window).scroll(function()
    {
        var hT = $("#skill-bar-wrapper").offset().top,
        hH = $("#skill-bar-wrapper").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
        if( wS > (hT+hH-1.4*wH))
        {
            jQuery('.skillbar-container').each(function()
            {
                jQuery(this).find('.skills').animate({
                    width:jQuery(this).attr('data-percent')
                }, 5000) // 5 seconds
            })
        }
    })
    // filter
    let $btns = $('.img-gallery .sortBtn .filter-btn');
    $btns.click(function(e) {
        $('.img-gallery .sortBtn .filter-btn').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.img-gallery .grid').isotope
        ({
            filter:selector
        })
        return false;
    })
    $('.image-popup').magnificPopup
    ({
        type: 'image',
        gallery: { enabled: true}
    })
    // owl carousel
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })
    // navbar collapse 
    $(".nav-link").on("click",function()
    {
        $(".navbar-collapse").collapse("hide");
    })
    // scroll
    $.scrollIt({
        topOffset:-50
    })
    
})


//About

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//galery
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}


//contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbwKBDtbxGU1OPJQUmQkHQjftT1gCs-MyXw9j6ycNxDMfLI4RA6mzld_rudagh6FA2NvFg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent succesfully"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})