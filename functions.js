  function changeMode(){
    angleMode(DEGREES);
    imageMode(CENTER);
    rectMode(CENTER);
   
  }
  
  function displayScore(){
    push();
    fill (255, 163, 26);
    textSize(20)
  
    textFont('Brush Script MT');
    text("Bullets left : " + (shotArray.length-count), 10 , 40);
    pop();
  }
  
  function isTouching(a,b){
    
      if ((a.x - b.x < b.w / 2 + a.w / 2) &&
      (b.x - a.x < b.w / 2 + a.w / 2) &&
      (a.y - b.y < b.h / 2 + a.h / 2) &&
      (b.y - a.y < b.h / 2 + a.h / 2)) {
  
      return true;
  
    } else {
  
      return false;
  
    }
    
  }
  
  function gameOverTextdisplay(){
    // block.display();
    // block.move();
  }

  function createPlane(x1,y1,x2,y2,x3,y3){
    plane1 = new Plane(x1,y1,21 * 9,22 * 9,1);
    plane2 = new Plane(x2,y2,65 * 3.4,22 * 3.4,1);
    plane3 = new Plane(x3,y3,87.5 * 3.1,35.7 * 3.1,1)
    
  }

  function secondShot(){
    aiShotArray[aiCount-1].move(15);
    
    if(aiCount===aiShotArray.length){
      aiCount=aiShotArray.length-1;
    }
    if (aiCount <= aiShotArray.length-1) {
      aiCount++;
    }
    if(!firesound.isLooping()){
      firesound.loop();
      firesound.setVolume(0.6);
    }
    else{    
    firesound.setLoop(false);
  }
  }
  
  function planeFunctions(){
        plane1.setBullets();
        plane1.display(bf109Image);
        plane1.movement();
        plane1.update(0);
      
      
        
        //plane2.display(p51Image);
      // plane2.aiMovement(plane1);
        plane2.update(0);
        plane2.createFire();
       // plane2.dodge(plane1);
  
        // plane3.display(p38Image);
        // plane3.aiMovement(plane1);
        // plane3.update(1);
        //plane2.dodge(plane1);
  
        for(var i = 0; i < shotArray.length; i++){
          if(isTouching(shotArray[i],plane2) === true){
            plane2.destroy(0.1);
      
          }
          if(isTouching(shotArray[i],plane3) === true){
            plane3.destroy(0.1);
          
          }
        }
  
  
  
        if(mouseIsPressed){ 
          if(frameCount % 4 === 0){
            if(button1.mouseOverValue == false){
              plane1.shoot();
            }

           
          }else{
            //firesound.pause();

          }
          push();
        
          fill (244, 244, 37);
  
          textSize(30)
        
          textFont('Brush Script MT');
          if(count === shotArray.length){
            text("Out of ammo!",15,80)
          }
          pop()
        if(button1.mouseNotOn()){
          if(!firesound.isLooping()){
            firesound.loop();
            firesound.setVolume(0.6);
          }
        }else{          
          firesound.setLoop(false)
        }
        }else{          
          firesound.setLoop(false)
        }
  
  }
  
  function spawnClouds(a){
       
        //for(var i = 0; i < a; i++){
          if(frameCount % 30 == 0){
            clouds.push(new Cloud(width + 120,random(80,height - 80),180,132,random(0,10)));  

          }
                
        //}

  }
  
   function cloudFunctions(){
    for(var i = clouds.length - 1; i >= 0; i--){     
    
      if(clouds[i].lifeTime <= 0){
        clouds.splice(i,1);      
      }

    }
    for(var cloud of clouds){
      cloud.display(cloud1Image);   
      cloud.update(-3.6); 
      //cloud.reset(); 
    }
  
  }
  
  function createShot(maxShot){
    for(var i = 0; i < maxShot + 1; i++){
      shotArray.push(new Shot(plane1.x,plane1.y));
       //shotArray.push(new Shot(random(10,100),random(0,height)));     
      }
  
  }
  
  function shotFunction(){
    for(var i = 0; i < shotArray.length; i++){
      shotArray[i].display();
      shotArray[i].update();

        }
  
  }

  function mouseOver(obj){
    var a = obj.x  - (obj.w/2);
    var b = obj.x  + (obj.w/2);
    var c = obj.y  - obj.h/2;
    var d = obj.y  + obj.h/2;
    if((mouseX > a)&&(mouseX < b)&&(mouseY > c)&&(mouseY < d)){
      return true
    }

  }

  function createButton1(){
 
    button1 = new ButtonObj(width - 50, height - 25, 100,50);
    button2 = new ButtonObj( 90, height - 25, 100,50);
  }


  //Setting up
  function initialTextAndButtonDisplay(){
    push();
    fill(255, 163, 26);
    textSize(60)
    text("Plane Game!",width/2 - 200,height/2);
      button1.initialDisplay(width - 90 , height -20);
      button2.guideDisplay( 55 , height - 18);

    pop();
  }

  function guideDisplay(){
 
    push();
    colorMode(HSB);
    fill(Math.round(highlight/2),255,highlight);

    textAlign(CENTER);

    textSize(60);
    text("𝓒𝓸𝓷𝓽𝓻𝓸𝓵𝓼:",width/2,60)
   
    fill(highlight,255,255);
    textSize(40);   
    text("Use ''Up'' and ''Down'' arrow keys to control",width/2 - 10,300);
    text("Use ''Right'' mouse-button to shoot",width/2,350);
    text("Press ''enter'' to start",width/2,400);
    if(numTrigger == false){
      highlight+=0.8;
    }
    else{
      highlight-=0.8;
    }

    if(highlight > 255){
      numTrigger = true;
    }else if(highlight < 0){
      numTrigger = false;
    }

    pop();

   // if(keyWentDown("space")){
      //currentLevel = 1;
    //}
 
  }

  //Button for level 1 and above
  function levelButton(){
   
    button1.displayForLevel(width - 90 , height -20);
 
  }

