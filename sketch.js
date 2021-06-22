var astronaut;
var brush,gym1,sleep,eat,move,bath,bg;

function preload(){
  bg = loadAnimation("iss.png")
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym= loadAnimation("gym11.png","gym2.png","gym1.png","gym12.png")
  eat = loadAnimation("eat1.png","eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png","move1.png")
  bath = loadAnimation("bath1.png","bath2.png")
  

}


function setup() {
  createCanvas(800,400);
 

  astronaut = createSprite(300,230,);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  
}

function draw() {
  background(255,255,255); 
  
  if(keyDown("UP_ARROW")){
    console.log("up is pressed")
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing",brush);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming",gym);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing",bath);
    astronaut.x = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating",eat);
    astronaut.x = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving",move);
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
  }
  drawSprites();
}