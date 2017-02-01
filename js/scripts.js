// Search
var linkSearch = document.querySelector(".main-header__user-block-search");
var popupSearch = document.querySelector(".modal-search");
var closeSearch = document.querySelector(".modal-search__close");

linkSearch.addEventListener("click", function(event) {
    event.preventDefault();
    popupSearch.classList.add("modal-search-show");
});

closeSearch.addEventListener("click", function(event) {
    event.preventDefault();
    popupSearch.classList.remove("modal-search-show");
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {
        if(popupSearch.classList.contains("modal-search-show")) {
            popupSearch.classList.remove("modal-search-show");
        }
    }
});



// Login
var linkLogin = document.querySelector(".main-header__user-block-login");
var popupLogin = document.querySelector(".modal-login");
var closeLogin = document.querySelector(".modal-login__close");

linkLogin.addEventListener("click", function(event) {
    event.preventDefault();
    popupLogin.classList.add("modal-login-show");
});

closeLogin.addEventListener("click", function(event) {
    event.preventDefault();
    popupLogin.classList.remove("modal-login-show");
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {
        if(popupLogin.classList.contains("modal-login-show")) {
            popupLogin.classList.remove("modal-login-show");
        }
    }
});



// Slider
var radio_1 = document.querySelector("#btn-1");
var radio_2 = document.querySelector("#btn-2");
var radio_3 = document.querySelector("#btn-3");
var bg = document.querySelector(".wrapper");
var text = document.querySelector(".headline__header");

radio_1.addEventListener("click", function(event) {
    bg.style.backgroundImage = "url('../img/bg__1.png')";    
    bg.style.backgroundColor = "#849d8f";
    text.innerHTML = "Крем-брюле и пломбир с малиновым джемом";
});

radio_2.addEventListener("click", function(event) {
    bg.style.backgroundImage = "url('../img/bg__2.png')";
    bg.style.backgroundColor = "#8996a6";
    text.innerHTML = "Шоколадный пломбир и лимонный сорбет";
});

radio_3.addEventListener("click", function(event) {
    bg.style.backgroundImage = "url('../img/bg__3.png')";
    bg.style.backgroundColor = "#9d8b84";
    text.innerHTML = "Пломбир с помадкой и клубничный щербет";
});



// Feedback
var linkFeedback = document.querySelector(".feedback");
var popupFeedback = document.querySelector(".modal-feedback");
var close = popupFeedback.querySelector(".modal-feedback__close");
var form = popupFeedback.querySelector(".modal-feedback__form");
var name = popupFeedback.querySelector("[name=modal-name]");
var email = popupFeedback.querySelector("[name=modal-email]");
var message = popupFeedback.querySelector("[name=modal-message]");
var storage = localStorage.getItem("name");

linkFeedback.addEventListener("click", function(event) {
    event.preventDefault();
    popupFeedback.classList.add("modal-feedback-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popupFeedback.classList.remove("modal-feedback-show");
    popupFeedback.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
    if(!name.value || !email.value || !message.value) {
        event.preventDefault();
        popupFeedback.classList.add("modal-error");
    } 
    else {
        localStorage.setItem("name", name.value);
    }
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {
        if(popupFeedback.classList.contains("modal-feedback-show")) {
            popupFeedback.classList.remove("modal-feedback-show");
            popupFeedback.classList.remove("modal-error");
        }
    }
});