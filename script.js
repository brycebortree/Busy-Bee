$(document).ready(function(){
console.log('locked/loaded');

  var roundCount = 0;

  // image array
  var images = [
    {desc: 'Feverfew', photo: 'images/n-feverfew.jpg'},
    {desc: 'Pitcher Plant', photo: 'images/n-pitcher-plant.jpg'},
    {desc: 'Wormwood', photo: 'images/n-wormwood.jpg'},
    {desc: 'Apple Tree', photo: 'images/y-apple.jpg'},
    {desc: 'Basil', photo: 'images/y-basil.jpg'},
    {desc: 'Cherry', photo: 'images/y-cherry.jpg'},
    {desc: 'Hyssop', photo: 'images/y-hyssop.jpg'},
    {desc: 'Lavendar', photo: 'images/y-lavendar.jpg'},
    {desc: 'Rosemary', photo: 'images/y-rosemary.jpg'},
    {desc: 'Snapdragon', photo: 'images/y-snapdragon.jpg'}];

  $('.fader').on('click', function(){
    $(this).parent().fadeOut();
  });

  //optional learn more page
  // $('#learn').on('click', function(){
  //   console.log('learn more');

  // });

  $('#startGame').on('click', function(){
    console.log("game started");
    GenerateBoard(2);
    //IF winner
    //else
    //GENERATE BOARD function while WINNER <7
    //DISPLAY WINNER function

  });


  // $('#images-row').hide();

// GENERATE BOARD function
// Stolen from 
var GenerateBoard = function(num){
  var opt1 = $('#opt1')
  roundCount++
  opt1.css({'background-image':'url('+images[num].photo+')'});
};



// //GENERATE BIG function
// var GenerateBig = function() {}

// //WINNER function
// var winner = function(){}

// //DISPLAY WINNER function (sweet alert?)
// //prompt GENERATE BIG function
// var displayWinner = function() {}

  });

