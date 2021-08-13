
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

	ball = new Ball(200,200,30);
	ground = new Ground(400,690,800,10);
	dustbin = new Bin(500,650,100,10);
    lwall = new Sidewall(550,630,10,50);
	rwall = new Sidewall(450,630,10,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  rwall.display();
  lwall.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position, {x:30, y:-30});
	}
}

