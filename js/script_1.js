$(document).ready(function(){
    scrollAction();
      
    // ë©”ì¸ ìƒë‹¨ ì¸íŠ¸ë¡œ ì˜ì—­ ë†’ì´ê°’ ì ìš©
    /*
    $(window).on('resize', function(){
        
      if($(window).height() > 1020) {
        $('.main_intro').css({'height':$(window).height()-92 +'px'});
      }
      
    });
    */
    
    // ë ˆì´ì–´ ìƒí•˜ ì¤‘ì•™ì •ë ¬ ë§ˆì§„ê°’ ì ìš©
    $('.popup_layer').each(function(){
      $(this).css({'margin-top':'-'+ $(this).height()/2 +'px'});
    });
  
    // ì»¨í…ì¸  ìŠ¤í¬ë¡¤ ì´ë²¤íŠ¸
    function scrollAction(){
      $('[class*=obj]').each(function(){
        if($(this).hasClass('movie_link')){
            var scrollDelay = 20;
        }else{
            var scrollDelay = 200;
        }
        if($(this).offset().top+scrollDelay < $(window).scrollTop()+$(window).height()){
          if(!$(this).hasClass('scroll_on')){
              $(this).addClass('scroll_on')
          }
        }
        if($(this).offset().top+$(this).height() < $(window).scrollTop()){
          $(this).removeClass('scroll_on');
        }
        if($(this).offset().top > $(window).scrollTop()+$(window).height()){
          $(this).removeClass('scroll_on');
        }
      });
    }
    $(window).scroll(function(){
      scrollAction();
    })
    
    
    // íŒì—…ë‹«ê¸°
    $('.popup_layer .btn_close').on('click',function(){
      $('.dimmed_layer').css('display','none');
      $('.popup_layer').css('display','none');
    });
    
    $('.k_headbnr .right_back_bnr').on('click',function(){
        var d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "_eventDisplay=none;" + expires + ";path=/";
        location.href = location.href;
    });
    
    if( typeof eventRemainTime != 'undefined') { 
        $.getScript("../akamai-webcdn.kgstatic.net/renewal/static/js/jquery.countdown29dbc.js?v=201810031533", function() {
            $(document).ready(function(){
                  $(function(){
                      var	ts = eventRemainTime;
                      $('#countdown').countdown_sub({
                          timestamp	: ts
                      });			
                  });
              });
            
          });
    }
    
    
    $('#headbnr area').on('mouseover', function() {
            $('.alone_bnr .headbnr').addClass('off');
          var areaname = $(this).data('areaname');
          $('.alone_bnr .' + areaname).addClass('on');
    });
    
    
    $('#headbnr area').on('mouseout', function() {
          var areaname = $(this).data('areaname');
          $('.alone_bnr .' + areaname).removeClass('on');
          $('.alone_bnr .headbnr').removeClass('off');
    });
    
    $('#link_console').on('click', function(){
        var locale = $(this).data('locale');
        if(typeof ga == 'function'){
            ga('send', 'event', 'page_console', 'header_link' , locale);
        }
        window.open("https://www.xbox.playblackdesert.com/");
    });
    
  /*  $('#link_console_bnr').on('click', function(){
        var locale = $(this).data('locale');
        if(typeof ga == 'function'){
            ga('send', 'event', 'page_console', 'banner_link' , locale);
        }
        window.open("https://www.xbox.playblackdesert.com/");
    });*/
  
      $('.btn_ga_event').on('click', function(e) {
          if(typeof ga == 'function') {
              let cateogry = $(this).data('category') || 'button';
              let action = $(this).data('action') || 'click';
              ga('send', 'event', cateogry, action, $(this).data('label'), $(this).data('value'));
          }
      })
    
    
  });
  
  
  
  
  
  