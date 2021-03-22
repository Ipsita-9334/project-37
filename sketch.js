var canva;
var gameSate = 0;
var constentantCount, database, quiz, question, constentant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
    console.log("play Function called");
  }

  if(gameState === 2){
    game.end();
  }
}

  

