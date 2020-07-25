$(function(){
        $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        startPosition: 3,
        dots: false,
        navText: ['<img src="assets/images/services/Arrow left.png" alt="">', '<img src="assets/images/services/Arrow right.png" alt="">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });    


    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});