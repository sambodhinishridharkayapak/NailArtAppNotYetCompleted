var cl_clickables=[];
var undo;

var myUndoRedo=undoRedo(200,obj_save_or_restore);
var redo;

function Game()
{
  this.setup=function()
  {
    createCanvas(800,550);
   engine = Engine.create();
   world = engine.world;

   box1=new Clickable();
   box1.color="#F0D8DD";
   box1.stroke="255";
   box1.locate(70,30);
   box1.resize(70,70);
   box1.textColor="#F0D8DD";
   
   box2=new Clickable();
   box2.color="#D7518E";
   box2.stroke="255";
   box2.locate(70,130);
   box2.resize(70,70);
   box2.textColor="#D7518E"
   

   box3=new Clickable();
   box3.color="#D39CBD";
   box3.stroke="255";
   box3.locate(70,230);
   box3.resize(70,70);
   box3.textColor="#D39CBD"
  


   box4=new Clickable();
   box4.color="#E81F1E";
   box4.stroke="255";
   box4.locate(70,330);
   box4.resize(70,70);
   box4.textColor="#E81F1E";
   


   box5=new Clickable();
   box5.color="#F28448";
   box5.stroke="255";
   box5.locate(70,430);
   box5.resize(70,70);
   box5.textColor="#F28448";
   


   gol1=new Clickable();
   gol1.color="#ffffff10";
   gol1.stroke="#ffffff10";
   gol1.locate(675,50);
   gol1.resize(50,50);
   gol1.textColor="#ffffff10"
   gol1.image=barbImg;
   
  

   gol2=new Clickable();
   gol2.color="#ffffff10";
   gol2.stroke="#ffffff10";
   gol2.locate(665,150);
   gol2.resize(90,50);
   gol2.textColor="#ffffff10"
   gol2.image=beachImg;
   


   gol3=new Clickable();
   gol3.color="#ffffff10";
   gol3.stroke="#ffffff10";
   gol3.locate(660,240);
   gol3.resize(70,70);
   gol3.textColor="#ffffff10"
   gol3.image=elsa2Img;
   


   gol4=new Clickable();
   gol4.color="#ffffff10";
   gol4.stroke="#ffffff10";
   gol4.locate(660,350);
   gol4.resize(80,50);
   gol4.textColor="#ffffff10"
   gol4.image=studyingImg;
   

   

   gol5=new Clickable();
   gol5.color="#ffffff10";
   gol5.stroke="#ffffff10";
   gol5.locate(570,420);
   gol5.resize(430,260);
   gol5.textColor="#ffffff10";
   gol5.image=kittyImg;
   

   undo=new Clickable();
   undo.color="#ffffff10";
   undo.stroke="#ffffff10";
   undo.locate(700,2);
   undo.resize(40,40);
   undo.textColor="#ffffff10"
   undo.image=undoImg;
   
   
   redo=new Clickable();
   redo.color="#ffffff10";
   redo.stroke="#ffffff10";
   redo.locate(740,2);
   redo.resize(40,40);
   redo.textColor="#ffffff10"
   redo.image=redoImg;
   

   undo.onPress = function(){
   myUndoRedo.undo();

   }
   box1.onPress = function(){
    console.log("Wow ! You choosed PINK ! I also love it !");
    nail1.addImage(pinknail1);
    nail1.scale = 0.7;
    nail1.x=486;
    nail1.y=191;
    //myUndoRedo.save();
    

    nail2.addImage(pinknail2)
    nail2.scale = 0.7;
    nail2.x=416;
    nail2.y=233;

    nail3.addImage(pinknail3)
    nail3.scale = 0.7;
    nail3.x=345;
    nail3.y=200;

    nail4.addImage(pinknail4)
    nail4.scale = 0.7;
    nail4.x=245;
    nail4.y=148;
    }
  box2.onPress = function(){
    console.log("Wow ! You choosed ROUGE PINK ! Interesting !");
    nail1.addImage(darkpinknail1);
    nail1.scale = 0.1;
    nail1.x=481;
    nail1.y=200;

    nail2.addImage(darkpinknail2)
    nail2.scale = 0.1;
    nail2.x=413;
    nail2.y=240;

    nail3.addImage(darkpinknail2)
    nail3.scale = 0.1;
    nail3.x=343;
    nail3.y=217;
    
    nail4.addImage(darkpinknail4)
    nail4.scale = 0.1;
    nail4.x=242;
    nail4.y=160;

    }
  box3.onPress = function(){
    console.log("Wow ! You choosed PURPLE ! What a choice buddy !");
    nail1.addImage(purplenail1);
    nail1.scale = 0.5;
    nail1.x=413;
    nail1.y=225;

    nail2.addImage(purplenail2)
    nail2.scale = 0.5;
    nail2.x=347;
    nail2.y=265;

    nail3.addImage(purplenail3)
    nail3.scale = 0.5;
    nail3.x=275;
    nail3.y=238;
    
    nail4.addImage(purplenail4)
    nail4.scale = 0.5;
    nail4.x=177;
    nail4.y=175;

   }
  box4.onPress = function(){
    console.log("Wow ! You choosed RED ! Glad to know that !");
   nail1.addImage(rednail1);
  nail1.scale = 0.02;
    nail1.x=480;
    nail1.y=177;

    nail2.addImage(rednail2)
    nail2.scale = 0.02;
    nail2.x=410;
    nail2.y=210;

   nail3.addImage(rednail3)
    nail3.scale = 0.02;
    nail3.y=195;
    nail3.x=340;
    
    nail4.addImage(rednail4)
    nail4.scale = 0.02;
    nail4.y=137;
    nail4.x=240;

   }
  box5.onPress = function(){
    console.log("Wow ! You choosed ORANGE ! You are an amazing nail artist !");
    nail1.addImage(orangenail1);
    nail1.scale = 0.4;
    nail1.x=406;
    nail1.y=140;

    nail2.addImage(orangenail2)
    nail2.scale = 0.4;
    nail2.x=340;
    nail2.y=180;

    nail3.addImage(orangenail2)
    nail3.scale = 0.4;
    nail3.y=155;
    nail3.x=269;
    
    nail4.addImage(orangenail4)
    nail4.scale = 0.4;
    nail4.y=93;
    nail4.x=170;
  
   }


  gol1.onPress = function(){
  sticker11 = createSprite(477,198,20,20);
  sticker11.addImage(barbImg);
  sticker11.scale = 0.08;

  sticker12 = createSprite(410,234,20,20);
  sticker12.addImage(barbImg);
  sticker12.scale = 0.08;

  sticker13 = createSprite(343,220,20,20);
  sticker13.addImage(barbImg);
  sticker13.scale = 0.08;

  sticker14 = createSprite(237,157,20,20);
  sticker14.addImage(barbImg);
  sticker14.scale = 0.08;
  }


  gol2.onPress = function(){
  sticker21 = createSprite(479,198,20,20);
  sticker21.addImage(beachImg);
  sticker21.scale = 0.03;

  sticker22 = createSprite(412,236,20,20);
  sticker22.addImage(beachImg);
  sticker22.scale = 0.03;

  sticker23 = createSprite(343,220,20,20);
  sticker23.addImage(beachImg);
  sticker23.scale = 0.03;

  sticker24 = createSprite(243,160,20,20);
  sticker24.addImage(beachImg);
  sticker24.scale = 0.03;
  }
  gol3.onPress = function(){
    sticker31 = createSprite(483,205,20,20);
    sticker31.addImage(elsa2Img);
    sticker31.scale = 0.05;

    sticker32 = createSprite(412,240,20,20);
    sticker32.addImage(elsa2Img);
    sticker32.scale = 0.05;
  
    sticker33 = createSprite(343,220,20,20);
    sticker33.addImage(elsa2Img);
    sticker33.scale = 0.05;
  
    sticker34 = createSprite(240,164,10,50);
    sticker34.addImage(elsa2Img);
    sticker34.scale = 0.05;
  }
  gol4.onPress = function(){
    sticker11 = createSprite(480,198,20,20);
  sticker11.addImage(studyingImg);
  sticker11.scale = 0.01;

  sticker12 = createSprite(410,234,20,20);
  sticker12.addImage(studyingImg);
  sticker12.scale = 0.01;

  sticker13 = createSprite(343,220,20,20);
  sticker13.addImage(studyingImg);
  sticker13.scale = 0.01;

  sticker14 = createSprite(240,157,20,20);
  sticker14.addImage(studyingImg);
  sticker14.scale = 0.01;
  }
  gol5.onPress = function()
  {
    sticker51 = createSprite(509,229,10,20);
  sticker51.addImage(kittyImg);
sticker51.scale = 0.08;

  sticker52 = createSprite(444,264,10,20);
  sticker52.addImage(kittyImg);
  sticker52.scale = 0.08;

  sticker53 = createSprite(375,250,10,20);
  sticker53.addImage(kittyImg);
  sticker53.scale = 0.08;

  sticker54 = createSprite(277,199,10,20);
  sticker54.addImage(kittyImg);
  sticker54.scale = 0.08;
  }


  detector = createSprite(460,40,30,30);
  detector.scale = 1.9;
  detector.addImage(handImg);

  nail1 = createSprite(481,200,10,10);
  nail1.addImage(plainnail);
  nail1.scale = 0.2;

  nail2 = createSprite(415,240,10,10);
  nail2.addImage(plainnail2);
  nail2.scale = 0.2;

  nail3 = createSprite(345,220,10,10);
  nail3.addImage(plainnail2);
  nail3.scale = 0.2;

  nail4 = createSprite(244,160,10,10);
  nail4.addImage(plainnail4);
  nail4.scale = 0.2;

  

  }
  this.draw = function()
  {
    background(bg)
 Engine.update(engine);

 textSize(20);
 fill(255);
 textFont("ITALIC");
 stroke(170,135,195);
 strokeWeight(4);
 text("Barbie",670,120);

 textSize(20);
 fill(255);
 textFont("ITALIC");
 stroke(170,135,195);
 strokeWeight(4);
 text("Beach",670,220);

 textSize(20);
 fill(255);
 textFont("ITALIC");
 stroke(170,135,195);
 strokeWeight(4);
 text("Elsa",680,320);

 textSize(20);
 fill(255);
 textFont("ITALIC");
 stroke(170,135,195);
 strokeWeight(4);
 text("Study",670,420);

 textSize(20);
 fill(255);
 textFont("ITALIC");
 stroke(170,135,195);
 strokeWeight(4);
 text("Hello Kitty",650,520);

box1.draw();
box2.draw();
box3.draw();
box4.draw();
box5.draw();

gol1.draw();
gol2.draw();
gol3.draw();
gol4.draw();
gol5.draw();

undo.draw();
redo.draw();

 drawSprites();
 

  }
  
}
