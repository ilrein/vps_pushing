var ready;
ready = function() {

  $('.tlt').textillate({
   in: { 
    delay: 1.3,
    effect: 'fadeInLeftBig'
  }});

  $('i.facebook').on('click', function(){

  });

  var fademe = $('.fademein');

  TweenLite.set(fademe, {autoAlpha: 0});
  TweenLite.to(fademe, 1.2, {autoAlpha:1}).delay(2);

};


$(document).ready(ready);
$(document).on('page:load', ready);
