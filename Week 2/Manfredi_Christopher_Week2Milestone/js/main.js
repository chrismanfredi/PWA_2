/*  
	Infinite Technology
	Author: Chris Manfredi
*/



$(document).ready(function(){	
	
	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
	
	
//	var checkLoginState = function(){
//		$.ajax({
//			url: 'xhr/check_login.php',
//			type: 'get',
//			dataType: 'json',
//			success: function(response){
//				// if user, loadApp()
//				// if error, loadLanding()
//			}
//		});
//	};
//    
//    $(function() {
//    // setup ul.tabs to work as tabs for each div directly under div.panes
//    $("ul.tabs").tabs("div.panes > div");
//});
    

    	/*
	===============================================
	========================= Accordion 
	*/

    $('ul.tabs').each(function(){


        var $active, $content, $links = $(this).find('a');
                                          
        $active = $($links.filter('[href="'+location.hash+'"]')[0] ||
            $links[0]);
        $active.addClass('active');
        
        $content = $($active[0].hash);
        
        $links.not($active).each(function () {
            $(this.hash).hide();
        });
        
        $(this).on('click', 'a', function(e){
                            console.log('run');

            $active.removeClass('active');
            $content.hide();
            
        $active = $(this);
        $content = $(this.hash);
            
        $active.addClass('active');
        $content.show();
            
        e.preventDefault();
            
    });
});
        
    
    /*
	===============================================
	======================================== Tool Tip	
	*/
    
    $('.mastertooltip').hover(function(){
        var title = $(this).attr('title');
        $(this).data('tiptext', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
    }, function() {
        $(this).attr('title', $(this).data('tiptext'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 20;
        var mousey = e.pageY + 10;
        $('.tooltip')
        .css({ top: mousey, left: mousex })
    });
        
    
    
      /*
	===============================================
	======================================== Projects Accordion	
	*/
    
    (function($) {
    
  var allPanels = $('.projectsaccordion > dd').hide();
    
  $('.projectsaccordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})(jQuery);
    
    
     /*
	===============================================
	======================================== Add Modal	
	*/
    
   $('.modalClick').on('click', function(event) {
       event.preventDefault();
       $('#overlay')
            .fadeIn()
            .find('#modal')
            .fadeIn()
   });
    
    $('.close').on('click', function(event) {
        event.preventDefault();
        $('#overlay')
        .fadeOut()
        .find('#modal')
        .fadeOut();
    });
    
    
	
	

	// 	============================================
	//	SETUP FOR INIT
		
//	var init = function(){
//	
//		checkLoginState();
//	};
//	
//	
//	init();
//	
		
	/*
	===============================================
	======================================== EVENTS	
	*/
	
	
	/*	
	==================================== END EVENTS 
	===============================================
	*/
		
		

	
}); // end private scope




