$(document).ready(function(){
  $(".owl-recall").owlCarousel({
  	items: 2,
  	nav: true,
  	navText: false,
    responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 2,
                }
            }
  });
  $(".owl-date1").owlCarousel({
  	items: 3,
  	nav: true,
  	navText: false,
        responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 2,
                }
            }
  });

$(".owl-date2").owlCarousel({
  	items: 3,
  	nav: true,
  	navText: false,
        responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,

                },
                1024: {
                    items: 2,
                    nav: true,

                }
            }
  });

});