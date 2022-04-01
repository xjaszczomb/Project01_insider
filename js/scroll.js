pages= $(".main-page");

function setPage(next) {
    pages.removeAttr("current").removeClass("top").addClass("none");
    $(next).attr("current",'1').addClass("top").removeClass("none");
};
function currentPage() {
    let current = null;
    pages.each(function() {
        if($(this).attr('current')=='1') 
            current = $(this);
    });
    return current;
}
$(document).ready(function(){
    $(window).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            if(currentPage()!=null) 
                 if(currentPage().prev().length!=0) 
                     setPage(currentPage().prev());
        } else { 
            if(currentPage()!=null) 
                 if(currentPage().next().length!=0) 
                     setPage(currentPage().next());
        }
    });
});