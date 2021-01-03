
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //medium zoom
    mediumZoom('.zoom', {
        margin : 50,
        scrollOffset : 200	    
    })

    mediumZoom('.zoom-dark', {
        background : '#000'
    })
    




    //slide-up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    //tooggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed1 = new Typed(".typing-1",{
        strings: ["Poom" ],
        typedSpeed: 180,
        backSpeed: 80,
        loop: true,
        
    });

    var typed2 = new Typed(".typing-2",{
        strings: ["Poom", ],
        typedSpeed: 180,
        backSpeed: 80,
        loop: true,
    });



    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,  
        autoplay:true,
        autoplaySpeed: 5000,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }

        }
    });
   
});

    