var gamestate=0;
var playerCount,database,form,game,player;


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game= new Game();
  game.gameState();
  
  
}

function draw(){
  background("white");
  
  
}

