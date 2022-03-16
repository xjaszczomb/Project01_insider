$(".nav-close").click(()=> {
    const visible= $(".nav").attr("data-visible");
    if(visible==="true") {
        // $(".nav").removeClass("navbar-nav");
        $(".nav").attr("data-visible",false);
        $(".navbar").attr("aria-expanded",false);
        $(".header-aboutus-holder").css("margin-block-start","0");
        $(".header-holder").css("margin-block-start","0");
        
        $(".nav-toggle").attr("data-visible",true);
        $(".nav-close").attr("data-visible",false);
    }
});

$(".nav-toggle").click(()=> {
    const visible= $(".nav").attr("data-visible");
    if(visible==="false") {
        // $(".nav").addClass("navbar-nav");
        $(".nav").attr("data-visible",true);
        
        $(".navbar").attr("aria-expanded",true);
        $(".header-aboutus-holder").css("margin-block-start","6em");
        $(".header-holder").css("margin-block-start","6em");

        $(".nav-toggle").attr("data-visible",false);
        $(".nav-close").attr("data-visible",true);

    }
});
