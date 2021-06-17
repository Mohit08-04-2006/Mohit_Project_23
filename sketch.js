var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;


	engine = Engine.create();
	world = engine.world;

    packageBody = Bodies.rectangle(width/2 , 200 , 20 ,20, {restitution:1,isStatic:true});
	World.add(world, packageBody);

    // Creating Ground
    wall1 = new Sidewalls(275,565);
    wall3 = new Sidewalls(525,565);
	wall2 = new Ground(250,30);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
  keyPressed();
  drawSprites();

  wall1.display();
  wall3.display();
  wall2.display();
 
}

function keyPressed(){
	if (keyCode == DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false);

		}
}