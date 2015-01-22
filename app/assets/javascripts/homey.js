var ready;
ready = function() {

  $('.tlt').textillate({
   initialDelay: 1,
   in: { 
    delay: 1.3,
    effect: 'bounceIn'
  }});

  $('.pulse-hover').on('mouseenter', function(){
    $(this).transition("pulse");
  });


};

$(document).ready(ready);
$(document).on('page:load', ready);
