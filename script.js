$(document).ready(function(){
console.log('locked/loaded');

  var roundCount = 0;
  var dispImages = [];
  var score = 0;

  // image arrays
  var yImages = [ 
    {desc: 'Apple Tree', photo: 'images/y-apple.jpg', beeLike: true},
    {desc: 'Basil', photo: 'images/y-basil.jpg', beeLike: true},
    {desc: 'Cherry', photo: 'images/y-cherry.jpg', beeLike: true},
    {desc: 'Hyssop', photo: 'images/y-hyssop.jpg', beeLike: true},
    {desc: 'Lavendar', photo: 'images/y-lavendar.jpg', beeLike: true},
    {desc: 'Rosemary', photo: 'images/y-rosemary.jpg', beeLike: true},
    {desc: 'Snapdragon', photo: 'images/y-snapdragon.jpg', beeLike: true}];

  var nImages = [
    {desc: 'Feverfew', photo: 'images/n-feverfew.jpg', beeLike: false},
    {desc: 'Pitcher Plant', photo: 'images/n-pitcher-plant.jpg', beeLike: false},
    {desc: 'Wormwood', photo: 'images/n-wormwood.png', beeLike: false}];

  $('.fader').on('click', function(){
    $(this).parent().fadeOut();
  });


  $('#startGame').on('click', function(){
    console.log("game started");
    GenerateBoard();
    dispImages = [];
    //GENERATE BOARD function while WINNER <7
  });

// GENERATE BOARD function
// Built myself -> hence every single console.log available to man
var GenerateBoard = function(num){
  var opt1 = $('#opt1');
  var opt2 = $('#opt2');
  var opt3 = $('#opt3');
  roundCount++;
  var shuffledY = shuffle(yImages);
  console.log(shuffledY);
  dispImages.push(shuffledY[0]);
  dispImages.push(shuffledY[1]);
  var shuffledN = shuffle(nImages);
  dispImages.push(shuffledN[0]);
  console.log(shuffledN);
  shuffle(dispImages);
  console.log(dispImages);
  opt1.css({'background-image':'url('+dispImages[0].photo+')'});
  opt1.removeClass('true false').addClass(''+dispImages[0].beeLike+'');
  opt2.css({'background-image':'url('+dispImages[1].photo+')'});
  opt2.removeClass('true false').addClass(''+dispImages[1].beeLike+'');
  opt3.css({'background-image':'url('+dispImages[2].photo+')'});
  opt3.removeClass('true false').addClass(''+dispImages[2].beeLike+'');

};
// .addClass dispImage[0].beeLike

//per Auggie, Fisher-Yates shuffle function
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

//points function b/c this is hard

    //IF winner
    //DISPLAY WINNER function
    //else
//Score function, stolen from Taylor's Know Your Planet
  $('.response').on('click', function(e){
      e.preventDefault();
      console.log('clicked image');
      if ($(this).hasClass('false')){
      console.log('clicked correct image');
      score++;
      winner();
      dispImages = [];
      GenerateBoard();
        } 
        else {
          alert('Not quite!');
          dispImages = [];
          GenerateBoard();
          }
        });


  //separate winner function
  var winner = function(){
if (score >=7 ) {
        alert('You win!');
  } else {
    return;
  }

}

//optional learn more page that I want so bad :( tbc
// $('#learn').on('click', function(){
//   console.log('learn more');
// });

// //GENERATE BIG function
// var GenerateBig = function() {}

// //DISPLAY WINNER function (sweet alert?)
// //prompt GENERATE BIG function
// var displayWinner = function() {}

  });

