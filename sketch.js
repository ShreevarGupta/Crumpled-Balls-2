const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var dustbin1, dustbin2, dustbin3;
var dustbin, dustbinImg;


function preload() {

	dustbinImg = loadImage("images/dustbin.png");

}


function setup() {

	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(700, height-153, 150, 10);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.7;

	paper = new Paper(100,630,20);
    ground = new Ground(width/2, height-35, width, 20);

    dustbin1 = new Dustbin(620, 615, 10, 80);
	dustbin2 = new Dustbin(700, height-45, 150, 10);
	dustbin3 = new Dustbin(780, 615, 10, 80);
	
	
	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);

    rectMode(CENTER);

	background("beige");

	paper.display();
	ground.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	
	drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.pap,paper.pap.position,{x:41, y:-120});

	}

}



