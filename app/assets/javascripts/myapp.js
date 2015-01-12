var ready;
ready = function() {

  $('.tlt').textillate({
   in: { 
    delay: 1.3,
    effect: 'fadeInLeftBig',
    callback: tlt2()
  }
});
  function tlt2() {
    $('.tlt2').textillate({
     in: { 
      delay: 1.8,
      effect: 'bounceIn'
    }
  }); 
  }

  $('i.facebook').on('click', function(){

  });  

};


$(document).ready(ready);
$(document).on('page:load', ready);
