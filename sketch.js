const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var g1;

var plink0=[];
var particle=[];
var d;
var divisionHeight=300; 

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    g1=new Ground(240,790,480,20);
    d=new div(232,5,46,346);
   
} 

function draw(){
    background(10, 20, 20);
    Engine.update(engine);
    g1.display();
    d.display();

 }
 