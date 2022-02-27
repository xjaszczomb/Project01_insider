function widthChange() {
    $('#pabout').css("width",$('#habout').width());
}

$(document).ready(()=> $('#pabout').css("width",$('#habout').width()) );
$(window).resize(()=> $('#pabout').css("width",$('#habout').width()) );