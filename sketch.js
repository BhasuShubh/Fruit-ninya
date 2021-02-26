var PLAY = 1;
var END = 0;
var gameState = PLAY;
var knife,knifeImage;
var score;
var fruit,Lfruit,fruit1Image,enemy,enemyImage,fruit2Image,fruit3Image,fruit4Image;
var FruitGroup,germGroup;
var germ,Germs;
var germ1,germ2;
var gameOver,gameoversound;
var knifehit;

function preload(){
  knifeImage = loadImage("sword.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  germ1 = loadImage("alien1.png");
  germ2 = loadImage("alien2.png");
  gameOver = loadImage("gameover.png");
  gameoversound = loadSound("gameover.mp3");
  knifehit = loadSound("knifeSwooshSound.mp3");
}

function setup(){
  createCanvas(600,600);
  knife = createSprite(300,300,20,20);
  knife.addImage(knifeImage);
  knife.scale = 0.6;
  score = 0;
  FruitGroup = new Group();
  germGroup = new Group();
}

function draw(){
  background("cyan");
  text("Score : " + score,530,50);
  if(gameState === PLAY){
    if (gameState===PLAY){
    knife.y = World.mouseY;
    knife.x = World.mouseX;
  }
  if (FruitGroup.isTouching(knife)){
    FruitGroup.destroyEach();
    score = score+2;
    knifehit.play();
  }
  if(germGroup.isTouching(knife)){
    gameState = END;
    gameoversound.play();
  }
  fruits();
  Enemy();
  LFruits();  
  }
  
  if(gameState === END){
    knife.x = 300;
    knife.y = 300;
    FruitGroup.setLifetime = -1;
    germGroup.setLifetime = -1;
    knife.addImage(gameOver);
    fruit.velocityX = 0;
    fruit.velocityY = 0;
    Germs.velocityX = 0;
    Germs.velocityY = 0;
  }
  
  
  
  drawSprites();
}

function fruits(){
  var rfruit = Math.round(random(2,100));
  if (World.frameCount % rfruit ===0){
    fruit = createSprite(600,200,20,20);
    fruit.scale = 0.2;
    var rand = Math.round(random(1,4));
    if(rand ==1)
     fruit.addImage(fruit1Image);
    else if (rand == 2)
      fruit.addImage(fruit2Image);
    else if (rand == 3)
      fruit.addImage(fruit3Image);
    else 
      fruit.addImage(fruit4Image);
   
    fruit.y = Math.round(random(30,500));
    fruit.velocityY = random(score/20,4);
    fruit.velocityX = random(-score/2,-10);
    fruit.setLifetime = 200;
    
    FruitGroup.add(fruit);
  }
}

function Enemy(){
  var enemycount = Math.round(random(50,450));
  if(World.frameCount%enemycount ===0){
    Germs = createSprite(600,200,20,20);
    
    var v = Math.round(random(1,4));
    if(v ==1 || v==3)
     Germs.addImage(germ1);
    else  
    Germs.addImage(germ2);
    Germs.y = Math.round(random(30,340));
    Germs.velocityX = random(-score/10,-10);
    Germs.velocityY = random(score/50,4);
    
    Germs.setLifetime = 200;
    germGroup.add(Germs);
  }
}

function LFruits(){
  var rlfruit = Math.round(random(2,100));
  if (World.frameCount % rlfruit ===0){
    Lfruit = createSprite(0,200,20,20);
    Lfruit.scale = 0.2;
    var rand = Math.round(random(1,4));
    if(rand ==1)
     Lfruit.addImage(fruit1Image);
    else if (rand == 2)
      Lfruit.addImage(fruit2Image);
    else if (rand == 3)
      Lfruit.addImage(fruit3Image);
    else 
      Lfruit.addImage(fruit4Image);
   
    Lfruit.y = Math.round(random(30,500));
    Lfruit.velocityY = random(score/50,4);
    Lfruit.velocityX = random(score/2,10);
    Lfruit.setLifetime = 200;
    
    FruitGroup.add(Lfruit);
  }
}



