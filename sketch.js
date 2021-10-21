const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var world, engine;
var ground;
var wall1, wall2;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		restitution : 0.97,
		density : 1.2
	  }

	ball = Bodies.circle(200,450,20,ball_options);
	World.add(world,ball);
	fill("yellow");

	var ground_options = {
		isStatic : true
	}
  
	ground = Bodies.rectangle(400,670,800,10,ground_options);
	World.add(world,ground);

	wall1 = Bodies.rectangle(650,630,10,72,ground_options);
	World.add(world,wall1);

	wall2 = Bodies.rectangle(530,630,10,72,ground_options);
	World.add(world,wall2);
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20,20);

  rect(ground.position.x,ground.position.y,800,10);
  rect(wall1.position.x,wall1.position.y,10,72);
  rect(wall2.position.x,wall2.position.y,10,72);
 

  drawSprites();

 
}

function keyReleased(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5});
	}
}



