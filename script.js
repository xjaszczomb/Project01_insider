$(document).ready(()=> $('#pabout').css("width",$('#habout').width()) );
$(window).resize(()=> $('#pabout').css("width",$('#habout').width()) );


const navbar = document.createElement("nav");
const counter = document.createElement("div");
counter.classList.add("page-counter","top","flex","w-100","h-100");

counter.innerHTML = "<div class='page-counter-holder flex'>"+
                        "<div class='page-nr' id='current'>1</div>"+
                        "<hr class='page-line'>"+
                        "<div class='page-nr' id='total'>4</div>"+
                    "</div>";
navbar.innerHTML ="<div class='navbar flex'>"+
                    "<div class='nav-toggle'>"+
                        "<img src='icons/menu.png' alt='menu'>"+
                    "</div>"+
                "</div>";
$(".main-page").prepend(navbar,counter);

