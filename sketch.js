const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonImage;
var  engine ;
var world ;
var stand1,stand2 ; 
var slingShot ; 
var ball ;
var ground ;
var wall ; 
//var holder ;


function preload(){
polygonImage = loadImage("polygon.png")
}
function setup() {
    createCanvas(900,400);
    rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

   ground=new Ground()
   stand1=new Stand(390,300,250,10)
   stand2=new Stand(700,200,200,10)
   block1=new Block(300,270,30,40)
   block2=new block(330,270,30,40)
   block3=new block(360,270,30,40)
   block4=new block(390,270,30,40)
   block5=new block(420,270,30,40)
   block6=new block(450,270,30,40)
   block7=new block(480,270,30,40)
   block8=new block(330,235,30,40)
   block9=new block (360,235,30,40)
   block10=new block(390,235,30,40)
   block11=new block(420,235,30,40)
   block12=new block(450,235,30,40)
   block13=new block (360,195,30,40)
   block14=new block(390,195,30,40)
   block15=new block(420,195,30,40)
   block16=new block(390,155,30,40)

   blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
}


function draw() {
  rectMode(CENTER);
  background("black");
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
 
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block12.display();
 block11.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 stand1.display();
 stand2.display();
 ground.display();
 fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygonImage ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY} );
}

function mouseReleased() {
  slingShot.fly();
}

