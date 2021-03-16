const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var hand;

function preload(){
	boy=loadImage("images/boy.png");
  stoneObj = loadImage("images/stone.png");
    }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1100,100,30);
	mango2 = new mango(1000, 50, 30);
  mango3 = new mango(1050, 110, 30);
	mango4 = new mango(1150, 120, 30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Engine.run(engine);
  }

function draw() {
  background(230);
  image(boy ,200,340,200,300);
  image(stoneObj,200,390,50,50);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  groundObject.display();
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	stoneObj.fly();
}

//Ma'am I was not able to display the the string and show the stone moving, rest everything I have done.