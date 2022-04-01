function currentWidth() {
    return $(window).width();
}
function successButton() {
    setTimeout(()=> {
        currentMessagePlace().slideDown();
        $(".spin").children().attr("src","icons/check.svg").css({
            "animation" : "none",
            "width" : "40%"
        });
        
    }, 2000)
    console.log("?");
}
function currentMessagePlace() {
    return currentWidth() < 992 ? $('.result').first() : $('.result').last();
}
function animationDesktop(status){
    if(status) {
        currentMessagePlace().removeClass("bottom").slideUp().css("text-align","right");
        setTimeout(()=> {
            $('.email-input').slideUp();
            $('.email-shadow').slideUp();
            $('.email-text').css("color","transparent");
            currentMessagePlace().addClass("w-100").css("margin-block-end","0");
        }, 1000);
        successButton();
        console.log("????");
    } else {
        $('.result').first().text(resultFirstText);
        setTimeout(()=> {
            $(".newsletter-button").html("send").css("background-color","var(--greenhaze)");
        }, 2000)
        console.log("???");
    }
   
}
function animationMobile(status) {
    if(status) {
        $('.email-input').slideDown();
        $('.email-shadow').slideDown();
        $('.email-text').css("color","white");
        currentMessagePlace().removeClass("w-100").css("margin-block-end","0.5em");
        successButton();
    }
    else {
        $('.result').last().text("");
        setTimeout(()=> {
            $(".newsletter-button").html("send").css("background-color","var(--greenhaze)");
        }, 2000)
    }
}
function currentAnimation(status) {
    return currentWidth() < 992 ? animationMobile(status) : animationDesktop(status);
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function validate(email) {
    let success;
    currentMessagePlace().text('');
    
    if (validateEmail(email)) {
        success = true;
        setTimeout(()=> {
            currentMessagePlace().text('Thank you for joining our newsletter! :)');
        },2000)
    }
    else {
        setTimeout(()=> {
            currentMessagePlace().text('Email is not valid, please try again.');
        },2000)
        success = false;
    }
    return success;
}

const initSpin ='<div class="spin"><img class="h-100" src="icons/spin.svg"></div>';
let prevWidth = $(".newsletter-button").width();
let prevHeight = $(".newsletter-button").height();
let resultFirstText = $('.result').first().text();
$(".newsletter-button").click( ()=> {
    const email = $('.email-input').val();
    $(".newsletter-button").html(initSpin).css("background-color", "black");
    $(".spin").css({
        "width" : prevWidth,
        "height": prevHeight
    });
    currentAnimation(validate(email));
    $(window).resize(()=> currentAnimation(validate(email)));
})

