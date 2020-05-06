$(document).ready(function() {
  //$('.page-header').html('Hello');
  $('#thisbutton').on('click', function() {
    $('.page-header').hide();
    $('#thisbutton').html('You killed them');
  });
});
