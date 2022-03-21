$(".nav-close").click(()=> {
    const visible= $(".nav").attr("data-visible");
    if(visible==="true") {
        // $(".nav").removeClass("navbar-nav");
        $(".nav").attr("data-visible",false);
        $(".navbar").attr("aria-expanded",false);
        
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

        $(".nav-toggle").attr("data-visible",false);
        $(".nav-close").attr("data-visible",true);

    }
});
