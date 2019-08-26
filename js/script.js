console.log('my javascript is working');

$(document).ready(function(){
  // $('body').click(function(){
  //   // $(this).addclass('myclass');
  //   // $('h1').css('opacity','0.5').css('font-size','30px');
  //
  //   $('h1').css('background','yellow');
  //
  //
  // $('#heading').draggable();
  //
  // // $('#subHeading').droppable();
  //
  // $( function() {
  //   $( "#resizable" ).resizable();
  // });
  //
  // $( function() {
  //   $( "#selectable" ).selectable();
  // });
  //
  // $( function() {
  //   $( "#sortable" ).sortable();
  //   $( "#sortable" ).disableSelection();
  // });
  $('#onBulb').hide();
  $('#offSwitch').hide();
$('#onSwitch').click(function(){
  $('#onBulb').show();
  $('#offBulb').hide();
  $('#offSwitch').show();
  $(this).hide();

});
$('#offSwitch').click(function(){
  $('#offBulb').show();
  $('#onBulb').hide();
  $('#onSwitch').show();
  $(this).hide();
});
});
