$(document).ready(function(){
	
    //////////////Pre-Load Items/////////////////
    
    $("#blocker").hide();
    
    // Highlight the menu item according to pathname in darkred (#820024)
    $('.header').ready(function() {

      var url = window.location.pathname;  
      if(url.indexOf("staff") > -1) {
        $('#staff a').css({'color':'#820024'});
      } else if (url.indexOf("home") > -1) {
        $('#home a').css({'color':'#820024'});
      } else if (url.indexOf("overview") > -1) {
        $('#overview a').css({'color':'#820024'});
      } else if (url.indexOf("services") > -1) {
        $('#services a').css({'color':'#820024'});
      } else if (url.indexOf("market") > -1) {
        $('#market a').css({'color':'#820024'});
      } else if (url.indexOf("clients") > -1) {
        $('#clients a').css({'color':'#820024'});
      } else if (url.indexOf("contact") > -1) {
        $('#contact a').css({'color':'#820024'});
      }
    
    });

    /* -- The code below will be replaced with PHP, then DELETED - Isaac Andrade

    $('.sideBar').load('../includes/sidebar.php');
    
    $('.header').load('../includes/header.php', function() {

      var url = window.location.pathname;  
      if(url.indexOf("staff") > -1) {
        $('#staff a').css({'color':'#820024'});
      } else if (url.indexOf("home") > -1) {
        $('#home a').css({'color':'#820024'});
      } else if (url.indexOf("overview") > -1) {
        $('#overview a').css({'color':'#820024'});
      } else if (url.indexOf("services") > -1) {
        $('#services a').css({'color':'#820024'});
      } else if (url.indexOf("market") > -1) {
        $('#market a').css({'color':'#820024'});
      } else if (url.indexOf("clients") > -1) {
        $('#clients a').css({'color':'#820024'});
      } else if (url.indexOf("contact") > -1) {
        $('#contact a').css({'color':'#820024'});
      }

    });
    

    $('.footer').load('../includes/footer.php', function(){
        $(window).scroll(function(){
          if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
          } else {
            $('#top').fadeOut();
          }
        });
        
        $('#top').click(function(){
          $('html, body').animate({scrollTop : 0},200);
          return false;
        });
    });

    */
	
	
    //////////////Responsive Items/////////////////
    
    $('#menuButton').click(function() {
        $('nav').slideToggle(300); 
    });
    
    
    ////////////////SubMenu Items///////////////////


    $(function(){
    // Keep a mapping of url-to-container for caching purposes.
      var cache = {
    // If url is '' (no fragment), display this div's content.
        '': $('.defaultContent')
      };
      $(window).bind( 'hashchange', function(e) {
        var url = $.param.fragment();
        $('.subMenuContainer li a').css({'color':'#303030'});
        //$('article').children(':visible').hide();		// this was hiding all the child elements
        url && $( 'a[href="#' + url + '"]' ).css({'color':'#820024'});
        if (cache[url]) {
          cache[url].show();
          // Quickfix - copy of last statement from the else block below. Not optimal - Isaac Andrade
          $('.staffBio').colorbox({rel:'gal', width: 800, height: '100%', current: "Staff {current} of {total}"});
        } else {
          $('#articleWrapper').hide();
          cache[ url ] = $('<div class="pageContent"/>')
            .appendTo( 'article' )
            .load( url, function(){
              $('#articleWrapper').fadeIn(400);
              $(".office").hoverIntent(
                function () {
                  $(this).find('.officeInfo').fadeIn(300);
                },
                function () {
                  $(this).find('.officeInfo').fadeOut(300);
                }
              );   
              $('.staffBio').colorbox({rel:'gal', width: 800, height: '100%', current: "Staff {current} of {total}"});
              //$('.clientVid').colorbox({iframe: true, rel:'gal', innerWidth:425, innerHeight: 344, current: "Video {current} of {total}"});
            });
          }
        })
      $(window).trigger('hashchange');
    });
      
	//SEO-friendly W3С valid replacement for target=”_blank”
	$('A[rel="_blank"]').each(function(){
		$(this).attr('target', '_blank');
	});

    //////////////Main///////////////// 
});