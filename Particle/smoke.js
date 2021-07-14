class Smoke{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 30;
        this.velocityX = random(-2,2);
        this.velocityY = random(-3.5,-0.5);       
        this.alpha = 255;
     }
 
     update(){
 
         this.x += this.velocityX;
         this.y += this.velocityY;
 
     }
 
     fade(){
         this.alpha -= (17.2);
     }
 
     destroy(){
         if(this.alpha < 0){
             return true
         }
     }

     increaseSize(){
        if(this.r < 64){
            this.r += 0.5
        }
        if(this.r > 64){
            this.r = 64
        }
     }
 
     display(){
        push();
         noStroke();
         fill(12,12,12,this.alpha);
         ellipseMode(CENTER);
         ellipse(this.x,this.y,this.r,this.r);
         pop();
     }
}