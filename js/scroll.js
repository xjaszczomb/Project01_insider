pages= $(".main-page");

function setPic(next) {
    pages.removeAttr("current");
    $(next).attr("current",'1');
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
                     setPic(currentPage().prev());
        } else { 
            if(currentPage()!=null) 
                 if(currentPage().next().length!=0) 
                     setPic(currentPage().next());
        }
    });
});