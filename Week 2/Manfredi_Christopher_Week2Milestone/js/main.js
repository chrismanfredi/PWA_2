/*  
	Your Project Title
	Author: You
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




