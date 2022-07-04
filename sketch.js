var sprite1
function setup() {
  createCanvas(400,400);
  sprite1 = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    sprite1.position.x = sprite1.position.x + 5;
  } 
  if(keyIsDown(LEFT_ARROW)){
    sprite1.position.x = sprite1.position.x - 5;
  }
  if(keyIsDown(UP_ARROW)){
    sprite1.position.y = sprite1.position.y - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    sprite1.position.y = sprite1.position.y + 5;
  }
}




