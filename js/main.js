;(function () {
	
	'use strict';

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	// Loading page
	var loaderPage = function() {
		$(".wedding-loader").fadeOut("slow");
	};

	var goToTop2 = function() {

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top2').addClass('active');
			} else {
				$('.js-top2').removeClass('active');
			}

		});
	
	};

	$(function(){
		contentWayPoint();
		testimonialCarousel();
		goToTop();
		loaderPage();
		goToTop2();


		var sections = $('section')
            , nav = $('nav')
            , nav_height = nav.outerHeight();

            $(window).on('scroll', function () {
                var cur_pos = $(this).scrollTop();
  
            sections.each(function() {
                var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
    
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
      
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
            });
            });
            
            nav.find('a').on('click', function () {
              var $el = $(this)
                , id = $el.attr('href');
              
              $('html, body').animate({
                scrollTop: $(id).offset().top - nav_height
              }, 500);
              
              return false;
            });
	});


}());