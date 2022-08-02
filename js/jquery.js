$(document).ready(function() {
    // hover
    $("#kadoPertama").mouseenter(function(){
        $(this).fadeOut(250, function() {
            $(this).fadeIn(250)
            $(this).attr("src", "./img/kado-hover.png")
        })
    })
    
    $("#kadoPertama").mouseleave(function(){
        $(this).fadeOut(250, function() {
            $(this).fadeIn(250)
            $(this).attr("src", "./img/kado.png")
        })
    })

    $("#kadoKedua").mouseenter(function(){
        $(this).fadeOut(250, function() {
            $(this).fadeIn(250)
            $(this).attr("src", "./img/kado-hover.png")
        })
    })
    
    $("#kadoKedua").mouseleave(function(){
        $(this).fadeOut(250, function() {
            $(this).fadeIn(250)
            $(this).attr("src", "./img/kado.png")
        })
    })

    $("#kadoKetiga").mouseenter(function(){
        $(this).fadeOut(250, function() {
            $(this).fadeIn(250)
            $(this).attr("src", "./img/kado-hover.png")
        })
    })
    
    $("#kadoKetiga").mouseleave(function(){
        $(this).fadeOut(250, function() {
            $(this).fadeIn(250)
            $(this).attr("src", "./img/kado.png")
        })
    })


    // click
    $("#kadoPertama").click(function() {
        $(".hadiahPertama").fadeToggle(300)
        $(".giftWrapper").css({
            "pointer-events": "none"
        })
        $(".background").fadeTo(500, 0.5)
    })

    $("#kadoKedua").click(function() {
        $(".hadiahKedua").fadeToggle(300)
        $(".giftWrapper").css({
            "pointer-events": "none"
        })
        $(".background").fadeTo(500, 0.5)

    })

    $("#kadoKetiga").click(function() {
        $(".hadiahKetiga").fadeToggle(100)
        $(".giftWrapper").css({
            "pointer-events": "none"
        })
        $(".background").fadeTo(300, 0.5)

    })

    $(".close").click(function() {
        $(".hadiahKedua").fadeOut(300)
        $(".hadiahPertama").fadeOut(300)
        $(".giftWrapper").css({
            "pointer-events": "auto"
        })
        $(".background").fadeOut(500)
    })

    $(".close2").click(function() {
        $(".hadiahKetiga").fadeOut(300)
        $(".giftWrapper").css({
            "pointer-events": "auto"
        })
        $(".background").fadeOut(500)
        $("section").load("/html/surat.html")
    })


    // hover 2
    $("#surat").mouseenter(function() {
        $(this).fadeOut(100, function() {
            $(this).fadeIn(100)
            $(this).attr("src", "../img/surat-hover.png")
        })
    })

    $("#surat").mouseleave(function() {
        $(this).fadeOut(100, function() {
            $(this).fadeIn(100)
            $(this).attr("src", "../img/surat.png")
            $(".isiSuratWrapper").fadeOut(100, function() {
                $(this).css({
                    "transform": "rotate(-20deg)"
                })
            })
        })
    })


    // click
    $("#surat").click(function() {
        $(".isiSuratWrapper").css({
            "transform": "rotate(0deg)"
        })
        $(".isiSuratWrapper").slideToggle()
        bukaSurat.play()
    })
})
