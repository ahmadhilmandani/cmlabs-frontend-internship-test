$(document).ready(function () {

  $("#hamburger-icon").click(function () {
    $("#hamburger-menu").show().animate({ display: 'block', left: '0' });
    console.log('s')
  });

  $("#close-icon").click(function () {
    $("#hamburger-menu").animate({ left: '100%' });
  });

});