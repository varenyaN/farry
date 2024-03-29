var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var  fary,faryImg;
var  song;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  engine,world;
function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	song=loadSound ("sound/JoyMusic.mp3");
	faryImg=loadAnimation ("images/fairyImage1.png","images/fairyImage2.png");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);
 
	//write code to play fairyVoice sound
song.play ();
	//create fairy sprite and add animation for fairy
fary=createSprite(200,480,10,10);
fary.addAnimation ("fairy_flote",faryImg);
fary.scale=0.1;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if (star.y > 47 && starBody.position.y > 470){
	Matter.Body.setStatic (starBody,true);
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode===RIGHT_ARROW){
		fary.x=fary.x + 20;
	}
	if (keyCode===LEFT_ARROW){
		fary.x=fary.x-20;
	}

}
