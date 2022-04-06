const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var angle;

var tower;
var pistola;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  /*towerImage = loadImage("./assets/tower.png");*/

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  angle = -PI/4;//45°


  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
  tower = new Tower(150,350,160,310);
  pistola = new Gustav(180,110,100,50,angle);
  
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//muestra la torre(desafío 4)
 tower.display();
 pistola.display();
}

