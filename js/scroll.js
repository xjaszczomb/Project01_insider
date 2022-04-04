pages= $(".main-page");
pages.addClass("none");
pages.first().removeClass("none");

function setPage(next) {
    pages.removeAttr("current").addClass("none");
    $(next).attr("current",'1').removeClass("none");
    $(next).prev().removeClass("none").css("top","auto");
};
function currentPage() {
    let current = null;
    pages.each(function() {
        if($(this).attr('current')=='1') 
            current = $(this);
    });
    return current;
}
// $(document).ready(function(){
//     $(window).bind('mousewheel', function(e){
//         if(e.originalEvent.wheelDelta /120 > 0) {
//             if(currentPage()!=null) 
//                  if(currentPage().prev().length!=0) 
//                      setPage(currentPage().prev());
//         } else { 
//             if(currentPage()!=null) 
//                  if(currentPage().next().length!=0) 
//                      setPage(currentPage().next());
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const dragElement = document.getElementById('main');
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        dragElement.style.cursor = 'grabbing';

        pos = {
            left: dragElement.scrollLeft,
            top: dragElement.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        currentPage().next().removeClass("none");
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

    };

    const mouseMoveHandler = function (e) {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        dragElement.scrollTop = pos.top - dy;
        dragElement.scrollLeft = pos.left - dx;
        currentPage().next().css("top",-dragElement.scrollTop);

        console.log(dragElement.scrollTop);
    };

    const mouseUpHandler = function () {
        dragElement.style.cursor = 'auto';

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        
        if(dragElement.scrollTop>40){
            currentPage().next().css("top",-currentPage().height()+dragElement.scrollTop);
            if(currentPage()!=null) {
                if(currentPage().next().length!=0) 
                        setPage(currentPage().next());
            }
            currentPage().css("height","100vh");
            setTimeout(()=> {
                currentPage().prev().addClass("none");
                currentPage().css("top", "auto");
            },1000)
        } else currentPage().next().css("top", "auto").addClass("none");
    } 
        
    dragElement.addEventListener('mousedown', mouseDownHandler);
});