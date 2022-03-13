// Toogle style switcher

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - swticher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme colors

const alternateStyles = document.querySelectorAll(".alternative-style");

function setActiveStyle(color){
    localStorage.setItem("color",color);
    changeColor();    
}

function changeColor() {
    alternateStyles.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

// checking if color key exists
if(localStorage.getItem("color") !== null){
    changeColor(); 
}

// Theme light and dark mode

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.add("fa-sun-o");
    dayNight.querySelector("i").classList.remove("fa-moon-o");
    document.body.classList.toggle("dark");
    
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun-o");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon-o");
    }
})


window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun-o");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon-o");
    }
})

