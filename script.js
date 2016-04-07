$(document).ready(function(){
console.log('locked/loaded');

  var roundCount = 0;
  var dispImages = [];
  var score1 = 0;
  var score2 = 0;



  // image arrays
  var blImages = [ 
    {desc: 'Apple Tree', photo: 'images/y-apple.jpg', correct: false},
    {desc: 'Basil', photo: 'images/y-basil.jpg', correct: false},
    {desc: 'Black Eyed Susans', photo: 'images/y-blackeyed-susans.jpg', correct: false},
    {desc: 'Cherry', photo: 'images/y-cherry.jpg',correct: false},
    {desc: 'Clematis', photo: 'images/y-clematis.jpg', correct: false},
    {desc: 'Dahlias', photo: 'images/y-dahlias.jpg', correct: false},
    {desc: 'Foxglove', photo: 'images/y-foxglove.jpg', correct: false},
    {desc: 'Hollyhocks', photo: 'images/y-hollyhocks.jpg', correct: false},
    {desc: 'Honeysuckle', photo: 'images/y-honeysuckle.jpg', correct: false},
    {desc: 'Hyacinth', photo: 'images/y-hyacinth.jpg', correct: false},
    {desc: 'Hyssop', photo: 'images/y-hyssop.jpg', correct: false},
    {desc: 'Lavendar', photo: 'images/y-lavendar.jpg', correct: false},
    {desc: 'Lilac', photo: 'images/y-lilac.jpg', correct: false},
    {desc: 'Rosemary', photo: 'images/y-rosemary.jpg', correct: false},
    {desc: 'Snapdragon', photo: 'images/y-snapdragon.jpg', correct: false},
    {desc: 'Snapdragon', photo: 'images/y-snapdragons.jpg', correct: false}];

  var bcImages = [ 
    {desc: 'Benedict Cumberbatch', photo: 'images/y-apple.jpg', correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/y-basil.jpg', correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/y-blackeyed-susans.jpg', correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/y-cherry.jpg',correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/y-clematis.jpg', correct: true}];

  var yImages = [ 
    {desc: 'Apple Tree', photo: 'images/y-apple.jpg', correct: false},
    {desc: 'Basil', photo: 'images/y-basil.jpg', correct: false},
    {desc: 'Black Eyed Susans', photo: 'images/y-blackeyed-susans.jpg', correct: false},
    {desc: 'Cherry', photo: 'images/y-cherry.jpg',correct: false},
    {desc: 'Clematis', photo: 'images/y-clematis.jpg', correct: false},
    {desc: 'Dahlias', photo: 'images/y-dahlias.jpg', correct: false},
    {desc: 'Foxglove', photo: 'images/y-foxglove.jpg', correct: false},
    {desc: 'Hollyhocks', photo: 'images/y-hollyhocks.jpg', correct: false},
    {desc: 'Honeysuckle', photo: 'images/y-honeysuckle.jpg', correct: false},
    {desc: 'Hyacinth', photo: 'images/y-hyacinth.jpg', correct: false},
    {desc: 'Hyssop', photo: 'images/y-hyssop.jpg', correct: false},
    {desc: 'Lavendar', photo: 'images/y-lavendar.jpg', correct: false},
    {desc: 'Lilac', photo: 'images/y-lilac.jpg', correct: false},
    {desc: 'Rosemary', photo: 'images/y-rosemary.jpg', correct: false},
    {desc: 'Snapdragon', photo: 'images/y-snapdragon.jpg', correct: false},
    {desc: 'Snapdragon', photo: 'images/y-snapdragons.jpg', correct: false}];

  var nImages = [
    {desc: 'Azaleas', photo: 'images/n-azaleas.jpg', correct: true},
    {desc: 'Drosera Rotundifolia', photo: 'images/n-drosera-rotundifolia.jpg', correct: true},
    {desc: 'Feverfew', photo: 'images/n-feverfew.jpg', correct: true},
    {desc: 'Heliconia', photo: 'images/n-heliconia.jpg', correct: true},
    {desc: 'Mountain Laurel', photo: 'images/n-mountain-laurel.jpg', correct: true},
    {desc: 'Oleander', photo: 'images/n-oleander.jpg', correct: true},
    {desc: 'Pitcher Plant', photo: 'images/n-pitcher-plant.jpg', correct: true},
    {desc: 'Pitcher Plant', photo: 'images/n-pitcher-plant2.jpg', correct: true},
    {desc: 'Red Rosettes', photo: 'images/n-red-rosettes.jpg', correct: true},
    {desc: 'Rhododendron', photo: 'images/n-rhododendron.jpg', correct: true},
    {desc: 'Stargazer Lily', photo: 'images/n-stargazer-lily.jpg', correct: true},
    {desc: 'Trumpet Flower', photo: 'images/n-trumpet-flower.jpg', correct: true},
    {desc: 'Wormwood', photo: 'images/n-wormwood.jpg', correct: true}];

  $('.fader').on('click', function(){
    $(this).parent().fadeOut();
  });


  $('#startGame').on('click', function(){
    console.log("game started");
    GenerateBeeBoard();
    dispImages = [];
    //GENERATE BOARD function while WINNER <7
  });

// GENERATE BOARD function
// Built myself -> hence every single console.log available to man
var GenerateBeeBoard = function(){
  var opt1 = $('#opt1');
  var opt2 = $('#opt2');
  var opt3 = $('#opt3');
  roundCount++;
  var shuffledY = shuffle(yImages);
  // console.log(shuffledY);
  dispImages.push(shuffledY[0]);
  dispImages.push(shuffledY[1]);
  var shuffledN = shuffle(nImages);
  dispImages.push(shuffledN[0]);
  // console.log(shuffledN);
  shuffle(dispImages);
  // console.log(dispImages);
  opt1.css({'background-image':'url('+dispImages[0].photo+')'});
  opt1.removeClass('true false').addClass(''+dispImages[0].correct+'');
  opt1Words=document.getElementById("opt1-desc");
  opt1Words.innerHTML=''+dispImages[0].desc+'';
  opt2.css({'background-image':'url('+dispImages[1].photo+')'});
  opt2.removeClass('true false').addClass(''+dispImages[1].correct+'');
  opt2Words=document.getElementById("opt2-desc");
  opt2Words.innerHTML=''+dispImages[1].desc+'';
  opt3.css({'background-image':'url('+dispImages[2].photo+')'});
  opt3.removeClass('true false').addClass(''+dispImages[2].correct+'');
  opt3Words=document.getElementById("opt3-desc");
  opt3Words.innerHTML=''+dispImages[2].desc+'';
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

//switch player function



//Score function, stolen from Taylor's Know Your Planet
  $('.response').on('click', function(e){
      e.preventDefault();
      console.log('clicked image');
      if ($(this).hasClass('true')){
      console.log('clicked correct image');
        if(roundCount % 2 === 1) {
          score1++;
          d=document.getElementById("p1score");
          d.innerHTML="Player One: " + score1;
          winner();
          dispImages = [];
          GenerateBoard();
        } else {
          score2++;
          d=document.getElementById("p2score");
          d.innerHTML="Player Two: " + score2;
          winner();
          dispImages = [];
          GenerateBoard();
        }
      } 
        else {
          swal({
              title: 'Not quite.', 
              type: 'warning',
              confirmButtonClass: 'btn-warning'
            });          
          dispImages = [];
          GenerateBoard();
      }
});

  //separate winner function
  var winner = function(){
if (score1 === 7) {
   swal({
    title: 'Winner!', 
    text: 'Congratulations, Player 1, you know your stuff!', 
    type: 'success',
    confirmButtonClass: 'btn-success'
  });
 }
   else if (score2 === 7) {
    swal({
    title: 'Winner!', 
    text: 'Congratulations, Player 2, you know your stuff!', 
    type: 'success',
    confirmButtonClass: 'btn-success'
  });   

   } else {
    return;
  }
}


//local storage for high score
//^endless play?
//several categories


//optional learn more page that I want so bad :( tbc
// $('#learn').on('click', function(){
//   console.log('learn more');
// });

// //GENERATE BIG function
// var GenerateBig = function() {}

  });

