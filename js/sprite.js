function _(x) {
  return document.getElementById(x);
}

var player1 = {};
var player2 = {};

player1.spriteWidth = 282;
player1.spriteHeight = 340;
//we are having 3 rows and 4 cols in the current sprite sheet
player1.rows = 4;
player1.cols = 4;
player1.trackRight = 1;
player1.trackDown = 0;
player1.trackLeft = 3;
player1.trackUp = 2;
//To get the width of a single sprite we divided the width of sprite with the number of cols
//because all the sprites are of equal width and height
player1.width = player1.spriteWidth / player1.cols;
//Same for the height we divided the height with number of rows
player1.height = player1.spriteHeight / player1.rows;
//Each row contains 4 frame and at start we will display the first frame (assuming the index from 0)
player1.curFrame = 0;
//The total frame is 4
player1.frameCount = 4;
//x and y coordinates of the canvas to get the single frame
player1.srcX = 0;
player1.srcY = 0;
player1.right = false;
player1.left = false;
player1.up = false;
player1.down = false;
updateFrame1 = function() {
  //Updating the frame index
  player1.curFrame = ++player1.curFrame % player1.frameCount;
  //Calculating the x coordinate for spritesheet
  player1.srcX = player1.curFrame * player1.width;
  // clear the preveius picture
  ctx.clearRect(player1.x, player1.y, player1.width, player1.height);
};

function draw() {
  //Updating the frame
  updateFrame1();
  //Drawing the image
  ctx.drawImage(
    playerImage1,
    player1.srcX,
    player1.srcY,
    player1.width,
    player1.height,
    player1.x,
    player1.y,
    player1.width,
    player1.height
  );
}
player1.moveLeft = () => {
  this.left = true;
  this.right = false;
};
player1.moveRight = () => {
  this.left = false;
  this.right = true;
};
player1.moveUp = () => {
  this.up = true;
  this.down = false;
};
player1.moveDown = () => {
  this.up = false;
  this.down = true;
};
//--------()()()()()()()()()()()())PLAYER 2 ()()()())()()()------------------
player2.spriteWidth = 264;
player2.spriteHeight = 370;
player2.rows = 4;
player2.cols = 4;
player2.trackRight = 3;
player2.trackDown = 0;
player2.trackLeft = 1;
player2.trackUp = 2;
player2.width = player2.spriteWidth / player2.cols;
player2.height = player2.spriteHeight / player2.rows;
player2.curFrame = 0;
player2.frameCount = 4;
player2.srcX = 0;
player2.srcY = 0;
player2.right = false;
player2.left = false;
player2.up = false;
player2.down = false;

updateFrame2 = function() {
  player2.curFrame = ++player2.curFrame % player2.frameCount;
  player2.srcX = player2.curFrame * player2.width;
  ctx.clearRect(player2.x, player2.y, player2.width, player2.height);
};

function draw2() {
  updateFrame2();
  ctx.drawImage(
    playerImage2,
    player2.srcX,
    player2.srcY,
    player2.width,
    player2.height,
    player2.x,
    player2.y,
    player2.width,
    player2.height
  );
}

player2.moveLeft = () => {
  this.left = true;
  this.right = false;
};
player2.moveRight = () => {
  this.left = false;
  this.right = true;
};
player2.moveUp = () => {
  this.up = true;
  this.down = false;
};
player2.moveDown = () => {
  this.up = false;
  this.down = true;
};
// need to created a constructuc function / class to dray up this file
