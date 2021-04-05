var catSprite , mouseSprite , backgroundSprite;
var catImageStart , catAnime , catImageEnd;
var mouseImageStart , mouseAnime , mouseImageEnd;
var backgroundImage;

function preload() {
    //load the images here
catImageStart = loadAnimation("cat1.png");
catAnime = loadAnimation("cat2.png","cat3.png");
catImageEnd = loadAnimation("cat4.png");

mouseImageStart = loadAnimation("mouse1.png");
mouseAnime = loadAnimation("mouse2.png","mouse3.png");
mouseImageEnd = loadAnimation("mouse4.png");

backgroundImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
backgroundSprite = createSprite(500,400,20,20);
backgroundSprite.addImage(backgroundImage);

catSprite = createSprite(800,650,0,0)
catSprite.addAnimation("cat in the start ",catImageStart);
catSprite.addAnimation("cat moving towards the mouse ",catAnime);
catSprite.addAnimation("cat stopping",catImageEnd);
catSprite.scale=0.14;
catSprite.debug=true;
catSprite.setCollider("rectangle",0,0,1000,1000);

mouseSprite = createSprite(170,650,0,0)
mouseSprite.addAnimation("mouse in the start ",mouseImageStart);
mouseSprite.addAnimation("mouse dancing ",mouseAnime);
mouseSprite.addAnimation("mouse stopping",mouseImageEnd);
mouseSprite.scale=0.12;
mouseSprite.debug =true;
mouseSprite.setCollider("rectangle",0,0,1000,1000);




}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
keyPressed();


if(catSprite.x - mouseSprite.x < mouseSprite.width/2 + catSprite.width/2 ){
mouseSprite.changeAnimation("mouse stopping",mouseImageEnd);
catSprite.changeAnimation("cat stopping",catImageEnd);
catSprite.velocityX=0;
mouseSprite.velocityX=0;
}





    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW ){
catSprite.changeAnimation("cat moving towards the mouse ", catAnime)
catSprite.velocityX=-3;
mouseSprite.changeAnimation("mouse dancing ",mouseAnime);
catSprite.scale=0.16;
mouseSprite.scale=0.12;
}





}
