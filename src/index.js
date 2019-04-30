import './styles/game.css';
import Game from './partials/Game';
import StartGame from './partials/StartGame';


// create a game instance
const startGame = new StartGame('game', 650, 400)

// const game = new Game('game', startGame);
  
// setInterval(game.redBallSprawns, 1000);

function gameLoop() {
  const game = new Game('game', startGame);

  (function ruleLoop() {
    startGame.start();

    if (startGame.restart) {
      requestAnimationFrame(gameLoop);
    }
    else{
        game.render();
        requestAnimationFrame(ruleLoop);
    }

  })();

}

gameLoop();

