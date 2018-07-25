const View = require("./ttt-view.js");// require appropriate file
const Game = require("./game.js");// require appropriate file

$( () => {
  // Your code here
  const ttt_container = $(".ttt");
  let game = new Game();
  let x = new View(game,ttt_container);
  // console.log(ttt_container);
});

// window.game = Game;
// window.view = View;