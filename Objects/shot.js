class Shot{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = 6;
    this.h = 2;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.angle = 0;
    
  }
  update(){    
    this.x += this.xVelocity; 
    this.y += this.yVelocity; 
  }
  
  move(max){    
       this.xVelocity = max;      
  }
  moveToPos(x,w){
    if(change === true){
      if(this.x<width){
        this.x = x + w/2 - 50; 
      }
      console.log("change:"+change)
    }
    change = false
   
  }
  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    noStroke();
    fill(255, 255, 0);
    rect(0,0,this.w,this.h);
    pop();
  }
  changeAngle(obj){
    if(this.x<obj.x+obj.w/2){
      this.angle = obj.angle;
      
      this.yVelocity = 35 * sin(this.angle);
      this.xVelocity = 35 * cos(this.angle);

    }
  
  }




 
  
}