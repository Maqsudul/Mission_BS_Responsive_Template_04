jQuery(document).ready(function(){
     
    
    $(window).scroll(function(){
       var top = $(window).scrollTop();
        if(top>=50){
          $("nav").addClass('secondary'); 
        }
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');  
            }
    }); 

});

    $(function () {
        $('.percent').percentageLoader({
          valElement: 'p',
          strokeWidth: 4,
          bgColor: '#c1c1c1',
          ringColor: '#ff5722',
          textColor: '#ffffff',
          fontSize: '30px',
          fontWeight: 'bold',
        });
/* jQuery Isotope */ 
 var $grid = $('.grids').isotope({
         itemSelector: '.grid-items',
         masonry: {
         // use outer width of grid-sizer for columnWidth
         columnWidth: 10,
      }
   }); 
      $('.grid-menu').on( 'click', 'li', function() {
         var filterValue = $(this).attr('data-filter');
         $grid.isotope({ filter: filterValue });
   });
      $('.grid-menu').on( 'click', 'li', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

/* jQuery Isotope */      
});

    var map = new GMaps({
      el: '#ma',
      lat: 23.762173,
      lng: 90.436313
});
        





    
          




