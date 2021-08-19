const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies  
var myengine,myworld
var box1,box2
var ball1
function setup(){
canvas=createCanvas(400,400)
myengine=Engine.create()
myworld= myengine.world
var groundoptions={isStatic:true}
ground=Bodies.rectangle(200, 390, 400, 20,groundoptions)
var balloptions={restitution:1}
ball=Bodies.circle(200,200,50,balloptions)
var ball1options={restitution:5}
ball1=Bodies.circle(100,100,50,ball1options)
World.add(myworld,ground)
console.log(ground)
box1=new Box(50,100,50,50)
box2=new Box(200,100,50,50)
ball1=new Ball(300,50,20)
}


function draw(){
background("yellow")
Engine.update(myengine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
box1.display()
box2.display()
ball1.display()
}