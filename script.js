function currentWidth() {
    return $(window).width();
}

//navbar

const navbar = document.createElement("nav");
const counter = document.createElement("div");
counter.classList.add("page-counter","top","flex","w-100","h-100");

fetch("items/navbar.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        $("nav").empty();
        navbar.innerHTML=data;
        $(".main-page").prepend(navbar);
    });

//counter

fetch("items/counter.html")
    .then((response) => {
        return response.text();
     })
    .then((data) => {
        counter.innerHTML=data;
        $(".main-page").prepend(counter);
    });

//newsletter class adding/removing (resize)
    
$(document).ready(()=> { currentWidth()<992 ? $("#emailboxoverflow").removeClass("email-box-overflow") : $("#emailboxoverflow").addClass("email-box-overflow");});
$(window).resize(()=> { currentWidth()<992 ? $("#emailboxoverflow").removeClass("email-box-overflow") : $("#emailboxoverflow").addClass("email-box-overflow");});

// dynamic width of p (about)
$(document).ready(()=> $('#pabout').css("width",$('#habout').width()) );
$(window).resize(()=> $('#pabout').css("width",$('#habout').width()) );
$(document).scroll(()=> $('#pabout').css("width",$('#habout').width()) );