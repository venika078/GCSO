var car1,wall1;
var car2,wall2;
var speed,weight;
var line1,line2,line3;

var speed,weight;
function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90)
  weight=random(400,1500)

  car1=createSprite(300,50,40,40)
  wall1=createSprite(1500,50,10,60)
  car1.velocityX = speed;
  wall1.shapeColor=color("white")

 line1=createSprite(1500,100,canvas.width,10);
 line1.shapeColor = color("blanchedalmond");
 line2=createSprite(1500,200,canvas.width,10);
 line2.shapeColor = color("blanchedalmond");
 line3=createSprite(1500,300,canvas.width,10);
 line3.shapeColor = color("blanchedalmond");

 car2=createSprite(200,150,40,40);
 wall2=createSprite(1500,150,10,60);
 car2.velocityX = speed;
 wall2.shapeColor= color("salmon")

 car3=createSprite(200,250,40,40);
 car3.velocityX=speed;
 wall3=createSprite(1500,250,10,60);
 wall3.shapeColor = color("white")

 car4=createSprite(200,350,40,40);
 car4.velocityX=speed;
 wall4=createSprite(1500,350,10,60);
 wall4.shapeColor = color("salmon")
}

function draw() {
  background("black");  

  car1.collide(wall1);
car2.collide(wall2)  ;
car3.collide(wall3);
car4.collide(wall4)  ;

  if(wall1.x-car1.x < (car1.width+wall1.width/2)){
    car1.velocityX=0;
    var deformation=0.5 * weight *speed *speed/22509;
    if(deformation>180) {
      car1.shapeColor = color(225,0,0);
    }
    if(deformation>180 && deformation>100) {
      car1.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car1.shapeColor = color(0,255,0);
    }
  }

  if(wall2.x-car2.x < (car2.width+wall2.width/2)){
    car2.velocityX=0;
    var deformation=0.5 * weight *speed *speed/22509;
    if(deformation>180) {
      car2.shapeColor = color(225,0,0);
    }
    if(deformation>180 && deformation>100) {
      car2.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car2.shapeColor = color(0,255,0);
    }
  }

  if(wall3.x-car3.x < (car3.width+wall3.width/2)){
    car3.velocityX=0;
    var deformation=0.5 * weight *speed *speed/22509;
    if(deformation>180) {
      car3.shapeColor = color(225,0,0);
    }
    if(deformation>180 && deformation>100) {
      car3.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car3.shapeColor = color(0,255,0);
    }
  }

  if(wall4.x-car4.x < (car4.width+wall4.width/2)){
    car4.velocityX=0;
    var deformation=0.5 * weight *speed *speed/22509;
    if(deformation>180) {
      car4.shapeColor = color(225,0,0);
    }
    if(deformation>180 && deformation>100) {
      car4.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car4.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}