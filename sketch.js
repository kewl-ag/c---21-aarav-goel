var bullet,wall;
var wall , thickness;
var speed ,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  
  //wall.shapeColor = (80,80,80);
}

function draw() {
  background("blue");  

  
  


  if (hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight* speed * speed * speed/(thickness*thickness*thickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage < 10)
    {
      wall.shapeColor = color(0,215,0);
    }
}

function hascollided(bullet,wall)
{
bulletRightEdge  = lbullet.x + lbullet.width;
wallLeftEdge + lwall.x;

if(bulletRightEdge >= wallLeftEdge){
  return true;
}
else{
return false;
}
}