
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var Box1,Box2,Base1
var object,ground,ball
var engine,world
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  Box1 = new Box(200,300,50,50)
  Box2 = new Box(200,100,50,100)
  Base1 = new Base(400,350,800,20)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
Box1.display()
Box2.display()
Base1.display()
}
