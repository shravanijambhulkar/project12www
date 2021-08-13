var path,pathImg,runner,running,runnerImg,coin,coin1,coin2,coin3,coin4,coinImg,coinscore;
var coinscore=0;
function preload(){
 
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale= 1.2;
  runner=createSprite(180,340,50,170);
  runner.addAnimation("running",runnerImg);
  runner.scale=0.1;
  coin1=createSprite(200,200,80,90);
  coin1.addImage(coinImg);
  coin1.scale=0.3
  coin2=createSprite(100,200,80,90);
  coin2.addImage(coinImg);
  coin2.scale=0.3
  coin3=createSprite(300,200,80,90);
  coin3.addImage(coinImg);
  coin3.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
  left_boundary.visible=false;
  right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score' +coinscore, 20,200);
  textSize(10);
  text('0', 20,230);
  runner.x=World.mouseX;
  if(path.y>400) {
    path.y=height/2 ;
  }
  if(runner.isTouching(coin1)|| runner.isTouching(coin2)|| runner.isTouching(coin3)){
  coinscore = coinscore+1;
 
  
  }
  runner.collide(left_boundary);
  runner.collide(right_boundary);
  edges=createEdgeSprites();
  runner.collide(edges[3]);
drawSprites();
}