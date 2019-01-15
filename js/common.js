//Add, remove or change class of an element on click
$(function() {
	$(".main-head .toggle-mnu").click( function () {
		$(this).toggleClass("on");
		$(".main-head .main-mnu").slideToggle();
	});

	$(".footer .toggle-mnu").click( function () {
		$(this).toggleClass("on");
		$(".footer .main-mnu").slideToggle();
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


  //Click function
	$('.footer .main-mnu').click(function() {
		$('html body').animate( { scrollTop: $(document).height() }, "slow");
		return false;
	});

	$('.main-head .arrow-bottom').click(function() {
		$('html body').animate( { scrollTop: $('.main-head').height()+ 180 }, "slow");
		return false;
	});

	$('.arrow-top').click(function() {
		$('html body').animate( { scrollTop: 0 }, "slow");
		return false;
	});


//Equal heights of indicated box
$(".section-content .info-item").equalHeights();
$(".s8-item .img-wrap").equalHeights();

//Animation elements with library Animate-CSS
	$('.section-head h2, .section-head p').animated('fadeInRight');
	$('.info-item-wrap').animated('zoomIn');
	$('.slides').animated('rollIn');

// Animation 3 box on scroll to this section
$(".section_4").waypoint( function() {
	$(".section_4 .card-box").each(function(index) {
		var ths = $(this);
		setInterval(function () {
		ths.removeClass('off').addClass('card-box-on');
		}, 100*index);
	});
}, {
	offset: "10%"
});
$(".section_6").waypoint( function() {
	$(".section_6 .team").each(function(index) {
		var ths = $(this);
		setInterval(function () {
		ths.removeClass('off').addClass('card-box-on');
		}, 100*index);
	});
}, {
	offset: "10%"
});

$(".section_2").waypoint( function() {
	$(".s2_item").each(function(index) {
		var ths = $(this);
		setInterval(function () {
		ths.addClass('on');
		}, 300*index);
	});
}, {
	offset: "30%"
});


//Script to draw a picture on scrolling to that elements
$(".section_4 .section-bottom").waypoint( function() {
	$(".section_5 .triangle-item").each(function(index) {
		var ths = $(this);
		setTimeout(function () {
		var myAnimation = new DrawFillSVG ({
	           elementId: "triangle-svg-" + index
          });
		}, 500*index);
	});
	this.destroy();
});

//An adaptive slider, comments of clients
$(".slides").owlCarousel({
	items : 1,
	nav : true,
	navText: "",
	loop: true
}); 

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});