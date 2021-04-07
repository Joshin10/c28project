
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1300,400,30);
	mango3=new mango(1000,250,30);
    stone=new stone(1100,101,30)	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	boy= new boy(stone.body,{x:200,y:100})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
 stone.display();
  treeObj.display();
  mango1.display();
mango2.display();
mango3.display();
  groundObject.display();
  boy.dis
}
function mouseDragged(){
    Matter.Body.setPostion(stone.body,{x:mouseX,y:mouseY})
    
}
function mouseReleased(){
    boy.fly();
}