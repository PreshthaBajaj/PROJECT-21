const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var world, engine;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		restitution : 0.95,
	  }

	ball = Bodies.circle(300,450,20,ball_options);
	World.add(ball,world)

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20,);
  
  drawSprites();
 
}



