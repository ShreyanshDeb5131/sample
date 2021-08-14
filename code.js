var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Tina = createSprite(367,22,20,20);
Tina.shapeColor = "Pink";
var John = createSprite(195,309,20,20);
John.shapeColor = "Brown";
var controlroom = createSprite(380,371,10,10);
controlroom.shapeColor = "Yellow";
var controlroomlaser1 = createSprite(368,336,70,10);
controlroomlaser1.shapeColor = "Red";
var controlroomlaser2 = createSprite(336,369,10,70);
controlroomlaser2.shapeColor = "Red";
var controlroomlaserbutton = createSprite(1,372,10,10);
controlroomlaserbutton.shapeColor = "Black";
var buttonlaser = createSprite(78,350,50,10);
buttonlaser.shapeColor = "Red";
buttonlaser.velocityX=10
var wall = createSprite(120,284,300,10);
wall.shapeColor = "White";
var laser1 = createSprite(200,200,400,10);
laser1.shapeColor = "Red";
var laser2 = createSprite(200,150,400,10);
laser2.shapeColor = "Red";
var laser3 = createSprite(200,100,400,10);
laser3.shapeColor = "Red";
var laser4 = createSprite(200,50,400,10);
laser4.shapeColor = "Red";
var button1 = createSprite(1,170,10,10);
button1.shapeColor = "Black";
var button2 = createSprite(4,121,10,10);
button2.shapeColor = "Black";
var button3 = createSprite(9,68,10,10);
button3.shapeColor = "Black";
var block = createSprite(50,75,10,50);
block.shapeColor = "Blue";
var block2 = createSprite(23,95,50,10);
block2.shapeColor = "Blue";

var gameState = "serve";

function draw() {
  background("Grey")
 
 createEdgeSprites()
 buttonlaser.bounceOff(leftEdge);
 buttonlaser.bounceOff(controlroomlaser2)
 John.bounceOff(topEdge);
  John.bounceOff(rightEdge);
  John.bounceOff(leftEdge);
  John.bounceOff(wall);
 John.bounceOff(bottomEdge);
 
 if(gameState=="serve")
 {
 textSize(20)
 fill("Green")
 text("Press Space To Protect Tina",51,239);
  textSize(20)
 fill("Green")
 text("Touch The Black Buttons To Destroy Lasers",6,261);
 textSize(20)
 fill("Green")
 text("Tina",284,27);
   if(keyDown("space"))
   {
     gameState = "play"
   }  
 }
  
  if(gameState=="play")
 {
 if(keyDown("left"))
 {
 John.velocityX=-5;
 John.velocityY=0;
 }
  if(keyDown("right"))
 {
  John.velocityX=5;
 John.velocityY=0;
 }
  if(keyDown("up"))
 {
  John.velocityX=0;
 John.velocityY=-5;
 }
  if(keyDown("down"))
 {
  John.velocityX=0;
 John.velocityY=5;
 }
 if(John.isTouching(Tina))
 {
gameState = "end"
}
if(John.isTouching(controlroomlaserbutton)) 
 {
 buttonlaser.destroy()
 controlroomlaser1.destroy()
 controlroomlaser2.destroy()
  textSize(20)
 fill("Green")
 text("Go To Control Room And Touch It",51,239);
 textSize(20)
 fill("Green")
 text("Control Room",263,343);
 }  
 if(John.isTouching(buttonlaser)
 || John.isTouching(controlroomlaser1)
 || John.isTouching(controlroomlaser2)
 ||John.isTouching(laser1)
 ||John.isTouching(laser2)
 ||John.isTouching(laser3)
 ||John.isTouching(laser4))
 {
   John.velocityX=0;
   John.velocityY=0;
buttonlaser.velocityX=0;
 buttonlaser.velocityY=0;
 textSize(20)
 fill("Green")
 text("John Is Caught!",51,239);

 }
 if(John.isTouching(controlroom))
 {
 laser1.destroy()
  textSize(20)
 fill("Green")
 text("Go To The Next Button",51,239);
 }
 if(John.isTouching(button1))
 {
 laser2.destroy()
 textSize(20)
 fill("Green")
 text("Go To The Next Button",51,239);
 }
 if(John.isTouching(button2))
 {
    textSize(20)
 fill("Green")
 text("Go To The Next Button",51,239);
  textSize(20)
 fill("Green")
 text("Destroy The Block By Touching It",6,261);
 laser3.destroy()
 }
 if(John.isTouching(block))
 {
 block.destroy()
 }
 if(John.isTouching(button3))
 {
 laser4.destroy()
 }
 if(John.isTouching(block2))
 {
 block2.destroy()
 }
 }
 
 
 if(gameState=="end")
 {
John.velocityX=0;
 John.velocityY=0;
 
 John.x=200;
 John.y=200;
 Tina.x=250;
 Tina.y=200;
 
textSize(20)
 fill("Green")
 text("You Won!",51,239);   
 }
 
  drawSprites()
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
