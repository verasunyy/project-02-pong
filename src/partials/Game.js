import { SVG_NS, KEYS} from  '../settings';
import Board from './Board';
import Paddle from  './Paddle';
import Ball from './Ball';
import Score from './Score';
import AIPaddle from './AIPaddle';


export default class Game {

  constructor(element, startGame) {
    this.element = element;
    this.width = startGame.width;
    this.height = startGame.height;

    this.paddleWidth = 12;
    this.paddleHeight = 85;
    this.boardGap = 10;

    this.radius = 15;
    this.p1Color='rgba(0,76,153,0.5)';
    this.p2Color='rgba(148,0,211,0.5)';


    this.restart = startGame.restart;

    this.page = startGame.page;

    this.gameElement = document.getElementById(this.element);

    this.board = new Board(this.width, this.height);
    this.ball = new Ball(this.radius, this.width, this.height, 'red');



    this.numberOfPlayer = startGame.numberOfPlayer;
    this.position = startGame.position;
    this.difficalty = startGame.difficalty;

    this.winningPoint=10;


    if(this.numberOfPlayer===0){
      this.p1 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                this.boardGap, ((this.height - this.paddleHeight) / 2),
                'none', 'none', this.p1Color /** blue */,
                this.width, this.difficalty, 'left');
      this.p2 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                this.width -this.paddleWidth-this.boardGap, 
                ((this.height - this.paddleHeight) / 2),
                'none', 'none', this.p2Color/** purple */,
                this.width, this.difficalty, 'right');
    }else if(this.numberOfPlayer===2){
      this.p1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                            this.boardGap, ((this.height - this.paddleHeight) / 2),
                            KEYS.a, KEYS.z, this.p1Color /** blue */);
      this.p2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                            this.width -this.paddleWidth-this.boardGap, 
                            ((this.height - this.paddleHeight) / 2),
                            KEYS.up, KEYS.down, this.p2Color/** purple */ );
    }else if (this.numberOfPlayer===1 && this.position === 'left'){
      this.p1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                  this.boardGap, ((this.height - this.paddleHeight) / 2),
                  KEYS.a, KEYS.z, this.p1Color /** blue */);
      this.p2 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                  this.width -this.paddleWidth-this.boardGap, 
                  ((this.height - this.paddleHeight) / 2),
                  'none', 'none', this.p2Color/** purple */,
                  this.width, this.difficalty, 'right');
    }else if(this.numberOfPlayer===1 && this.position === 'right'){
      this.p1 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                  this.boardGap, ((this.height - this.paddleHeight) / 2),
                  'none', 'none', this.p1Color /** blue */,
                  this.width, this.difficalty, 'left');
      this.p2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                  this.width -this.paddleWidth-this.boardGap, 
                  ((this.height - this.paddleHeight) / 2),
                  KEYS.up, KEYS.down, this.p2Color/** purple */ );
    }
    // Other code goes here...

    this.score1 = new Score(this.width/2-50, 30, 50, this.p1Color );
    this.score2 = new Score(this.width/2+25, 30, 50, this.p2Color );
    this.winnerP1= new Score(this.width/8, this.height/3,50, this.p1Color);
    this.losserP2= new Score(this.width*5/8, this.height/3,50, this.p2Color);
    this.winnerP2= new Score(this.width*5/8, this.height/3,50, this.p2Color);
    this.losserP1= new Score(this.width/8, this.height/3,50, this.p1Color);

    document.addEventListener('keydown', event=> {
      switch(event.key){
        case KEYS.spaceBar:
          this.pause = !this.pause;
        break;
        case KEYS.g:
        this.restart = true;
        break;
        
      }
    });

    
  }


  render() {

    // More code goes here....

   

    //fix the bug :see slide 14
    this.gameElement.innerHTML='';
    //add the code from the slide 13
    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);


    //????? instead of render the svg head so many time,
    //can we just do it once?
    //maybe another method that return svg?
    this.board.render(svg);
    // this.p1.render(svg);
    // this.p2.render(svg);
    // console.log(this.p1);
    this.score1.render(svg,this.p1.score);
    this.score2.render(svg,this.p2.score);

    this.p1.render(svg, this.ball);
    this.p2.render(svg, this.ball);

    if(this.pause){
      this.p1.pauseIndicator = 0;
      this.p2.pauseIndicator = 0;
      return;
    }
      this.p1.pauseIndicator = 1;
      this.p2.pauseIndicator = 1;

    if (this.p1.score>= this.winningPoint && this.p2.score< this.winningPoint){
      this.winnerP1.winnerDeclare(svg);
      this.losserP2.losserDeclare(svg);
      return;
    }
    else if(this.p2.score>= this.winningPoint && this.p1.score< this.winningPoint){
      this.winnerP2.winnerDeclare(svg);
      this.losserP1.losserDeclare(svg);
      return;
    }
    this.ball.render(svg,this.p1,this.p2);


    this.score1.render(svg,this.p1.score);
    this.score2.render(svg,this.p2.score);

    this.p1.render(svg, this.ball);
    this.p2.render(svg, this.ball);


    // let text1 = document.createElementNS(SVG_NS, 'text');
    // text1.setAttributeNS(null, 'x', '50');
    // text1.setAttributeNS(null, 'y', '200');
    // text1.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    // text1.setAttributeNS(null, 'font-size', '30');
    // text1.setAttributeNS(null, 'fill', 'yellow');
    // text1.textContent = 'Player 1 is The Winner';

    // let text2 = document.createElementNS(SVG_NS, 'text');
    // text2.setAttributeNS(null, 'x', '50');
    // text2.setAttributeNS(null, 'y', '200');
    // text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    // text2.setAttributeNS(null, 'font-size', '30');
    // text2.setAttributeNS(null, 'fill', 'yellow');
    // text2.textContent = 'Player 2 is The Winner';
    // if(this.p1.score === 3){
    //   svg.appendChild(text1);
    //   }
    // if(this.p2.score === 3){
    //   svg.appendChild(text2);
    // }





  }
}
