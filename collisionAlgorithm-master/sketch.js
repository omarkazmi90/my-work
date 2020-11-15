var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(300, 100, 50, 80);
  o1.shapeColor = "green";
  o2 = createSprite(500, 100, 50, 80);
  o2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(touching(movingRect,o1)){
    movingRect.shapeColor = "red";
    o1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    o1.shapeColor = "green";
  } 
 
  drawSprites();
}


 