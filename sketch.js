const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: true
	}

	var options1 = {
		isStatic: false,
		restitution: 0.3,
		density: 1.2
	}

	//Create the Bodies Here.
	ground = Bodies.rectangle(0,650,800,5,options)
	World.add(world, ground)

	ball = Bodies.circle(200,600,50,options1)
	World.add(world, ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



