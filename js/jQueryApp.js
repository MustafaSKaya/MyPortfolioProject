$(document).ready(function(){
    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();
        if(scroll >= 50){
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    })

    let typed = new Typed (".element", {
        strings: ["Adam Adamson","A Full-Stack Web Developer","A Software Engineer","Your best employee candidate"],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed:100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    })
})