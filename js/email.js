const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function currentWidth() {
    return $(window).width();
}
function validate() {
    let result, success;
    if(currentWidth() < 992) result = $('.result').first();
    else result = $('.result').last();

    const email = $('.email-input').val();
    result.text('');
  
    if (validateEmail(email)) {
        result.text('is valid :)');
        success = true;
    }
    else {
        result.text('is not valid :(');
        success = false;
    }
    return success;
}

let prevWidth = $(".newsletter-button").width();
let prevHeight = $(".newsletter-button").height();
$(".newsletter-button").click( ()=> {
    $(".newsletter-button").html('<div class="spin"><img class="h-100" src="icons/spin.svg"></div>').css("background-color","black");
    $(".spin").css({
        "width" : prevWidth,
        "height": prevHeight
    });
    if(validate()) {
        let result=$('.result').last();
        result.removeClass("bottom").slideUp().css("text-align","right");
        setTimeout(()=> {
            $('.email-input').slideUp();
            $('.email-text').css("color","transparent");
            $('.email-shadow').slideUp();
        }, 1000)
        setTimeout(()=> {
            result.slideDown();
            $(".spin").children().attr("src","icons/check.svg").css({
                "animation" : "none",
                "width" : "40%"
            });
        }, 2000)

    }
})

console.log($(".spin").children());