const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,300,60,20);
}
function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    drawSprites();
}