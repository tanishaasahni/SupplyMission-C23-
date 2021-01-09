var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  rect1;
var rect2;
var rect3 ;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	rect1= new RedBox(290,310,20,100);
	rect2 = new RedBox(400,350,200,20);
	rect3 = new RedBox(500,310,20,100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="red";


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	fill("yellow");
	rectMode(CENTER);
	ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );

 	World.add(world, ground);


	
  
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,width,10)

  rect1.display();
  rect2.display();
  rect3.display();
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  Matter.Body.setStatic(packageBody,false);
  }
}
  