function displayObjects(level){

if(level === 1){
  levelOneFunction();
}
if(level === 2){
  levelTwoFunction();
}
if(level === 3){
  levelThreeFunction();
}
if(level === 4){
  levelFourFunction();
}
if(level === 5){
  levelFiveFunction();
}


}

 //Text function to change level
 function displayLevel(level){
    push();
    fill (255, 163, 26);
    textSize(20);

  
    textFont('Brush Script MT');
    text("Level: " + level, width - 80,50)
    pop();
 }

 function meetLevelOneCriteria(){
   if(currentLevel == 1){
    if(plane2.dead() === true){  
      return true;
     }
   }
  
 }

 function meetLevelTwoCriteria(){
  if(currentLevel == 2){  
    if(plane2.dead() === true){
      return true;
    }
   }

 }
 function meetLevelThreeCriteria(){
  if(currentLevel == 3){  
    if( (plane2.dead() === true) && (plane3.dead() === true) ){
      return true;
    }
   }

 }
 function meetLevelFourCriteria(){
  if(currentLevel == 4){  
    if( (plane2.dead() === true) && (plane3.dead() === true) ){
      return true;
    }
   }

 }

 function endGame(){
   if(currentLevel == 6){
    background("#262626");
    push();
    colorMode(HSB)
    textSize(100);
    fill(highlight,255,255);
    text("𝕲𝖆𝖒𝖊",width/2 - 280,height/2);
    fill(255,255,highlight);
    text("𝕺𝖛𝖊𝖗",width/2 ,height/2);
    pop();
    if(numTrigger == false){
      highlight+=0.8;
    }
    else{
      highlight-=0.8;
    }

    if(highlight > 255){
      numTrigger = true;
    }else if(highlight < 0){
      numTrigger = false;
    }
   }
 }

 function spawnRain(){

  for(var i = 0; i < 4; i++){
    rainsFar.push(new Rain(random(width),-random(0,20),random(3,6),random(1,2)));
  
  }
    for(var i = rainsFar.length-1; i >= 0; i--){
     if(rainsFar[i].y > height){  
      rainsFar.splice(i,1);
     }
    }

    for(var i = 0; i < 2; i++){
      rainsClose.push(new Rain(random(width),-random(0,20),random(4,7),random(2,3)));
    
    }
    for(var i = rainsClose.length-1; i >= 0; i--){
     if(rainsClose[i].y > height){
      rainsClose.splice(i,1);
     }
    } 
     for( var rain of rainsClose){
      rain.move();
    }
    
    for( var rain of rainsFar){
      rain.update();
      rain.move();
    }
}

function rainCloseDisplay(){
  for( var rain of rainsClose){
    rain.display();

  }
}
function rainFarDisplay(){
  for( var rain of rainsFar){
    rain.display();

  }
}






