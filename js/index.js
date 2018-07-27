// simplify acces to  html Element

// =============()()()()()================()()()()

const test1Button = _("test1Button");
const canvas = _("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.width = canvas.width;
bgImage.height = canvas.height;
bgImage.onload = function() {
  bgReady = true;
};
bgImage.src = "images/spirit_master_background_by_kymotonian-d4elxyc.png";

var playerReady1 = false;
var playerReady2 = false;
//PLAYER1 IMAGE
var playerImage1 = new Image();
playerImage1.onload = function() {
  playerReady1 = true;
};
playerImage1.src = "./images/rickS.png";
// this is static rick
var staticRick = "./images/Mobile - Pocket Mortys - Rick.png";

//PLAYER2 IMAGE
var playerImage2 = new Image();
playerImage2.onload = function() {
  playerReady2 = true;
};

playerImage2.src = "./images/mortys.png";

// CRISTAL IMAGE
var cristalReady = false;
var cristalImage = new Image();
cristalImage.onload = function() {
  cristalReady = true;
};
cristalImage.src = "images/crystal.png";

//CHANGE THE POSITIONING 105 PX PER SECOND

// CRISTALL COUNTERS
var cristal = {};
var cristalCaught1 = 0;
var cristalCaught2 = 0;

// KEYBOARD CONTROL
var keysDown = {};

addEventListener(
  "keydown",
  function(e) {
    keysDown[e.keyCode] = true;
  },
  false
);

addEventListener(
  "keyup",
  function(e) {
    delete keysDown[e.keyCode];
  },
  false
);

//  BOERDER DETECTION
var theWall = function() {
  //PLAYER1 BORDER DETECTION AND REACTION
  if (player1.x - 5 < 0) {
    player1.x = 0 + 5;
    //------------------
  } else if (player1.x + 20 >= canvas.width - 20) {
    player1.x = canvas.width - 40;
    //------------------
  } else if (player1.y - 32 <= 90) {
    player1.y = 90 + 32;
    //------------------
  } else if (player1.y + 10 >= canvas.height - 42) {
    player1.y = canvas.height - 53;
  }
  //PLAYER2 BORDER DETECTION AND REACTION
  if (player2.x - 5 < 0) {
    player2.x = 0 + 5;
    //------------------
  } else if (player2.x + 20 >= canvas.width - 20) {
    player2.x = canvas.width - 40;
    //------------------
  } else if (player2.y - 32 <= 90) {
    player2.y = 90 + 32;
    //------------------
  } else if (player2.y + 10 >= canvas.height - 42) {
    player2.y = canvas.height - 53;
  }
};

var reset = function(p1, p2, cs) {
  //CREATE THE PLAYER 2 IN A RANDON PLACES IN THE SCEEN

  player1.x = 10 + Math.random() * (canvas.width - 10);
  player1.y = canvas.height / 2;

  //rCREATE THE PLAYER 2 IN A RANDON PLACES IN THE SCEEN
  player2.x = 32 + Math.random() * (canvas.width - 64);
  player2.y = canvas.height / 2;
  randomNumber =
    //  CREATE THE DIAMON IN THE SCREEN
    cristal.x = Math.floor(Math.random() * 400 + 200);
  cristal.y = Math.floor(Math.random() * 400 + 200);

  cristalCaught1 = 0;
  cristalCaught2 = 0;
  player1.speed = 100;
  player2.speed = 100;
};

// UPDATE THE GAME APLY

var update = function(modifier) {
  //PLAYER1 MOVEMENT SETTINGS
  if (38 in keysDown) {
    // UP
    player1.moveUp;
    player1.srcY = player1.trackUp * player1.height + 10;
    player1.y -= player1.speed * modifier;
  }
  if (40 in keysDown) {
    // DOWN
    player1.moveDown;
    player1.srcY = player1.trackDown * player1.height;
    player1.y += player1.speed * modifier;
  }
  if (37 in keysDown) {
    // LEFT
    player1.moveLeft;
    player1.srcY = player1.trackLeft * player1.height + 10;
    player1.x -= player1.speed * modifier;
  }
  if (39 in keysDown) {
    // RIGHT
    player1.moveRight;
    player1.srcY = player1.trackRight * player1.height;
    player1.x += player1.speed * modifier;
  } else if (!keysDown) {
    playerImage1.src = "./images/Mobile - Pocket Mortys - Rick.png";
  }

  //PLAYER2 MOVEMENT SETTINGS
  if (87 in keysDown) {
    // UP
    player2.moveUp;
    player2.srcY = player2.trackUp * player2.height;
    player2.y -= player2.speed * modifier;
  }
  if (83 in keysDown) {
    // DOWN
    player2.moveDown;
    player2.srcY = player2.trackDown * player2.height;
    player2.y += player2.speed * modifier;
  }
  if (65 in keysDown) {
    //LEFT
    player2.moveLeft;
    player2.srcY = player2.trackLeft * player2.height;
    player2.x -= player2.speed * modifier;
  }
  if (68 in keysDown) {
    // RIGHT
    player2.moveRight;
    player2.srcY = player2.trackRight * player2.height;
    player2.x += player2.speed * modifier;
  }

  if (
    // CHECK IF CRISTAL AND PLAYER1 TOUCH
    player1.x <= cristal.x + 32 &&
    cristal.x <= player1.x + 32 &&
    player1.y <= cristal.y + 32 &&
    cristal.y <= player1.y + 32
  ) {
    // INCRES CRISTAL COUNTER AND IF IT GETS TO 10 PLAYER ONE IS DECLARE WINNER
    ++cristalCaught1;
    if (cristalCaught1 === 15) {
      reset();
      RickVictoryBox.render();
    }
    //INCREAS THE SPEED OF PLAYER1 AFTER TOUCH THE CRISTAL
    player1.speed += 100;
    player1.x = player1.x;
    cristal.x = Math.floor(Math.random() * 400 + 200);
    cristal.y = Math.floor(Math.random() * 400 + 200);
  }
  //incrasing player 2 score
  if (
    // CHECK IF CRISTAL AND PLAYER2 TOUCH
    player2.x <= cristal.x + 32 &&
    cristal.x <= player2.x + 32 &&
    player2.y <= cristal.y + 32 &&
    cristal.y <= player2.y + 32
  ) {
    // INCRES CRISTAL COUNTER AND IF IT GETS TO 10 PLAYER TWO IS DECLARE WINNER
    ++cristalCaught2;
    if (cristalCaught2 === 15) {
      MortyVictoryBos.render();
      reset();
    }
    //INCREAS THE SPEED OF PLAYER2 AFTER TOUCH THE CRISTAL
    player2.speed += 100;
    player1.x = player1.x;
    cristal.x = Math.floor(Math.random() * 400 + 200);
    cristal.y = Math.floor(Math.random() * 400 + 200);
  }
};

// Draw everything
var render = function() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (playerReady2) {
    draw2();
  }

  if (playerReady1) {
    draw();
  }

  if (cristalReady) {
    ctx.drawImage(cristalImage, cristal.x, cristal.y);
  }
  console.log(cristal.x, cristal.y);
  // Score
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.font = "32px Andale Mono";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Rick's score: " + cristalCaught1, 32, 32);
  ctx.fillText("Morty's score: " + cristalCaught2, 400, 32);
};

// The main game loop
var main = function() {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();
  theWall();
  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
};
setInterval(draw, 100);
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();
