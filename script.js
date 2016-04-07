$(document).ready(function(){
  console.log('locked/loaded');
  $('.initHide').hide();

  var roundCount = 0;
  var dispImages = [];
  var score1 = 0;
  var score2 = 0;
  dispScore1=document.getElementById("p1score");
  dispScore1.innerHTML="Player One: " + 0;
  dispScore2=document.getElementById("p2score");
  dispScore2.innerHTML="Player Two: " + 0;
  var falseArr;
  var trueArr;

  // image arrays
  var blImages = [ 
    {desc: 'All My Puny Sorrows', photo:'images/amps.jpg', correct: false},
    {desc: 'Cat', photo: 'images/cat.jpg', correct: false},
    {desc: 'Lucky Number Slevin', photo:'images/LuckySlevin.jpg', correct: false},
    {desc: 'Mountains', photo:'images/mountains.jpg', correct: false},
    {desc: 'Bees', photo:'images/gentle-bees.gif', correct: false},
    {desc: 'Digimon', photo:'images/digimon.jpg', correct: false},
    {desc: 'Tea', photo:'images/tea.jpg', correct: false},
    {desc: 'A Dirty Job', photo: 'images/adirtyjob.jpg', correct: false},
    {desc: 'Seattle Waterfront', photo: 'images/SeattleWaterfront.jpg', correct: false},
    {desc: 'Avocado Sushi', photo: 'images/avosushi.jpg', correct: false}];

  var bcImages = [ 
    {desc: 'Benedict Cumberbatch', photo: 'images/bc1.jpg', correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/bc2.jpg', correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/bc3.jpg', correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/bc4.jpg', correct: true},
    {desc: 'Benedict Cumberbatch', photo: 'images/bc5.jpg', correct: true}];

  var yBees = [ 
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
    {desc: 'Lavender', photo: 'images/y-lavender.jpg', correct: false},
    {desc: 'Lilac', photo: 'images/y-lilac.jpg', correct: false},
    {desc: 'Rosemary', photo: 'images/y-rosemary.jpg', correct: false},
    {desc: 'Snapdragon', photo: 'images/y-snapdragon.jpg', correct: false},
    {desc: 'Snapdragon', photo: 'images/y-snapdragons.jpg', correct: false}];

  var nBees = [
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
    $( "#images-row" ).show();
    $( ".scoreBox" ).show();
  });

  $('#startBenedict').on('click', function(){
    console.log("game started");
    $('#benInst').show();
    falseArr=blImages;
    trueArr=bcImages;
    generateBoard();
    dispImages=[];
  });

  $('#startBee').on('click', function(){
    console.log("game started");
    $('#beeInst').show();
    falseArr=yBees;
    trueArr=nBees;
    generateBoard();
    dispImages=[];
  });

// GENERATE BOARD function
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
  console.log(shuffledN);
  dispImages.push(shuffledN[0]);
  shuffle(dispImages);
  console.log(dispImages);
  opt1.css({'background-image':'url('+dispImages[0].photo+')'});
  opt1.removeClass('true false').addClass(''+dispImages[0].beeLike+'');
  opt2.css({'background-image':'url('+dispImages[1].photo+')'});
  opt2.removeClass('true false').addClass(''+dispImages[1].beeLike+'');
  opt3.css({'background-image':'url('+dispImages[2].photo+')'});
  opt3.removeClass('true false').addClass(''+dispImages[2].beeLike+'');
};

  var generateBoard = function(){
    var opt1 = $('#opt1');
    var opt2 = $('#opt2');
    var opt3 = $('#opt3');
    roundCount++;
    var shuffledY = shuffle(falseArr);
    console.log(shuffledY);
    dispImages.push(falseArr[0]);
    dispImages.push(falseArr[1]);
    var shuffledN = shuffle(trueArr);
    dispImages.push(trueArr[0]);
    // trueArr.pop();
    console.log(shuffledN);
    shuffle(dispImages);
    console.log(dispImages);
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
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  $('.response').on('click', function(e){
    e.preventDefault();
    console.log('clicked image');
    if ($(this).hasClass('true')){
    console.log('clicked correct image');
      if(roundCount % 2 === 1) {
        score1++;
        dispScore1.innerHTML="Player One: " + score1;
        swal({
          title: 'Good one!', 
          type: 'success',
          confirmButtonClass: 'btn-success'
        });
        winner();
        dispImages = [];
        setTimeout(generateBoard(), 2000);
      } else {
        score2++;
        dispScore2.innerHTML="Player Two: " + score2;
        swal({
          title: 'Good one!', 
          type: 'success',
          confirmButtonClass: 'btn-success'
        });
        winner();
        dispImages = [];
        generateBoard();
      }
    } 
      else {
        swal({
            title: 'Not quite.', 
            type: 'warning',
            confirmButtonClass: 'btn-warning'
          });          
        dispImages = [];
        generateBoard();
      }
    });

  //separate winner function
  var winner = function(){
    if (score1 === 5) {
       swal({
        title: 'Winner!', 
        text: 'Congratulations, Player 1, you know your stuff!', 
        type: 'success',
        confirmButtonClass: 'btn-success'
      });
       resetBoard();
    } else if (score2 === 5) {
        swal({
          title: 'Winner!', 
          text: 'Congratulations, Player 2, you know your stuff!', 
          type: 'success',
          confirmButtonClass: 'btn-success'
      }); 
        resetBoard();  
    } else {
        return;
    }
  }

  var resetBoard = function() {
    var roundCount = 0;
    var dispImages = [];
    var score1 = 0;
    var score2 = 0;
    dispScore1=document.getElementById("p1score");
    dispScore1.innerHTML="Player One: " + 0;
    dispScore2=document.getElementById("p2score");
    dispScore2.innerHTML="Player Two: " + 0;
  }

//local storage for high score
//^endless play?

//optional learn more page that I want so bad :( tbc
// $('#learn').on('click', function(){
//   console.log('learn more');
// });


});

