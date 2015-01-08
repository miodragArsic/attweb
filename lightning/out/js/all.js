function setFullHeight() {
    var whg = $(window).height()
    $('.section').css("min-height", whg + "px")
}

function updateNav() {
    var data = $('.section.shown').attr('data-scroll-target');
    $('.nav li').removeClass('active');
    $('.nav li[data-scroll-trigger= '+ data +']').addClass('active');
}

function sectionScrolling() {
    var speed = 800;
    var effect = 'easeInOutBack';
    updateNav();

    $('.section:visible').bind('mousewheel', function (e, delta) {
        if (delta < 0) {
            var $nextSection = $(this).next('.section')
            if ($nextSection.length === 0){
                return false
            }
            else {
                $('.section').removeClass('shown');
                $nextSection.addClass('shown');
                $('html, body').stop().animate({scrollTop: $nextSection.offset().top}, speed, effect);
                updateNav();

            }
        } else {
            var $prevSection = $(this).prev('.section')
            if ($prevSection.length === 0){
                return false
            }
            else{
                $('.section').removeClass('shown');
                $prevSection.addClass('shown');
                $('html, body').stop().animate({scrollTop: $prevSection.offset().top}, speed, effect);
                updateNav();
            }
        }
        e.preventDefault()
    });

    $(document).keyup(function(e) {
        var $this = $('.section.shown')
        if ((e.keyCode == 40)||(e.keyCode == 13)||(e.keyCode == 39)) {
            var $nextSection = $this.next('.section')
            if ($nextSection.length === 0){
                return false
            }
            else {
                $('.section').removeClass('shown');
                $nextSection.addClass('shown');
                $('html, body').stop().animate({scrollTop: $nextSection.offset().top}, speed, effect);
                updateNav();
            }
        }
        if ((e.keyCode == 38)||(e.keyCode == 37)) {
            var $prevSection = $this.prev('.section')
            if ($prevSection.length === 0){
                return false
            }
            else{
                $('.section').removeClass('shown');
                $prevSection.addClass('shown');
                $('html, body').stop().animate({scrollTop: $prevSection.offset().top}, speed, effect);
                updateNav();
            }
        }

        if (e.keyCode == 27) {
            var $firstSection = $('.section').first();

            $('.section').removeClass('shown');
            $firstSection.addClass('shown');
            $('html, body').stop().animate({scrollTop: $firstSection.offset().top}, speed, effect);
            updateNav();
        }
        e.preventDefault()
    });

    function scrollTrigger() {
        var $scrollTrigger = $('[data-scroll-trigger]')

        $scrollTrigger.click(function(e) {
            var $data = $(this).attr("data-scroll-trigger")
            var $goTo = $(document).find('[data-scroll-target= '+ $data +']')
            var $this = $('.section.shown');

            $('[data-scroll-trigger]').removeClass('active');
            $(this).addClass('active');

            $('.section').removeClass('shown');
            $goTo.addClass('shown');
            $('html, body').stop().animate({scrollTop: $goTo.offset().top}, speed, effect);
            updateNav();
            e.preventDefault()
        });
    }
    scrollTrigger();
}

///////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    setFullHeight();
    sectionScrolling();

    $('.content').mCustomScrollbar({
        scrollInertia:400,
        theme:"minimal-dark",
        mouseWheel:{ scrollAmount: 200},
        callbacks:{
            onTotalScroll: function(){
                $load.mCustomScrollbar("update");
            }
        }

    });
});

$(window).resize(function() {
    setFullHeight();
});



















