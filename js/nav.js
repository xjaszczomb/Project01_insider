function currentWidth() {
    return $(window).width();
}
function navClose() {
    const visible= $(".nav").attr("data-visible");
    if(visible==="true") {
        // $(".nav").removeClass("navbar-nav");
        $(".nav").attr("data-visible",false);
        $(".navbar").attr("aria-expanded",false);
        
        $(".nav-toggle").attr("data-visible",true);
        $(".nav-close").attr("data-visible",false);
    }
}
function navShow() {
    const visible= $(".nav").attr("data-visible");
    if(visible==="false") {
        // $(".nav").removeClass("navbar-nav");
        $(".nav").attr("data-visible",true);
        $(".navbar").attr("aria-expanded",true);
        
        $(".nav-toggle").attr("data-visible",false);
        $(".nav-close").attr("data-visible",true);
    }
}

$(".nav-close").click(()=> navClose());
$(".nav-toggle").click(()=> navShow());
$(window).resize(()=> navClose());