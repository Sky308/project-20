var speed, weight;  
var car;
var wall;
var deformation;

function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);

  wall.shapeColor(800,800,800);

  car.velocityX = speed;

  deformation = ((0.5*weight*speed*peed)/22500);
}

function draw() {
  background(255,255,255);  

  if(deformation>=100){
  car.shapeColor(0, 255, 0);
  }

  if(deformation=101-179){
  car.shapeColor(230, 230, 0);    
  }

  drawSprites();
}