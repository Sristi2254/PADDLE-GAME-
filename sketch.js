//this is global scope used to store ball,img,paddle
var ball;

var img;

var paddle;

//this function is used for preloading the images
function preload() {
  
//image for the ball
  ballImage = loadAnimation("ball.png");
  
//image for paddle
  paddleImage = loadAnimation("paddle.png");
}
//for creating and declaring things
 function setup() {
  
//for the size of the canvas
  createCanvas(400, 400);
  
 //for the ball sprite
  ball = createSprite(210,50,20,20);
  
//for adding animation for the ball sprite
  ball.addAnimation("ball", ballImage);
  
//for the paddle sprite
  paddle = createSprite(300,100,20,80);
   
//for adding the animation for the paddle sprite
   paddle.addAnimation("paddle",paddleImage);

//for adding the volocity of the ball
   ball.velocityX=9;
  

}
//function
function draw() {
  
//for creating the background colour
  background(205,153,0);
  
//for the ball to bounce off the edges
  edges=createEdgeSprites();
  
 //for left edge
  ball.bounceOff(edges[0]);
  
//for bottom edge
  ball.bounceOff(edges[3]);
  
//for above edge
  ball.bounceOff(edges[2]);
  
//for the ball to bounce off the paddle
  ball.bounceOff(paddle);
  
//for the paddle to move
  paddle.velocityY=3;
 
//for preventing the paddle to go out of the edge
  paddle.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);
  
  
  if(keyDown(UP_ARROW))
  
  { 
   paddle.velocityY=-8;
  }
  
  if(keyDown(DOWN_ARROW))
    
  {
    paddle.velocityY=8;
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

