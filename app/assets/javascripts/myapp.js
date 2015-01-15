var ready;
ready = function() {

  // modal for imgs

  // $('#gasmask').on('click', function(){
  //   $('#gasmask').modal('show');
  // });

  

  function showGasMask() {
    var gasmask = $('#gasmask');
    gasmask.on('click', function(){
      console.log('hmm');  
    })  
  }

  $('.modallic').modal();

  $('.modallic').modal('attach events', '#gasmask');

  // $('#gasmask').on('blur', function(){
  //   $('#gasmask').modal('hide');
  // });

  // bot-bar

  $('.demo').sidebar();

  // $('#bot-bar').sidebar({
  //   closeable: false
  // });  


  // txtlate fxs

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

  // fade in effects

  var fademe2 = $('.fademein2');

  TweenLite.set(fademe2, {autoAlpha: 0});
  TweenLite.to(fademe2, 1.2, {autoAlpha:1}).delay(2);

  var fademe3 = $('.fademein3');

  TweenLite.set(fademe3, {autoAlpha: 0});
  TweenLite.to(fademe3, 1.2, {autoAlpha:1}).delay(3);

  // box shadow hover

  var tl = new TimelineLite;
  tl.stop();
  var gasmask = $('#gasmask');
  tl.add(TweenLite.to(gasmask, 0.4, { 
    boxShadow: "2.5px 2.5px 1.25px 0px rgba(0,0,0,0.75)"
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
