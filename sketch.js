const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg;
var nail, nailImg;
var detector;
var nail1, nail2, nail3, nail4;
var box1, box2, box3, box4, box5;
var gol1, gol2, gol3, gol4, gol5;
var plainnail, plainnail2, plainnail3, plainnail4;
var pinknail1, pinknail2, pinknail3, pinknail4;
var barbImg, beachImg, elsaImg,elsa2Img, kittyImg, studyingImg;
var sticker11, sticker12, sticker13, sticker14;
var sticker21, sticker22, sticker23, sticker24;
var sticker31, sticker32, sticker33, sticker34 ;
var sticker41, sticker42, sticker43, sticker44;
var sticker51, sticker52, sticker53, sticker54;
var darkpinknail1, darkpinknail2, darkpinknail4;
var rednail1, rednail2, rednail3, rednail4;
var undoImg, redoImg;


function preload()
{
    bg = loadImage("glitter.png");
   barbImg = loadImage("barbie.png");
   beachImg = loadImage("beach.png");
   elsaImg = loadImage("elsa.png");
   kittyImg = loadImage("kitty.png");
   elsa2Img = loadImage("elsa11.png");
  studyingImg = loadImage("studying.png");
    //nailImg1 = loadImage("hotpinknail.png");
    //nailImg2 = loadImage("darkpinknail.png");
    //nailImg3 = loadImage("purplenail.png");
    //nailImg4 = loadImage("rednail.png");
    //nailImg5 = loadImage("orangenail.png");
    handImg = loadImage("hand.png");
    plainnail = loadImage("plainnail1.png");
    plainnail2 = loadImage("plainnail2.png");
    plainnail3 = loadImage("plainnail3.png");
    plainnail4 = loadImage("plainnail4.png");
    pinknail1 = loadImage("pinknail11.png");
    pinknail2 = loadImage("pinknail2.png");
    pinknail3 = loadImage("pinknail3.png");
    pinknail4 = loadImage("pinknail4.png");

    darkpinknail1 = loadImage("pink1.png");
    darkpinknail2 = loadImage("pink2.png");
    darkpinknail4 = loadImage("pink4.png");

    purplenail1 = loadImage("purple1.png");
    purplenail2 = loadImage("purple2.png");
    purplenail3 = loadImage("purple3.png");
    purplenail4 = loadImage("purple4.png");

    rednail1 = loadImage("rednail1.png");
    rednail2 = loadImage("rednail2.png");
    rednail3 = loadImage("rednail3.png");
    rednail4 = loadImage("rednail4.png");

    orangenail1 = loadImage("orange1.png");
    orangenail2 = loadImage("orange2.png");
    orangenail4 = loadImage("orange4.png");
    
    undoImg = loadImage("undobutton.png");
    redoImg = loadImage("redobutton.png");
}
function setup()
{
    createCanvas(800,550);

    var mgr = new SceneManager();
    mgr.bg = bg; // inject bkImage property
    mgr.wire();
    mgr.showScene( Intro );

    
    }