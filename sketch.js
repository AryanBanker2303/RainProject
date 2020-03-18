const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

/*It shows an error that says that "Matter" is not defined in the lines above.*/
function setup() {
  createCanvas(800,400);
  engine = engine.create();
  world = engine.world;
  rain1 = new GreenRain1();
  rain1 = new GreenRain1();
  rain2 = new GreenRain1();
  rain3 = new GreenRain1();
  rain4 = new GreenRain1();
}

function draw() {
  background(220,220,220);  
  Engine.update(engine);
  
// remember to display everytin
  rain1.display();
  rain2.display();
  rain3.display();
  rain4.display();
}