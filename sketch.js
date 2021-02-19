var canvas,bg;
var cat, catImg,catImg2,catImg3;
var together;
var mouse, mouseImg, mouseImg2, mouseImg3;

function preload() {
bg  = loadImage("images/garden.png");
mouseImg = loadImage("images/mouse1.png"); 
mouseImg2 = loadImage("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadImage("images/mouse4.png");
catImg = loadImage("images/cat1.png");
catImg2 = loadImage("images/cat2.png","images/cat3.png");
catImg3 = loadImage("images/cat4.png");
}

function setup(){
  canvas(1000,800);
  cat = createSprite(870,200);
  cat.addAnimation("catSleeping", catImg);
  cat.scale = 0.2;
  mouse =  createSprite(200,600);
  mouse.addAnimation("mouseStanding", mouseImg);
  mouse.scale = 0.15;
}

function draw() {

    background(bg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX=0;
      cat.addAnimation("catLastImage", catImg3);
      cat.x = 300;
      cat.scale = 2;

      mouse.addAnimation("mouseLastImage", mouseImg3);
      mouse.scale = 0.15;
     cat.changeAnimation("catLastImage");   
     mouse.changeAnimation("catLastImage");
    }
    
    drawSprites();
}



function keyPressed(){
if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("catRunning", catImg2);    
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseTeasing", mouseImg2);
//mouse.frameDelay = 25;
mouse.changeAnimation("mouseTeasing");
}



}
