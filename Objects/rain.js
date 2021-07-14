class Rain{
    constructor(x,y,speed,width){
        this.x = x;
        this.y = y;
        this.speed = speed*5;
        this.width = width;
    }
    update(){
        this.y+=0.1
    }
    display(){
        push();
        stroke("#99ddff");
        if(this.speed < 7.5){
            strokeWeight(this.width);
            rect(this.x,this.y,1,10);
        }
        else{
            strokeWeight(this.width);
            rect(this.x,this.y,1,15);
        }
        fill("66ccff");
        pop()
    }
    move(){
        this.y+=this.speed;
    }
}