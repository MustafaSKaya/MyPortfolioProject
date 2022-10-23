$(document).ready(function(){
    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();
        if(scroll >= 50){
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    let typed = new Typed (".element", {
        strings: ["Adam Adamson","A Full-Stack Web Developer","A Software Engineer","Your best employee candidate"],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed:100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    let waypoint = new Waypoint ({
        element: document.getElementById("experience-id"),
        handler: function () {
            let progressBars = document.querySelectorAll(".progress-bar");
            progressBars[0].setAttribute("style", "width:90%; transition: 1s all");
            $(".html-bar").html("90%")
            progressBars[1].setAttribute("style", "width:80%; transition: 1.4s all");
            $(".css-bar").html("80%")
            progressBars[2].setAttribute("style", "width:70%; transition: 1.8s all");
            $(".jQuery-bar").html("70%")
            progressBars[3].setAttribute("style", "width:85%; transition: 2.2s all");
            $(".js-bar").html("85%")
        },
        offset: "90%"
    });
})