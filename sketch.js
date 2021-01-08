var man,manImage
var ground, groundImage;
var scene;
var dragon;

var score;


function preload(){
  manImage=loadImage("swordman2.png");
  sceneImage=loadImage("mountain.jpg");
  dragon1=loadImage("dragon.png");
  swordImage=loadImage("sword.png");
}

function setup() {
  createCanvas(1200,600);
  
  man = createSprite(100,550,20,50);
 man.addImage("sword",manImage);
  man.scale=0.7;
  ground = createSprite(600,550,1200,20);
//  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  scene=createSprite(600,500,1200,600);
 scene.addImage(sceneImage);
  scene.scale=2.5;

  ground.visible=false;
  
  
  score = 0;
}

function draw() {
  background(0);
 scene.depth=0; 
 scene.velocityX=-2;
  if (scene.x<0){
    scene.x=scene.width/2;
  }
  if (keyDown("UP_ARROW")){
    man.y=man.y-2;
  }
  if (keyDown("DOWN_ARROW")){
    man.y=man.y+2;
  }
  if (keyDown("RIGHT_ARROW")){
    throwSword();

  }
  
  spawndragons();
  man.collide(ground);
  drawSprites();

}
function spawndragons(){
  if (frameCount % 180 === 0){
    var dragon = createSprite(1200,Math.round(random(200,500)),10,40);
    dragon.velocityX = -6;
    
     //generate random dragons
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: dragon.addImage(dragon1);
               break;
       case 2: dragon.addImage(dragon1);
               break;
       case 3: dragon.addImage(dragon1);
               break;
      
       default: break;
     }
    
     //assign scale and lifetime to the dragon           
     dragon.scale = 0.8;
     dragon.lifetime = 300;
    
    //add each dragon to the group
   //  dragonsGroup.add(dragon);
  }
 }
 function throwSword(){
var sword=createSprite(100,400,20,50);
sword.y=man.y-50;
sword.addImage(swordImage)
sword.scale=0.3;
sword.velocityX=4;
 }
