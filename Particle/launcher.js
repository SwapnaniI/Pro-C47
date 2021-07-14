class Launcher{
    constructor(x,y){
        this.x = x;
        this.y = y;

    }

    createParticles(max){
        for(var i = 0; i < max; i++){
            particles.push(new Particle(this.x,this.y))
          }
    }

    particleRemove(){
        for(var i = particles.length-1; i >= 0 ; i--){
            if(particles[i].destroy() === true){
              particles.splice(i,1)
            }
           }
    }

    particleDisplay(){
        for(var i = 0; i <particles.length; i++){
            particles[i].display();
            particles[i].update();
            particles[i].fade();
        
          }
    }

    createSmoke(max){
        for(var i = 0; i < max; i++){
            smokeArray.push(new Smoke(this.x,this.y))
          }
    }

    smokeRemove(){
        for(var i = smokeArray.length-1; i >= 0 ; i--){
            if(smokeArray[i].destroy() === true){
                smokeArray.splice(i,1)
            }
           }
    }

    smokeDisplay(){
        for(var i = 0; i <smokeArray.length; i++){
            smokeArray[i].display();
            smokeArray[i].update();
            smokeArray[i].fade();
        
          }
    }

    smokeIncrease(){
        for(var i = 0; i <smokeArray.length; i++){
            smokeArray[i].increaseSize();
          }
    }

}