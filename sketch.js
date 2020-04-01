const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground;


var pig1, log1, box3, box4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

   box1  = new Box(200, 340, 200, 140);
   box2 = new Box(60,200, 75, 200);
   box3 = new Box(340,200, 75, 200);

   var box4options = {
       isStatic : true
   }



    ground = new Ground(200, 390, 410, 20);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();   
    box2.display(); 
    box3.display();
   

    ground.display();

    rectMode(CENTER);
    fill("black");
    rect(200,350,40,50); 








}