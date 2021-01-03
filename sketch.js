const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ball,ground

function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world

 var ballOptions={
   friction:0.3,
   density:1,
   restitution:2
 }


 ball=Bodies.circle(400,200,15,ballOptions)
 World.add(world,ball)
 console.log(ball.position.x)

 var groundOptions={
   isStatic:true
 }

 ground=Bodies.rectangle(400,300,800,5,groundOptions)
 World.add(world,ground)
 console.log(ground)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  circle(ball.position.x,ball.position.y,15)
  rect(ground.position.x,ground.position.y,800,5)
}