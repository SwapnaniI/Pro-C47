


function createLevelOne(){
    clear();
    bg1 = 82;
    bg2 = 153;
    bg3 = 224;
        createPlane(400,height/2,600,30,700,-20);

       // spawnClouds(3,3.6);
    
        createShot(100);    
    
}


function levelOneFunction(){
    //cloudFunctions();



    if((plane1Hp < 0 && plane1.y > height + 100)||(count == 101)){

      if(fade > 0){
        push();
        imageMode(CENTER)
        tint(255,fade);
        translate(plane2.x,plane2.y);
        rotate(plane2.angle);
        image(p51Image,0,0,plane2.w,plane2.h);
        pop();
        fade--;
      }  

      gameOverTextdisplay();
      block.display();
      block.move(4,4);


    firesound.pause();
  }  
  else{
    push();
    textSize(25)
    fill(255, 255, 0);
    text("Tip: Take out the plane, who is anaware of you",250,100);
    if(plane2.hp < 0 ){
      push();
      fill("#ffd11a")
      textSize(35)
      textAlign(CENTER);
      text("𝘎𝘳𝘦𝘢𝘵! 𝘕𝘰𝘸 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘱𝘳𝘰𝘤𝘦𝘦𝘥",500,180);
      pop();
    }
    pop();


    plane2.display(p51Image);

    displayScore();

    planeFunctions();

    shotFunction();



  }

}

function createLevelTwo(){
    clear();

    plane2.resetPlane(600,height/2 - 40,1);
    plane1.resetPlane(300,height/2 + 40,1)
 
    for (var i = 0; i < shotArray.length; i++) {
      
          shotArray[i].x= plane1.x;
         
     
      }

}

function levelTwoFunction(){



      if((plane1Hp < 0 && plane1.y > height + 100)||(count == 101)){

        if(fade > 0){
          push();
          imageMode(CENTER)
          tint(255,fade);
          translate(plane2.x,plane2.y);
        rotate(plane2.angle);
        image(p51Image,0,0,plane2.w,plane2.h);
          pop();
          fade--;
        }  
  
        gameOverTextdisplay();
        block.display();
        block.move(4,4);
  
  
      firesound.pause();
    }  
    else{
    
      push();

      textSize(25)
      fill(255, 255, 0);    
      text("Tip: Try to shoot the plane down while it is actively manuevering",200,100);
      if(plane2.hp < 0 ){
        push();
      fill("#ffd11a")
      textSize(35)
      textAlign(CENTER);
      text("𝘎𝘳𝘦𝘢𝘵! 𝘕𝘰𝘸 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘱𝘳𝘰𝘤𝘦𝘦𝘥",500,180);
      pop();
      }
      pop();
  
      shotFunction();
  
      displayScore();
  
      plane2.aiMovement(plane1);
  
      plane2.display(p51Image);
  
      for (var i = 0; i < shotArray.length; i++) {
        if(shotArray[i].x == plane1.x){
          
      
            shotArray[i].y = plane1.y;
          }      
      }
  
        planeFunctions();
  
  
    }

}

function createLevelThree(){
    clear();

    plane2.resetPlane(700,height/2 - 100,1);
    plane1.resetPlane(400,height/2 + 40,1);
    plane3.resetPlane(700,height/2 + 100,1);

    plane3.hp = 1;

 
    for (var i = 0; i < shotArray.length; i++) {
          shotArray[i].x= plane1.x;
      }

}

function levelThreeFunction(){
    push();

   

      
    if((plane1Hp < 0 && plane1.y > height + 100)||(count == 101)){
      if(fade > 0){
        push();
        imageMode(CENTER)
        tint(255,fade);

        translate(plane2.x,plane2.y);
        rotate(plane2.angle);
        image(p51Image,0,0,plane2.w,plane2.h);

        translate(plane3.x,plane3.y);
        rotate(plane3.angle);
        image(p38Image,0,0,plane2.w,plane2.h);
        pop();
        fade--;
      } 

      gameOverTextdisplay();
      block.display();
      block.move(4,4);

  

    firesound.pause();
  }  
  else{
  
    textSize(25)
    fill(255, 255, 0);

    shotFunction();

    text("Tip: Try to shoot down both the planes",300,100);
    if(plane2.hp < 0 && plane3.hp < 0){
      push();
      fill("#ffd11a")
      textSize(35)
      textAlign(CENTER);
      text("𝘎𝘳𝘦𝘢𝘵! 𝘕𝘰𝘸 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘱𝘳𝘰𝘤𝘦𝘦𝘥",500,180);
      pop();
    }
    pop();


    plane2.display(p51Image);

         plane3.display(p38Image);
         plane3.aiMovement(plane1);
         plane3.update(1);
         plane3.createFire();

         plane2.aiMovement(plane1);


      planeFunctions();

    displayScore();


    for (var i = 0; i < shotArray.length; i++) {
      if(shotArray[i].x == plane1.x){
        
    
          shotArray[i].y = plane1.y;
        }      
    }


  }

}

function createLevelFour(){
    clear();
    plane2.resetPlane(700,height/2 - 100,1);

    plane2.w = plane3.w;
    plane2.h = plane3.h;

    plane1.resetPlane(400,height/2 + 40,1);
    plane3.resetPlane(800,height/2 + 100,1);

    plane2.hp = 1;
    plane3.hp = 1;

 
    for (var i = 0; i < shotArray.length; i++) {
          shotArray[i].x= plane1.x;
      }


}

