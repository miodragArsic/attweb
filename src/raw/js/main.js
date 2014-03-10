$('#cta').hide().fadeIn(2500);

$('#ctaButton').click( function() {
	$("html, body").animate({ scrollTop: $('#workshopRegisterForm').offset().top - 110 }, 1000);
});

$('#workshopDetailsLink').click( function() {
	$("html, body").animate({ scrollTop: $('#workshopDetails').offset().top - 30 }, 1000);
});

$('#welcomelogo').click( function() {
	$("html, body").animate({ scrollTop: $('#solutions').offset().top - 20 }, 1000);
});

$(document).ready(function() {
    var offset = 220;
    var duration = 1000;
    
  /*  $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });*/
    
//    ($(window).height() - $("#footer").height()) > $(this).scrollTop()

    $(window).scroll(function() {
        if ($(this).scrollTop() > ($(document).height() - $(window).height() - $("#footer").height()) || $("#headerwrap").height() > $(this).scrollTop()) {
            $('.back-to-top').fadeOut(duration);
        } else {
            $('.back-to-top').fadeIn(duration);
        }
    });
    
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        console.log("click");
        $('html, body').animate({scrollTop: $(document).scrollTop() + 100}, duration);
        return false;
    })
});

$('div.registration').block(
		{
			message: '	<div class="row mt centered"><img src="/images/coming-soon.png" style width="140" height="140" alt="Coming soon"/><br><h3>Hold your horses!</h3><h4> We&#39;re not quite ready, leave your email and we&#39;ll keep you posted.</h4><form class="form-inline" role="form"><div class="form-group"><input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email address"></div> <button type="submit" class="btn btn-primary btn-lg">Get notified!</button></form>	',
			css: { 	width:      '80%',
					left:       'auto',
					right:      'auto',
					textAlign:  'center',
					color:      '#000',
					border:     '0px solid #aaa',
					backgroundColor:'transparent',
					cursor:     'default'
				},
				
			// styles for the overlay
			overlayCSS:  {
					backgroundColor:	'#1B475A',
					opacity:			0.9,
					cursor:				'default'
				},
		});