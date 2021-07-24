function Intro()
{
  this.draw=function(){
    background(bg);


    textSize(40);
    fill(255);
    textFont("ITALIC");
    stroke(170,135,195);
    strokeWeight(4);
    text("Welcome to the Virtual Manicure Game !", 60,150);


    textSize(30);
    fill(255);
    textFont("ITALIC");
    stroke(170,135,195);
    strokeWeight(4);
    text("Press(1)to play !", 280,200);
  }
  this.keyPressed=function()
 {
      if(key == '1')
      {
          this.sceneManager.showScene(Game);
       }
}
}