function levelFourFunction(){



    if((plane1Hp < 0 && plane1.y > height + 100)||(count == 101)){

      if(fade > 0){
        push();
        imageMode(CENTER)
        tint(255,fade);

        translate(plane2.x,plane2.y);
        rotate(plane2.angle);
        image(p38Image,0,0,plane2.w,plane2.h);

        translate(plane3.x,plane3.y);
        rotate(plane3.angle);
        image(p38Image,0,0,plane3.w,plane3.h);

        pop();
        fade--;
      }  

      gameOverTextdisplay();
      block.display();
      block.move(4,4);


    firesound.pause();
  }  
  else{
  
  
    push();
    textSize(25)
    fill(255, 255, 0);
    
    text("Tip: Put down the two planes",300,100);
    if(plane2.hp < 0 && plane3.hp < 0){
      push();
      fill("#ffd11a")
      textSize(35)
      textAlign(CENTER);
      text("𝘎𝘳𝘦𝘢𝘵! 𝘕𝘰𝘸 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘱𝘳𝘰𝘤𝘦𝘦𝘥",500,180);
      pop();
    }
    pop();

    shotFunction();


    displayScore();

         plane3.display(p38Image);
         plane3.aiMovement(plane1);
         plane3.update(1);
         plane3.createFire();
         plane2.aiMovement(plane1);
         plane2.display(p38Image);


         for (var i = 0; i < shotArray.length; i++) {
          if(shotArray[i].x == plane1.x){
            
        
              shotArray[i].y = plane1.y;
            }      
        }
      
    planeFunctions();

    
  rainFarDisplay();


  }

}


function createLevelFive(){
    clear(); 

    plane2.resetPlane(150,height/2 - 100,1);

    plane2.w = plane3.w;
    plane2.h = plane3.h;

    plane1.resetPlane(400,height/2 + 40,1);

    plane2.hp = 1;

    plane2.w = 65 * 3.4;
    plane2.h = 22 * 3.4,1;

    for (var i = 0; i < shotArray.length; i++) {
        //shotArray[i].moveToPos(plane1.x,plane1.w);
         shotArray[i].x = plane1.x;
    
    }
  
}

function levelFiveFunction(){
    push();
    textSize(25)
    fill(255, 255, 0);


   
      if(plane1Hp>0){
        plane1.movement();
     
        plane2.seek(plane1);
      }
 
      plane1.update(0);

    if(mouseIsPressed){ 
        if(frameCount % 4 === 0){
            shotArray[count-1].move(25);
              if(count===shotArray.length){
                count=shotArray.length-1;
              }
              if (count <= shotArray.length-1) {
                count++;
              }
        }
     
        push()
        fill (244, 244, 37);

        textSize(30);
      
        textFont('Brush Script MT');
        if(count === shotArray.length){
          text("Out of ammo!",15,80)
        }
        pop()
    }
      else{
        for (var i = 0; i < shotArray.length; i++) {
          for (var i = 0; i < shotArray.length; i++) {
            if(shotArray[i].x == plane1.x){
              
          
                shotArray[i].y = plane1.y;
              }      
          }    
       }
      }

      plane2.aiShoot(plane1);

  
       //plane2.aiMovement(plane1);

    
    if(Math.round(this.hp) <= 0){
  if(this.angle < 90){
    this.angle += 0.4;
    
  }
  if(this.y < height+100){
    this.velocity = this.angle/4;
  }
 
}

 //  plane2.x = plane1.x - 200;
//  plane2.velocity = (plane1.velocity * (-1))
   


    for(var i = 0; i < 61; i++){
       // aiShotArray[i].display(); 
        aiShotArray[i].update(); 
        aiShotArray[i].y = plane2.y;      
      }

    for (var i = 0; i < shotArray.length; i++) {
      for (var i = 0; i < shotArray.length; i++) {
        if(shotArray[i].x == plane1.x){
          
      
            shotArray[i].y = plane1.y;
          }      
      }    
    }
    for (var i = 0; i < aiShotArray.length; i++) {
      //  aiShotArray[i].moveToPos(plane2.x,plane2.w);
        aiShotArray[i].y = plane2.y;

        if(isTouching(plane1,aiShotArray[i])){
          plane1Hp = -1;
        }
     
  }
  
  plane1.display(bf109Image);

  if(plane1Hp < 0){
    changePos(plane1.x,plane1.y);
    callFunctions();
    if(plane1.angle < 40){
      plane1.angle++;
    }else{
      plane1.angle+=0.3;

    }
    plane1.velocity+=0.2;
  }



  
  //plane2.aiMovement(plane1)

  plane2.update(1);

  rainFarDisplay();

  if(plane1Hp < 0 && plane1.y > height + 100){
    gameOverTextdisplay();
    block.display();
    block.move(4,4);

    if(fade > 0){
      push();
      imageMode(CENTER)
      tint(255,fade);
      image(p51Image,plane2.x,plane2.y,plane2.w,plane2.h);
      pop();
      fade--;
    }
    
  }else{
    plane2.display(p51Image);
    for(var i = 0; i < 61; i++){
      aiShotArray[i].display(); 
     
    }
  }
}