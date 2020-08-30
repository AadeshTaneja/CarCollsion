var car,wall,wall1,deformation,car2;
var speed,weight;


function setup() {
  createCanvas(1600,800);
  speed=random(55,90);
  weight=random(400,1500)
  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed
  wall = createSprite(1450, 200, 60, 250);
  wall.shapeColor=color(80,80,80);
  car2 = createSprite(50,600,50,50)
  car2.velocityX=speed
  wall1 = createSprite(1450, 600, 60, 250);
  wall1.shapeColor=color(80,80,80);
  

}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x<(car.width/2+wall.width)/2){
    car.velocityX=0
   car.collide(wall);
     deformation = 0.5*weight*speed*speed/22509
   
  }
   if(deformation>180){
      car.shapeColor=color(255,0,0);
      
   }
   if(deformation<100){
      car.shapeColor=color(0,255,0);
      
   }
   if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      
   }
   if(wall.x-car2.x<(car2.width/2+wall.width)/2){
    car2.velocityX=0
   car2.collide(wall1);
     deformation = 0.5*weight*speed*speed/22509
     
  }
   if(deformation>180){
      car2.shapeColor=color(255,0,0);
      
      
   }
   if(deformation<100){
      car2.shapeColor=color(0,255,0);
      
      
   }
   if(deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);
      
      
   }
  
  
  drawSprites();
}