function createFire(x,y){

    scale = 2;

  fireSource = new Launcher(x,y);
}

function callFunctions(){
    push();
    //Creating smoke
        fireSource.createSmoke(3);
        fireSource.smokeRemove();
        fireSource.smokeDisplay();
        fireSource.smokeIncrease();
    //Creating fire

      fireSource.createParticles(2)
      fireSource.particleRemove();
      fireSource.particleDisplay();


    pop();
 
}

function changePos(x,y){
fireSource.x = x;
fireSource.y = y;
}