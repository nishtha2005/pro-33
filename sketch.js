const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var s1 = [];
var engine, world;
var backgroundImg;
var hour ,sG;

var snowFall,gi,girl ;
function preload(){

  si =loadImage("snow3.jpg")
  gi =loadAnimation("girl down.png","gu.png")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  girl = createSprite(730,315,20,40)
  girl.addAnimation("changing",gi)
  girl.scale = 0.3
  
}

function draw() {
  background(si); 
  Engine.update(engine);


  if(frameCount%10===0){
    s1.push(new snow(random(10,800), -30));
  }

 for (var j = 0; j < s1.length; j++) {
  
    s1[j].display();
  }
 
  drawSprites();

}