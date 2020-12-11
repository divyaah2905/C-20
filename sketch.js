var fixedRect,movingRect;

function setup() {
  createCanvas(1200,400);

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";

}

function draw() {
  background(20,255,255); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
 
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }

  drawSprites();

}