class Cloud{
    constructor(x,y,w,h,num){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xVelocity = 0;
        this.image = null;
        this.choose = num;
        this.tintValue = random(220,20);
        this.lifeTime = 10;
    }
    display(imageName) {   
        this.image = imageName
        push();  
          
        translate(this.x, this.y);  

        if(currentLevel >= 4){
            if(this.choose > 5){
                image(cloud1DarkImage, 0, 0, this.w, this.h);
            }
            else {            
                image(cloud2DarkImage, 0, 0, this.w + 60 , this.h);
            }
           
        }

        if(currentLevel < 4){
            if(this.choose > 5){
                image(cloud1Image, 0, 0, this.w, this.h);
            }
            else {            
                image(cloud2Image, 0, 0, this.w + 60 , this.h);
            }
           
        }

        pop();
      }
    
    update(val){
        this.xVelocity = val;
        this.x += this.xVelocity;
        

        if(this.x < -120){
            this.lifeTime = 0;
        }
    }
    reset(){       

        if(this.x < ( -10-( this.w/2 ) ) ){
            this.x = width + (this.w/2) + 200           
            
        }

        if(this.x > (width+ (this.w/2) + 100)){
            this.y = random(0,width);
        }
    }
}