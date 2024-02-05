$(document).ready(function () {
	$(".carousel-top-deal-1").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	});

	var owl11 = $(".carousel-top-deal-1");
	owl11.owlCarousel();
	// Go to the next item
	$(".topdeal1NextBtn").click(function () {
		owl11.trigger("next.owl.carousel");
	});
	// Go to the previous item
	$(".topdeal1PrevBtn").click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl11.trigger("prev.owl.carousel", [300]);
	});
});
