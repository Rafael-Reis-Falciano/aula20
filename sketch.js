
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, solo;

var bloco1;
var bloco2;
var bloco3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options = {
		isStatic: true,
	};

	var options1 = {
		restitution: 0.7,
		friction: 0.05,
		frictionAir: 0.2,
	}

	var options2 = {
		restitution: 0.1,
		friction: 0.09,
		frictionAir: 0.5,
	}

	var options3 = {
		restitution: 0.4,
		friction: 0.02,
		frictionAir: 0.9,
	}

	solo = Bodies.rectangle(400, 695, 800, 10, plane_options);

	bloco1 = Bodies.rectangle(200, 100, 50, 50, options1);
	bloco2 = Bodies.circle(400, 100, 30, options2);
	bloco3 = Bodies.rectangle(600, 100, 80, 50, options3);

	World.add(world, bloco1);
	World.add(world, bloco2);
	World.add(world, bloco3);
	World.add(world, solo);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');

  Engine.update(engine);

  rect(400, 695, 800, 10);
  rect(bloco1.position.x, bloco1.position.y, 50, 50);
  rect(bloco3.position.x, bloco3.position.y, 80, 50);
  ellipse(bloco2.position.x, bloco2.position.y, 60, 60);
  
  drawSprites();
 
  console.log(bloco1.position.y)
}



