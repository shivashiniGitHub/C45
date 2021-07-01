const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sofia,sofiaImg,sofia2;
var sbg;

var time = 600;

var gameState  = "INSROOM1" ;
var END = 0;
var LEVEL1 = 1;
var INSROOM2 = 2;
var LEVEL2 = 3;
var INSROOM3 = 4; 
var LEVEL3 = 5;

var door,doorImg;
var bed,bedImg;
var pillow,pillowImg;
var eye,eyeImg;
var cat,catImg;
var mirror,mirrorImg;
var bookshelf,bookShelfImg;

function preload(){
  
  sbg = loadImage("images/initialBackground.jpg");
  doorImg = loadImage("images/doorClosed.png");
  bedImg = loadImage("images/bed.png");
  catImg = loadImage("images/cat.jpg");
  pillowImg = loadImage("images/pillow.png");
  bookshelfImg = loadImage("images/bookshelf.png");
  mirrorImg = loadImage("images/mirror.jpg");
  eyeImg = loadImage("images/eye.png");
  sofiaImg = loadImage("images/girl.png");
}

function setup() {
  createCanvas(1250,600);
 
  engine = Engine.create();
  world = engine.world;

  //sofiabody = new Sofia(650,285);
  sofia = createSprite(650,285);
  sofia.addImage("sofiaImage",sofiaImg);
  sofia.scale = 0.25;

 // sofia2body = new Sofia(650,500);
  sofia2 = createSprite(650,500);
  sofia2.addImage("sofiaImage2",sofiaImg);
  sofia2.scale = 0.25;
  sofia2.visible = false;

  this.greeting = createElement('h1');
  this.instruction = createElement('h2');
  this.play = createElement('h1');

  door = createSprite(625,110,5,10);
  door.addImage("door1",doorImg);
  door.scale = 0.115 ;
  door.visible = false;

  bed  = createSprite(225,150,30,30);
  bed.addImage("bed1",bedImg);
  bed.scale = 0.7;
  bed.visible = false;

  cat = createSprite(225,300,30,30);
  cat.addImage("cat1",catImg);
  cat.scale = 0.15;
  cat.visible = false;

  pillow = createSprite(225,450,30,30);
  pillow.addImage("pillow1",pillowImg);
  pillow.scale = 0.30;
  pillow.visible = false;

  bookshelf  = createSprite(1025,150,30,30);
  bookshelf.addImage("bookshelf1",bookshelfImg);
  bookshelf.scale = 0.4;
  bookshelf.visible = false;

  mirror = createSprite(1025,350,30,30);
  mirror.addImage("mirror1",mirrorImg);
  mirror.scale = 0.25;
  mirror.visible = false;

  eye = createSprite(1025,500,30,30);
  eye.addImage("eye1",eyeImg);
  eye.scale = 0.30;
  eye.visible = false;
}

function draw() {
  background(255,255,255);  

  if(gameState === "INSROOM1"){

  //sofia.display();

  this.greeting.html("WELCOME TO THE ESCAPE HOUSE.");
  this.greeting.position(400,50);

  this.instruction.html("In order to pass the first level solve all the ridddle in 10min. Ater you solve one riddle the next will atomatically appear.Once you solved all the riddle go to the door and it will open then press the alphabet 's' to enter the next level.")
  this.instruction.position(100,400);

  this.play.html("PRESS SPACE TO START.");
  this.play.position(450,500);
  }
  if(keyDown("space")&& gameState === "INSROOM1" ){
    gameState = LEVEL1;
    background(255,255,255);
    this.greeting.hide();
    this.instruction.hide();
    this.play.hide();

  }

  if(gameState === LEVEL1){
    door.visible = true;
    bed.visible = true;
    cat.visible = true;
    pillow.visible = true;
    bookshelf.visible = true;
    mirror.visible = true;
    eye.visible = true;
    sofia2.visible = true;
    sofia.visible = false;

    textSize(20)
    fill("indigo");
    text("Time Left: "+ time +" seconds",1025,50);

    if(keyDown("up")){
      sofia2.y = sofia2.y-10;
    }

    if(keyDown("down")){
      sofia2.y = sofia2.y+10;
    }

    if(keyDown("right")){
      sofia2.x = sofia2.x+10;
    }

    if(keyDown("left")){
      sofia2.x = sofia2.x-10;
    }
    if(keyDown("up")||"down"||"left"||"right"){
      for(i = time; i<=0 ; i--){
        textSize(20)
        fill("indigo");
        text("Time Left: "+ time +" seconds",1025,50);
      }

    }
  }

  drawSprites();

}