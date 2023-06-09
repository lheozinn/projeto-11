
function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();

 
}

seaImg = loadImage("sea.png");
shipImage1 = loadImage("ship-1.png")



spritName.addImage(seaImg);


//if(sea.x < 0){
  //  sea.x = sea.width/2
  //}