class Particle{
    constructor(x,y){
       this.x = x;
       this.y = y;
       this.r = 26;
       this.velocityX = random(-1.8,1.8);
       this.velocityY = random(-2,-0.5);       
       this.alpha = 255;
    }

    update(){

        this.x += this.velocityX;
        this.y += this.velocityY;

    }

    fade(){
        this.alpha -= (19.7);
    }

    destroy(){
        if(this.alpha < 0){
            return true
        }
    }

    display(){
        push();
        noStroke();
        fill(240, 70, 20,this.alpha);
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.r,this.r);
        pop();
    }
}