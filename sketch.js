const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gameState = "onSling";


function setup() {
  createCanvas(800,400);

 engine = Engine.create();
 world = engine.world;
  
  //ground for the boxes
  ground = new Ground(500,300,300,20);
  //ground for the slingshot
  ground1 = new Ground(100,300,100,20);
  //layer1 
  box10 = new BaseClass(510,273,30,30);
  box11 = new BaseClass(495,273,30,30);
  box12 = new BaseClass(482,273,30,30);
  box13 = new BaseClass(485,273,30,30);
  //layer 2
  box20 = new BaseClass(490,220,30,30)
  box21 = new BaseClass(500,220,30,30)
  box22 = new BaseClass(440,220,30,30)
 //fling box
  box = new BaseClass(100,200,50,50)
 //sligshot
 slingshot = new SlingShot(box.body,{x:100, y:250});


  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();
//displaying the platforms
  ground.display();
  ground1.display();
//displaying the boxes
box10.display();
box11.display();
box12.display();
box13.display();
box20.display();
box21.display();
box22.display();
box.display();
//diplaying the sling shot
slingshot.display();


}

function mouseDragged(){
      Matter.Body.setPosition(box, {x: mouseX , y: mouseY});      
  
}

