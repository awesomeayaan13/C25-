
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj, groundObject,box1,box2,box3
var world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj=new Paper(200,450,40)
	groundObject=new Ground(width/2,570,width,20)

	box1 = new Dustbin (700,550,100,20)

	box2 = new Dustbin (650,513,20,100)

	box3 = new Dustbin (740,513,20,100)
		

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
	
	rectMode(CENTER);
  background("white");
  
	paperObj.display()
	groundObject.display()
	box1.display()
	box2.display()
	box3.display()



  drawSprites();
 
}

	function keyPressed(){
		if (keyCode === UP_ARROW){
			Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:55,y:-185})
		}
	}


