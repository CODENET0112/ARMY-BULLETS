var bullet,wall;
var speed,weight, thickness;




function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,2000,10,25);
  bullet.shapeColor=color(0,0,0);
  thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5* weight*speed*speed/(thickness*thickness*thickness);
  }

    if(damage>10)
{
wall.shapeColor=color(255,0,0);
}  

if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}

  drawSprites();
}

function hasCollided(bullet1,wall1)
{
 
  var bullet1RightEdge=bullet1.x=bullet1.width;
 var wall1LeftEdge=wall1.x;
  if(bullet1RightEdge>=wall1LeftEdge)
  {
    return true
  }
  return false;
}
}