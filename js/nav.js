$(".close-nav").click(()=> {
    const visible= $(".nav").attr("data-visible");
    if(visible==="false") {
        $(".nav").removeClass("navbar-nav");
        $(".nav").attr("data-visible",true);
    }
});

$(".nav-toggle").click(()=> {
    const visible= $(".nav").attr("data-visible");
    if(visible==="true") {
        $(".nav").addClass("navbar-nav");
        $(".nav").attr("data-visible",false);
    }
});