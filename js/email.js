const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function currentWidth() {
    return $(window).width();
}
function validate() {
    let result;
    if(currentWidth()<992) result=$('.result').first();
    else result=$('.result').last();

    const email = $('.email-input').val();
    result.text('');
  
    if (validateEmail(email)) result.text(email + ' is valid :)');
    else result.text(email + ' is not valid :(');
}

let prevWidth = $(".newsletter-button").width();
let prevHeight = $(".newsletter-button").height();
$(".newsletter-button").click( ()=> {
    $(".newsletter-button").html('<div class="spin"><img class="h-100" src="icons/spin.svg"></div>');
    $(".newsletter-button").css("background-color","black");
    $(".spin").css({
        "width" : prevWidth,
        "height": prevHeight
    });
    validate();
})

console.log($('.result').last());