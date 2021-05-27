//  Engine = Matter.Engine,
//    World = Matter.World,
//    Events = Matter.Events,
//   Bodies = Matter.Bodies;
  
//  var snow = [];

function preload(){
bg = loadImage("bg.jpeg");
boyRunning = loadAnimation("boy.png","boy1.png");
girlRunning = loadAnimation("girl.png","girl1.png");
ground = loadImage("ground.png")
}

function setup() {
createCanvas(1365,655);
//   engine = Engine.create();
//  world = engine.world;
boy = createSprite(1000,600,50,50);
boy.addAnimation("running",boyRunning);

girl = createSprite(900,600,50,50);
girl.addAnimation("chasing",girlRunning);

ground = new Ground("1365,655,1365,20")
}

function draw() {
background(bg);  

if(frameCount%10===0){
    snow.push(new snow(random(width/4-60 , width/1+10, width/3-20 , width/2+50, width/5+30, width/6-40, width/1+50, width/5-40), 10,10 ))
  }
  for (var s = 3; s < snow.length; s++) {
  snow[s].display();
  }

ground.display()
boy.display();
girl.display();
// Engine.update(engine);
drawSprites();
}