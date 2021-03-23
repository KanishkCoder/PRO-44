
var backgroundImg;
var superhero,SuperheroImg;
var ground,helicopter;

function preload(){
  backImage = loadImage("Untitled-3.jpg");
  SuperheroImg = loadImage("Superhero-01.png");
  helicopterImg = loadImage("helicopter.png")
}

function setup() {
  createCanvas(2420,676);

  backgr=createSprite(1210,338,1210,338);
  backgr.addImage(backImage);
  backgr.scale=1;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;

  superhero = createSprite(200,338,10,100);
  superhero.addImage(SuperheroImg)
  superhero.scale=0.1

  
}

function draw() {
  background(0);

  if(backgr.x<500){
    backgr.x=backgr.width/2;
  }

  spawnHelicopter();

  drawSprites();
}
function spawnHelicopter(){
  if(frameCount%100===0){
    helicopter = createSprite(2520,338,20,20);
    helicopter.y = Math.round(random(0,676));
    helicopter.addImage(helicopterImg);
    helicopter.scale = 0.2;
    helicopter.velocityX = -3
  }
}