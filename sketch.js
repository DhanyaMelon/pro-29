const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var base1,base2;
var bridge;
var jointPoint;
var stones =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(50,300,300,30);
  base1 = new Base(30,100,30,20);
  base2 = new Base(300,100,30,20);
  jointPoint = new Base(30,10,10,10);
  bridge = new Bridge(7,{x:245,y:30});
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge, jointPoint);
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  stone.show();
  bridge.show();
  base1.show();
  base2.show();

  for(var i = 0; i<=8; i++){
    var x = random(width / 2 - 200,width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }
}
