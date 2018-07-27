// SHORT HAND FOR GETELEMENTBYID
function _(x) {
  return document.getElementById(x);
}
//  GLOBAL VARIABLE
var divcanvas = _("divcanvas");
const instructionButton = _("instructionButton");
const startButton = _("startButton");
const instructionsT = `instructions`;
const instructions =
  "get your shit together, get it all together and put it in a back pack, all your shit, so it's together.  And if you gotta take it some where, take it somewhere, you know, take it to the shit store and sell it, or put it in the shit museum. I don't care what you do, you just gotta get it together.";

const MWinns = ` Morty winns,extrange but true`;
const RWinns = `as always Rick winns`;

// hidding my canvas before star the game
divcanvas.style.visibility = "hidden";
canvas.style.visibility = "hidden";

// AUDIO LIST
var backGroundmusic = new Audio("./audio/Dimitry G. - Rick And Morty.mp3");
var intro = new Audio("./audio/Rick-and-Morty-Theme-Song.mp3");
intro.addEventListener(
  "ended",
  function() {
    this.currentTime = 0;
    this.play;
  },
  false
);

// INSTRUCTION WINDOWS FUNcTION
function MyInstructionWindow(content, title) {
  this.okButton = function() {
    _("dialogbox").style.display = "none";
    _("dialogoverlay").style.display = "none";
  };

  // RENDER METHOD GENERATE THE POPUPWINDOW AND DISPLAY IT
  this.render = function(dialog) {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const dialogoverlay = _("dialogoverlay");
    const dialogbox = _("dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    _("dialogboxhead").innerHTML = title;
    _("dialogboxbody").innerHTML = content;
    _("dialogboxfoot").innerHTML =
      '<button onclick="instructionBox.okButton()">OK</button>';
  };
}

// CREATING THE NEW OBJECT RIGHT After
var instructionBox = new MyInstructionWindow(instructions, instructionsT);
var RickVictoryBox = new MyInstructionWindow(RWinns, "winner");
var MortyVictoryBos = new MyInstructionWindow(MWinns, "Winner");

// RENDERING MY INSTRUCTION WINDOW(workin in progress)
instructionButton.onclick = () => {
  instructionBox.render();
};
startButton.onclick = () => {
  backGroundmusic.play();
  pregameinstruction.style.visibility = "hidden";
  canvas.style.visibility = "visible";
  divcanvas.style.visibility = "visible";
};
