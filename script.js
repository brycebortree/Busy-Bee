$(document).ready(function(){
console.log('locked/loaded');

  var roundCount = 0;
  var dispImages = [];
  var score = 0;

  // image array
  var yImages = [ 
    {desc: 'Apple Tree', photo: 'images/y-apple.jpg'},
    {desc: 'Basil', photo: 'images/y-basil.jpg'},
    {desc: 'Cherry', photo: 'images/y-cherry.jpg'},
    {desc: 'Hyssop', photo: 'images/y-hyssop.jpg'},
    {desc: 'Lavendar', photo: 'images/y-lavendar.jpg'},
    {desc: 'Rosemary', photo: 'images/y-rosemary.jpg'},
    {desc: 'Snapdragon', photo: 'images/y-snapdragon.jpg'}];

  var nImages = [
    {desc: 'Feverfew', photo: 'images/n-feverfew.jpg'},
    {desc: 'Pitcher Plant', photo: 'images/n-pitcher-plant.jpg'},
    {desc: 'Wormwood', photo: 'images/n-wormwood.jpg'}];

  //push to new array

  $('.fader').on('click', function(){
    $(this).parent().fadeOut();
  });

  //optional learn more page that I want so bad :(
  // $('#learn').on('click', function(){
  //   console.log('learn more');
  // });

  $('#startGame').on('click', function(){
    console.log("game started");
    GenerateBoard(2);
    dispImages = [];
    //IF winner
    //else
    //GENERATE BOARD function while WINNER <7
    //DISPLAY WINNER function

  });



// GENERATE BOARD function
// Built myself -> hence every single console.log available to man
var GenerateBoard = function(num){
  var opt1 = $('#opt1');
  var opt2 = $('#opt2');
  var opt3 = $('#opt3')
  roundCount++;
  var shuffledY = shuffle(yImages);
  console.log(shuffledY);
  dispImages.push(shuffledY[0]);
  dispImages.push(shuffledY[1]);
  var shuffledN = shuffle(nImages);
  $(shuffledN[0]).addClass('beeDislike');$
  dispImages.push(shuffledN[0]);
  console.log(shuffledN);
  shuffle(dispImages);
  console.log(dispImages);
  opt1.css({'background-image':'url('+dispImages[0].photo+')'});
  opt2.css({'background-image':'url('+dispImages[1].photo+')'});
  opt3.css({'background-image':'url('+dispImages[2].photo+')'});
};

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

//WINNER function, stolen from Taylor's Know Your Planet
  $('.response').on('click', function(e){
      e.preventDefault();
      console.log('clicked image');
      if ($(this).hasClass("beeDislike")) {
      score++; 
        if (score >=7 ) {
          alert('you did it! Next round');
          play();

        }else{

          alert('Not quite!');
          }
        }


    });
  

// //GENERATE BIG function
// var GenerateBig = function() {}

// //DISPLAY WINNER function (sweet alert?)
// //prompt GENERATE BIG function
// var displayWinner = function() {}

  });

