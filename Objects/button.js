class ButtonObj{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.highlightVar= false;
        this.mouseOverValue = false;
    }
    initialDisplay(x,y){
        push();
        strokeWeight(4);


        if(highlightVar === true){
            stroke(102, 0, 255);
        }
        else if(highlightVar === false){
            stroke(1, 255, 255)

        }
     
        noFill();
        rect(this.x,this.y,this.w,this.h);
        pop();
        textSize(15);
        text("Start Game!",x,y);
    
  
        
    }
    displayForLevel(x,y){
        push();
        strokeWeight(4);


        if(highlightVar === true){
            stroke(102, 0, 255);
        }
        else if(highlightVar === false){
            stroke(1, 255, 255)

        }
     
        noFill();
        rect(this.x,this.y,this.w,this.h);
        pop();
        textSize(15);
        text("Next Level!",x,y);
    
  
        
    }
    guideDisplay(x,y){
        push();
        strokeWeight(4);
        if(highlightVar === true){
            stroke(102, 0, 255);
        }
        else if(highlightVar === false){
            stroke(1, 255, 255)           
        }
     
        noFill();
        rect(this.x,this.y,this.w,this.h);

        pop();

        textSize(15);
        text("Controls",x,y);

    }


    highlight(){
        
        push();
        highlightVar = true;
       
        pop();
    }

    changeLevel(level){
        currentLevel = level;
    }

    mouseNotOn(){
        var a = this.x  - (this.w/2);
        var b = this.x  + (this.w/2);
        var c = this.y  - this.h/2;
        var d = this.y  + this.h/2;
        if((mouseX > a)&&(mouseX < b)&&(mouseY > c)&&(mouseY < d)){
          return false
        }else{
            return true;
        }
    }
}