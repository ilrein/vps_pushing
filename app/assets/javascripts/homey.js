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

  var home_tl = new TimelineLite;
  home_tl.stop();
  
  var redhover = $('.red-hover');
  home_tl.add(TweenLite.to(redhover, 0.4, { 
    color: "red"
  }));

  
  $('.red-hover').on('mouseenter', function(){
    home_tl.play();
  });


  $('.red-hover').on('mouseleave', function(){
    home_tl.reverse();
  });

};

$(document).ready(ready);
$(document).on('page:load', ready);
