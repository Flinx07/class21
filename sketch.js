var fixed,moving;
var fixed2,fixed3,fixed4;
function setup() {

  createCanvas(800,400);
  
 fixed= createSprite(400, 200, 50, 50);
moving=createSprite(400,200,50,50);
fixed2=createSprite(200,200,50,50);
fixed3=createSprite(250,250,50,50);
fixed4=createSprite(300,300,50,50);


fixed.shapeColor=("red");
moving.shapeColor=("blue");
fixed2.shapeColor=("purple");
fixed3.shapeColor=("cyan");
fixed4.shapeColor=("orange");
}

function draw() {
  background( "black");
  moving.x=mouseX
  moving.y=mouseY
 if( touching(fixed,moving)){
   fixed.shapeColor=("green");
   moving.shapeColor=("green");
 }
 if( touching(fixed2,moving)){
  fixed2.shapeColor=("green");
  moving.shapeColor=("green");
 }
  if(touching(fixed3,moving)){
    fixed3.shapeColor=("green");
   moving.shapeColor=("green");
  }
 if( touching(fixed4,moving)){
  fixed4.shapeColor=("green");
  moving.shapeColor=("green");
 }
  drawSprites();
}
