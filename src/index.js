import './styles/game.css';
import Game from './partials/Game';
import StartGame from './partials/StartGame';
import { SVG_NS } from './settings';


// create a game instance
const startGame = new StartGame('game', 650, 400)
function gameLoop() {

  
  const game = new Game('game', startGame);

  (function ruleLoop() {
    startGame.start();

    if (startGame.restart) {
      requestAnimationFrame(gameLoop);
      // const game = new Game('game', 650, 400, startGame);
    }
    else{
    // (function gameLoop() {
        game.render();
        // if(game.p1.score===3 || game.p2.score ===3){
        //   game.render();
        //   return;
        // }
        requestAnimationFrame(ruleLoop);
    // })();
    }

  })();

}

gameLoop();


