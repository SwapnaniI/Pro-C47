var plane1,plane2,plane3;
var clouds = [];
var cloud1Image,cloud2Image,copterImage;
var bf109Image,p51Image,p38Image;
var constrainedPos;
var shotArray = [];
var aiShotArray = [];
var count,aiCount;
var gameState = 0;
var bg1,bg2,bg3;
var button1,button2;
var currentLevel;
var highlightVar;
var highlight;
var numTrigger = false;
var change = true;
var rainsFar = [];
var rainsClose = [];
var plane1Hp = 1;
//Fire effects
var particles = [];
var fireSource;

var smokeArray = [];

var sound;
var firesound;
var loopControl = 0;

var block;

var fade = 255;

var gameOver = false;

var rainSound;

var cover;

var cloud1DarkImage,cloud2DarkImage;




function preload(){
  
   bf109Image = loadImage('Images/bf109.png');
   p51Image = loadImage('Images/p-51.png');
   p38Image = loadImage('Images/p38.png');


   cloud1Image = loadImage('Images/cloud1.png');
   cloud2Image = loadImage('Images/cloud2.png');

   cloud1DarkImage = loadImage('Images/cloud1-dark.png');
   cloud2DarkImage = loadImage('Images/cloud2-dark.png');


   rainSound = loadSound('Audio/rain-01.mp3')

  //  switch( random(Math.round(random(1,2))) ){
    // case 1: sound = loadSound('Audio/sound-1.mp3');
   
    //  console.log(0)
    //       break;
    //   case 2: sound = loadSound('Audio/sound-2.mp3');
    //   console.log(1)

  // }

  loadRandomSound(Math.round(random(0,1)));

  firesound = loadSound('Audio/fire-sound-4.mp3');



}
function setup() {
  var canvas = createCanvas(1000, 600);
  canvas.mousePressed(playSound);
  //Initialize background colours

  bg1 = 82;
  bg2 = 153;
  bg3 = 224;



  count = 1;
  aiCount = 1;

  cover = new objectCover(width/2,height/2 - 100,(223/3) *2,(218/3) * 2);
cover.xSpeed = random(2,5);
cover.ySpeed = random(2,5);

if(random(1) > 0.5){
  cover.xSpeed *= -1;
}
if(random(1) > 0.5){
  cover.ySpeed *= -1;
}


 // cover.xSpeed = 10;
  createFire(1000,1000);

  currentLevel = 0;

  highlightVar  = false;

  highlight = 50;

  createLevelOne();

  for(var i = 0; i < 61; i++){
    aiShotArray.push(new Shot(150,plane2.y));  
}


block = new Block(width/2,height/2,300,154);


angleMode(DEGREES)
   
}

function draw() {

  firesound.setVolume(0.2)
//translate(100,0)
 if(frameCount % 60 === 0){
  //spawnClouds(3);
 }

  background(bg1, bg2, bg3);

  if(currentLevel >= 4){
    if(!rainSound.isLooping() ){
      rainSound.loop();
      rainSound.setVolume(0.5)
    }
  //19,64,108
  
  if(bg1 > 19){
    bg1 --
  }
  if(bg2 > 64){
    bg2 --
  }
  if(bg3 > 108){
    bg3 --
  }
  
    spawnRain();
    rainCloseDisplay();
  }

//console.log(plane1.angle);
  if(currentLevel > 0){
    if((plane2.dead()=== true)&&(plane2.y < height)){
      console.log("helolo")      
    }
  }else if(currentLevel == "guide"){
    guideDisplay();

  }
if(currentLevel > 0){
  spawnClouds(1);
  cloudFunctions();
  console.log(clouds.length)
}



  changeMode();

 // firesound.loop();


  //levelOneFunction();
  createButton1();
  if(currentLevel === 0){
   
    initialTextAndButtonDisplay();
  }


  //cloudFunctions();
if(currentLevel > 0 && plane1Hp >0){
  levelButton();
  displayLevel(currentLevel);
}

if(currentLevel == 0){
  cover.display();
  // cover.x =mouseX
   cover.update();
  
  
   cover.move(5);
   cover.bounce();
}
displayObjects(currentLevel);



// if(mouseOver(plane1) === true){
// console.log("true")
// }
 

//console.log("framerate: " + getFrameRate());


//Draw end
//endGame();

}

function playSound(){
  if(loopControl == 0){
   sound.loop();
   sound.setVolume(0.2)
  }
  loopControl++;
}

function loadRandomSound(num){
if(num == 0){
  sound = loadSound('Audio/sound-1.mp3');
}else{
  sound = loadSound('Audio/sound-2.mp3');
}
}

function mousePressed(){

  if(mouseOver(button1) === true){

    if(currentLevel === 0){
 
      currentLevel =  1;
    }


    button1.MoseOverValue == true;

    if(currentLevel === 1){
      if(meetLevelOneCriteria() === true){
        createLevelTwo();
        currentLevel = 2;
      }
    }

      
    if(currentLevel === 2){
      if(meetLevelTwoCriteria() === true){
        createLevelThree();
        currentLevel = 3;
      }
    }

    if(currentLevel === 3){
      if(meetLevelThreeCriteria() === true){
        createLevelFour();
        currentLevel = 4;
      }
    }

    if(currentLevel === 4){
      if(meetLevelFourCriteria() === true){
        createLevelFive();
        currentLevel = 5;
      }
    }

  
  


  }else{
    button1.MoseOverValue == false;

  }
  if(mouseOver(button2) === true){
    currentLevel = "guide";
  }
 
}

function keyPressed(){
  if(keyCode == ENTER){
   if(currentLevel == "guide"){
     currentLevel = 1;
   }
  }
}








