class Plane {

  constructor(x, y, w, h, hp) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity = 0;
    this.angle = 0;
    this.displayY= true;
    this.hp = hp
    this.slowDownY = false;
    this.aiTrigger = true;
    this.sound = firesound
    

  }

  slowDown(val){
    if(this.aiTrigger === true){
      this.velocity = this.velocity + (-this.velocity) / val ;
    }
   
  }

  update(val) {

    this.y += this.velocity;
    if(val == 1){
  if( (this.y < 30) || (this.y> (height-30) ) ){
    this.slowDownY = false;
  }
  else if( (this.y > 30) && (this.y < (height-30) ) ){
    this.slowDownY = true;
  }

  if(this.slowDownY === true){
    this.slowDown(5);
  }
}
 
//Making the plane tip down and fall;

if(Math.round(this.hp) <= 0){
  if(this.angle < 90){
    this.angle += 0.4;
    
  }
  if(this.y < height+100){
    this.velocity = this.angle/4;
  }


 
}

Math.round(this.hp)

  }

  display(imageName) {   
    var angle = this.angle;
    push();    
    translate(this.x, this.y);
    rotate(angle)
    //if(this.displayY === true){ 
    image(imageName, 0, 0, this.w, this.h);
    //}
    pop();
  }

  movement() {
    //Up Movement
    if (keyIsDown(UP_ARROW)) {
      if (this.velocity > -8) {
        this.velocity -= 0.36;
      }

      if (this.angle > -30) {
        this.angle = this.angle + ((-30 - this.angle) / 17);
      }
    } //Down movement
    else if (keyIsDown(DOWN_ARROW)) {
      if (this.velocity < 21) {
        this.velocity += 0.76;
      }
      if (this.angle < 64) {
        this.angle = this.angle + ((64 - this.angle) / 15);
      }
    }//Slow down 
    else {
      this.angle = this.angle + ((0 - this.angle) / 19);
      if (this.velocity != 0) {
        this.velocity = this.velocity + (-this.velocity) / 13
      }

    }

  }
  aiMovement(a) {

    if(this.aiTrigger === true){
      this.velocity = (a.velocity * (-1));
    }
   
  }

    dodge(a){
      var speed = a.velocity;
      var yPos = a.y;

    if( (this.y < (yPos + 10) ) && (this.y > (yPos - 10)) ){
      this.velocity -= 0.8;
    }else{
      if((this.y < yPos)&&(speed < 0)){
        if((this.y < 15) || (this.y > (width-15) )){
          this.velocity = -this.velocity;
      
        } 
        this.velocity++;   
      }
      else if((this.y > yPos)&&(speed > 0)){
        if((this.y < 15) || (this.y > (width-15) )){
          this.velocity = -this.velocity;
          
        } 
        this.velocity--;
      }
    }


    }
    seek(a){
      if((a.y > 10)&&(a.y < height-10)){
        this.velocity = this.velocity + (a.y - this.y)/150;
      }

    }

  shoot() {    

    if(button1.mouseNotOn()){

      //shotArray[count-1].move(25);
      shotArray[count-1].changeAngle(this);
      
      if(count===shotArray.length){
        count=shotArray.length-1;
       
      }
      if (count <= shotArray.length-1) {
        count++;
      }
    }else{
      console.log(button1)
    }

         
  }

  setBullets() {
    for (var i = 0; i < shotArray.length; i++) {
      if(shotArray[i].x === this.x){
        shotArray[i].y = this.y;
      }
    }
  }

  destroy(y){
    this.hp -= y;
    if(this.hp <= 0){
      this.displayY = false;
    }
    this.aiTrigger = false;
    }

  



  reSpawn(x,y,vel){
    this.x = x;
    this.y = y;
    
    if(this.y<0){
      this.velocity += vel;    
    }
    else if(this.y>height){
      this.velocity -= vel;
    }
    else {
      
      this.slowDownY = true;
    }
   
   
  }

  createFire(){
    push();
    if((this.y > 0)&&(this.y < height + this.w)){
      changePos(this.x,this.y - 20);   
        if(Math.round(this.hp) <= 0){
          callFunctions();
        }
    }
 
    pop();
  }

  dead(){
    if(Math.round(this.hp) <= 0){
      if((this.y > height + this.w + 50)||(this.y < 0 - this.w - 50)){
        return true;
      }
    }
  
  }

  resetPlane(x,y,hp){
    this.velocity = 0;
    this.angle = 0;
    this.displayY= true;
    this.hp = hp
    this.slowDownY = false;
    this.aiTrigger = true;
    this.x = x;
    this.y = y;
  }

  aiShoot(a){
    if((this.y > a.y - 30)&&(this.y < a.y + 30)){
      if(plane1Hp > 0){
        secondShot();
      }else{
        firesound.setLoop(false)
      }
     // currentLevel = 6;
    }
  }



 

}