$(document).ready(function(){
    $('.mobile-menu span.bars').click(function(){
        $('ul.mobile-menu-ul').slideToggle();
    });

    $('.owl-carousel').owlCarousel({
		nav : true,
		responsive:{
			0:{
				items: 1
			},
			600:{
				items:1
			},
			1000:{
				items: 1
			}
		},
        dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		rewind: true,
		smartSpeed: 500,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
});