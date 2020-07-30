

(function() {  
    'use strict';
  
    var behavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
      onKeyPress: function (val, e, field, options) {
          field.mask(behavior.apply({}, arguments), options);
      }
    };
    $('.phone').mask(behavior, options);
    $('.date').mask('00/00/0000');
})(); 


    
  
(function() {
    'use strict'; 
    var morePosts = document.querySelectorAll('.mobile-attack .getbox');  
    var ArrowClick = document.querySelector('.box-arrow-mobile .arrow');   
    ArrowClick.addEventListener('click', removeClass);

    function removeClass(e) {  
        e.preventDefault();  
        for(var i = 0; i < morePosts.length; i++) {
            morePosts[i].classList.toggle('box-hidden');       
        }
    }
})();  
  


$('.owl-carousel').owlCarousel({
    margin: 30,
    loop:true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1366:{
            items:3 
        }
    }
})



