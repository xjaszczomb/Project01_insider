function currentWidth() {
    return $(window).width();
}
function validNavbarAddress() {
    return currentWidth()<992 ? "items/navbarMobile.html" : "items/navbarDesktop.html"
}

//navbar

const navbar = document.createElement("nav");
const counter = document.createElement("div");
counter.classList.add("page-counter","top","flex","w-100","h-100");

function getNavbar() {
    fetch(validNavbarAddress())
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            $("nav").empty();
            navbar.innerHTML=data;
            $(".main-page").prepend(navbar);
        });
}

$(window).resize(()=> getNavbar());
$(document).ready(()=> getNavbar());

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