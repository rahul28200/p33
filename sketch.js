const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var spongbox;
var Spongboximg;



function preload(){
bgimg=loadImage("snow3.jpg");
Spongboximg= loadImage("spongbox.png");


}




function setup() {

  createCanvas(800,400);
engine= Engine.create();
  world=engine.world;
  spongbox=createSprite(400, 200, 50, 50);
  spongbox.addImage(Spongboximg);
  spongbox.scale=0.1;
  snowfall= new Snow();
}


function draw() {
  background(bgimg);  
  Engine.update(engine);
  snowfalls();
  drawSprites();
}

function snowfalls(){
  for(var a=0;a<=100;a++){
    snowfall[a];
    display();
  }
}




