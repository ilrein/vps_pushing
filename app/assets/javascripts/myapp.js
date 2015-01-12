var ready;
ready = function() {

  $('#header').sidebar({
    exclusive: false,
    closeable: false,
    dimPage: false
  }).sidebar('show');

};


$(document).ready(ready);
$(document).on('page:load', ready);
