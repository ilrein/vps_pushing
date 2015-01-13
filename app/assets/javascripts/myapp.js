var ready;
ready = function() {

  $('.tlttop').textillate({
   in: { 
    delay: 1.3,
    effect: 'bounceIn'
  }});

  $('.tltleft').textillate({
   in: { 
    delay: 1.3,
    effect: 'fadeInLeftBig'
  }});

  var fademe2 = $('.fademein2');

  TweenLite.set(fademe2, {autoAlpha: 0});
  TweenLite.to(fademe2, 1.2, {autoAlpha:1}).delay(2);

  var fademe3 = $('.fademein3');

  TweenLite.set(fademe3, {autoAlpha: 0});
  TweenLite.to(fademe3, 1.2, {autoAlpha:1}).delay(3);

  var tl = new TimelineLite;
  var gasmask = $('#gasmask');
  tl.add(TweenLite.to(gasmask, 0.4, { 
    boxShadow: "5px 5px 2.5px 0px rgba(0,0,0,0.75)",
    ease: Linear.easeNone
  }));


  $('#gasmask').on('mouseenter', function(){
   tl.play(); 
  });

  $('#gasmask').on('mouseleave', function(){
    tl.reverse();
  });

};


$(document).ready(ready);
$(document).on('page:load', ready);
