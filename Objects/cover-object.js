class objectCover{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.angleConstant = 1;
        this.image = loadImage('Images/cover-edited.png');
    }
    display(){
        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        rotate(this.angle)
        image(this.image,0,0,this.w,this.h);
        pop();

    }
    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.angle++
        //this.angle*=this.angleConstant;

    }
    bounce(){
         //Left side
         if(this.x - this.w/2 <= 0){
            this.xSpeed *= -1;
            //this.x = width;
           // this.angleConstant*=-1;
        }
        //Right side
        if(this.x + this.w/2 >= width){
            this.xSpeed *= -1;
            //this.x = 0;
           // this.angleConstant*=-1;

        }
        //Top side
        if(this.y - this.h/2 <= 0){
            this.ySpeed *= -1;
           // this.y = height;
           // this.angleConstant*=-1;

        }
        //Bottom side
        if(this.y + this.h/2 >= height){
            this.ySpeed *= -1;
           // this.y = 0;
            //this.angleConstant*=-1;

        }
    }
    move(limit){
        //this.xSpeed = limit * cos(this.angle);
        //this.ySpeed = limit * sin(this.angle);

    }
}