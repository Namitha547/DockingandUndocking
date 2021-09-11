var hasDocked=false;
function preload(){
  Iss=loadImage("iss.png")
  SpaceCraft1=loadImage("spacecraft1.png")
  SpaceCraft2=loadImage("spacecraft2.png")
  SpaceCraft3=loadImage("spacecraft3.png")
  SpaceCraft4=loadImage("spacecraft4.png")
  SpaceBackground=loadImage("spacebg.jpg")
}
function setup() {
  createCanvas(2000,700);
  spaceship1=createSprite(1000, 600, 50, 50);
 internationalss= createSprite(1000,350,60,70);
 spaceship1.addImage(SpaceCraft1);
 spaceship1.scale=0.5;
 internationalss.addImage(Iss);
 internationalss.scale=2;


}

function draw() {

  background(SpaceBackground);  
  if (keyDown("right")){
  spaceship1.x=spaceship1.x+1;
  spaceship1.addImage(SpaceCraft3);
  }
  text(mouseX,100,100)
  text(mouseY,100,100)

  if (keyDown("left")){
    spaceship1.x=spaceship1.x-1;
    spaceship1.addImage(SpaceCraft4);
    }
    if (keyDown("up")){
      spaceship1.y=spaceship1.y-1;
      spaceship1.addImage(SpaceCraft2);
      }
  
  if(!hasDocked){
    spaceship1.x=spaceship1.x+ random(-1,1)
  }
  if(spaceship1.x<=internationalss.x-10 && spaceship1.y<=internationalss.y+50){
hasDocked=true;
text("Docking Successfull!",1200,620);
  }
  drawSprites();

}
