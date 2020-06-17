var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2376ae22-1aac-415e-aefa-15100f857391","86ac0c81-7d8c-4c19-9645-bbb4c0d7cdf5","3a67ae73-76db-47ac-90c3-335b8a44e8ad","5bbe5746-9c88-485d-868c-4436b214cd8b","43d9918a-a579-4345-9d2d-0d0b597ad829","239a42d5-2987-4256-aaef-2a8751c04920","1e35e7d8-47b0-495c-8592-9c064e02976d","c3e512f8-66de-4324-bd11-d178a0476e6d","57ac72c8-2114-4161-a99e-cd6a99c459aa"],"propsByKey":{"2376ae22-1aac-415e-aefa-15100f857391":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/dTpG9O4OnSOMVUIo_K2oybDFXSS6o0WA/category_vehicles/enemyRed1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"dTpG9O4OnSOMVUIo_K2oybDFXSS6o0WA","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dTpG9O4OnSOMVUIo_K2oybDFXSS6o0WA/category_vehicles/enemyRed1.png"},"86ac0c81-7d8c-4c19-9645-bbb4c0d7cdf5":{"name":"player","sourceUrl":null,"frameSize":{"x":112,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"X.dPDjeHrsKGQD6S1f.cFeCA3Kt2gZcy","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":84},"rootRelativePath":"assets/86ac0c81-7d8c-4c19-9645-bbb4c0d7cdf5.png"},"3a67ae73-76db-47ac-90c3-335b8a44e8ad":{"name":"phaserBullet","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bSPE_GcyPJIZzU8woJZ3HKrN8opWgtVp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3a67ae73-76db-47ac-90c3-335b8a44e8ad.png"},"5bbe5746-9c88-485d-868c-4436b214cd8b":{"name":"space","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":15,"looping":true,"frameDelay":2,"version":"OmPlKArqFf3OFKrsHPoJnSOZDg6avS4.","loadedFromSource":true,"saved":true,"sourceSize":{"x":2000,"y":2000},"rootRelativePath":"assets/5bbe5746-9c88-485d-868c-4436b214cd8b.png"},"43d9918a-a579-4345-9d2d-0d0b597ad829":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/AWzbgBcS7YchnI82UJ3UIYJp7fucaQji/category_vehicles/enemyBlack5.png","frameSize":{"x":97,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"AWzbgBcS7YchnI82UJ3UIYJp7fucaQji","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AWzbgBcS7YchnI82UJ3UIYJp7fucaQji/category_vehicles/enemyBlack5.png"},"239a42d5-2987-4256-aaef-2a8751c04920":{"name":"spacebg","sourceUrl":"assets/v3/animations/A2BvCzvRZMYSIdO2cVB6umyorhF_ht3fUcOS8JE1yPY/239a42d5-2987-4256-aaef-2a8751c04920.png","frameSize":{"x":1242,"y":2208},"frameCount":1,"looping":true,"frameDelay":60,"version":"qow4l.FhGP93ZQvi9GkS4iRPXfhCp6Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":1242,"y":2208},"rootRelativePath":"assets/v3/animations/A2BvCzvRZMYSIdO2cVB6umyorhF_ht3fUcOS8JE1yPY/239a42d5-2987-4256-aaef-2a8751c04920.png"},"1e35e7d8-47b0-495c-8592-9c064e02976d":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/MYQBvgDJYnYp6MgJrPMqvmnWlBu61SoP/category_vehicles/enemyGreen4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"MYQBvgDJYnYp6MgJrPMqvmnWlBu61SoP","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MYQBvgDJYnYp6MgJrPMqvmnWlBu61SoP/category_vehicles/enemyGreen4.png"},"c3e512f8-66de-4324-bd11-d178a0476e6d":{"name":"explosion","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":11,"looping":true,"frameDelay":2,"version":"4dPrLdlMONN5UTiJkR_IZJH4PTng42Xb","loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":384},"rootRelativePath":"assets/c3e512f8-66de-4324-bd11-d178a0476e6d.png"},"57ac72c8-2114-4161-a99e-cd6a99c459aa":{"name":"end","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"}}};
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

var enemyVelocity = 5;
var enemyGroup = createGroup();
//spawn enemy function
function spawnEnemy() {
  
  if (World.frameCount %   100 == 0) {
    var enemy = createSprite(randomNumber(40, 360), -10, 40, 40);
    enemy.velocityY = enemyVelocity;
    enemy.scale = 0.6;
    enemy.setCollider("rectangle", 0, 0, 80,80);
    
    enemy.setAnimation("enemy" + randomNumber(1,3));
    enemy.lifetime = 150;
   enemyGroup.add(enemy);
   
   player.x = enemy.x;
   phaserBullet();
  }
  }
  
var gamestate = "play";

var bulletGroup = createGroup();
  
//edge sprites for collision
createEdgeSprites();
//creating score
var score = 0;
var otherScore = 0;

//setting space background
var bg = createSprite(200, 200);
bg.scale = 1;
bg.setAnimation("space");

 

 //phaser
 function phaserBullet(){
   var pBullet = createSprite(player.x, player.y - 25);
   pBullet.setAnimation("phaserBullet");
   pBullet.velocityY = -10;
   pBullet.lifetime = 110;
   playSound("assets/category_jump/classic_jump_4.mp3", false);
   bulletGroup.add(pBullet);
 }
 //creating score
 //var score = 0;     
  
 
 // player
 var player = createSprite(200, 360);
 player.setAnimation("player");
 player.scale = 0.5;

 
function draw() {

   if(otherScore == 5) enemyVelocity = enemyVelocity + 0.5, otherScore = 0;
   
  //setting secondary background to prevent infinite drawSprites();
 background("");
 
 
   if(gamestate != "lose") {
     
     

     
     
     
     for(var i=0;i<enemyGroup.length;i++){
       
       if(bulletGroup.isTouching(enemyGroup)) {
         bulletGroup.destroyEach();
         score = score + 1;
         otherScore = otherScore + 1;
         enemyGroup.get(i).destroy();
         playSound("assets/default.mp3", false);
         
    }  
   
       }
       
 
  


 


  
  


 //functions

  spawnEnemy();
  //so player cant go outside screen
 player.collide(edges);
   drawSprites();
   fill("red");
textSize(20);
   text("Score: " + score, 305, 20);
   
   if(enemyGroup.isTouching(bottomEdge)) {
     gamestate = "lose";
   }
   }
  
  if(gamestate == "lose") {
    drawSprites();
    fill("red");
textSize(20);
    
    player.destroy();
    bg.setAnimation("end");
    text('YOU LOSE!', 156, 200);
    
  }
  
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
