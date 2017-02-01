jQuery(document).ready(function ($) {
    $(window).stellar();
});

var link = document.querySelector(".header__search");
var popup = document.querySelector(".modal-search");
var close = popup.querySelector(".modal-search__close");


link.addEventListener("click", function(event) {
    event.preventDefault();
    //popup.style.transitionDuration = "3s";
    popup.classList.add("modal-search-show");    
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-search-show");
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {
        if(popup.classList.contains("modal-search-show")) {
            popup.classList.remove("modal-search-show");
        }
    }
});


// Menu
var menuLink = document.querySelector(".header__menu-js-link");
var navLink = document.querySelector(".header__nav");
var menuPopup = document.querySelector(".header__menu");
var menuIcon = document.querySelector(".header__menu-icon");
var menuClose = document.querySelector(".header__menu-popup-close");

menuLink.addEventListener("click", function(event) {
    event.preventDefault();     
    navLink.classList.add("header__nav--show");  
    menuPopup.classList.add("header__menu--show"); 
    menuClose.classList.add("header__menu-popup-close--show");      
    menuIcon.classList.add("header__menu-icon-hide");
});

menuClose.addEventListener("click", function(event) {
    event.preventDefault();
    navLink.classList.remove("header__nav--show"); 
    menuPopup.classList.remove("header__menu--show"); 
    menuClose.classList.remove("header__menu-popup-close--show"); 
    menuIcon.classList.remove("header__menu-icon-hide");  
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {       
        navLink.classList.remove("header__nav--show"); 
        menuPopup.classList.remove("header__menu--show"); 
        menuClose.classList.remove("header__menu-popup-close--show"); 
        menuIcon.classList.remove("header__menu-icon-hide");  
    }
});