import './styles/game.css';
import { SVG_NS, KEYS } from './settings';
import Game from './partials/Game';
import StartGame from './partials/StartGame';
import Board from './partials/Board';

const startGame = new StartGame('game', 650, 400);

// startGame.initialStart();       



//start the game
// function gameStart(){
  // console.log("gameStar() runs");
  startGame.start();
//   console.log("gameStart()"+game.position);
// console.log("gameStart()"+game.difficalty);
// console.log("gameStart()"+game.numberOfPlayer);
  
// }
document.getElementById("start").addEventListener("click", function(){
  document.getElementById("start").classList.remove("show-button");
  const game = new Game('game', startGame);
  ruleLoop();
  function ruleLoop() {
    // console.log("ruleloop()"+game.position);
    // console.log("ruleloop()"+game.difficalty);
    // console.log("ruleloop()"+game.numberOfPlayer);
    if (startGame.restart) {
      console.log("rule loop runs");
      startGame.start();
    }
    else{
        game.render();
        requestAnimationFrame(ruleLoop);
    }

  }
});





// document.getElementById("pause").addEventListener("click", function(){
//   pauseGame();
// });
// document.getElementById("start").addEventListener("click", function(){
//   stopGame();
// });



// console.log(game.position);
// console.log(game.difficalty);
// console.log(game.numberOfPlayer);

   
