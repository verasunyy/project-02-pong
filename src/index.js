import './styles/game.css';
import Game from './partials/Game';
import StartGame from './partials/StartGame';

const startButton = document.getElementById("start");
const startGame = new StartGame('game', 650, 400);
startGame.start();
startButton.addEventListener("click", function(){
  startButton.classList.remove("show-button");
  const game = new Game('game', startGame);
  ruleLoop();
  function ruleLoop() {
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

   
