import './styles/game.css';
import Game from './partials/Game';
import StartGame from './partials/StartGame';


// create a game instance
// const startGame = new StartGame('startGame', 650, 400
const game = new Game('game', 650, 400);


  (function ruleLoop() {
    game.start();
    if (game.startGame.restart) {
      requestAnimationFrame(ruleLoop);
    }
    else{
    // (function gameLoop() {
      game.render();
        requestAnimationFrame(ruleLoop);
    // })();
  }
  })();


