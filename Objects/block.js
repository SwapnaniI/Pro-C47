class Block{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xSpeedConststsnt = 1;
        this.ySpeedConststsnt = 1;
        this.image = loadImage('Images/go.png');
        this.alpha = 0;
    }
    display(){
        push();
        tint(255,this.alpha);
        if(this.alpah != 255){
            this.alpha++;
        }
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.w,this.h);
        pop();
    }
    move(xSpeed,ySpeed){
        this.x += (this.xSpeedConststsnt * xSpeed);
        this.y += (this.ySpeedConststsnt * ySpeed);
        //Left side
        if(this.x - this.w/2 <= 0){
            this.xSpeedConststsnt *= -1;
        }
        //Right side
        if(this.x + this.w/2 >= width){
            this.xSpeedConststsnt *= -1;
        }
        //Top side
        if(this.y - this.h/2 <= 0){
            this.ySpeedConststsnt *= -1;
        }
        //Bottom side
        if(this.y + this.h/2 >= height){
            this.ySpeedConststsnt *= -1;
        }
    }

}