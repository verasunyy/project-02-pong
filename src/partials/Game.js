import { SVG_NS, KEYS} from  '../settings';
import Board from './Board';
import Paddle from  './Paddle';
import Ball from './Ball';
import Score from './Score';
import AIPaddle from './AIPaddle';
import StartGame from './StartGame';


export default class Game {

  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.paddleWidth = 12;
    this.paddleHeight = 85;
    this.boardGap = 10;

    this.radius = 15;
    this.p1Color='rgba(0,76,153,0.5)';
    this.p2Color='rgba(148,0,211,0.5)';


    this.restart = true;

    this.page = 0;

    this.startGame = new StartGame (this.restart, this.page, this.numberOfPlayer, this.position, this.difficalty);
    this.startGame.keyEvent();

    this.gameElement = document.getElementById(this.element);

    this.board = new Board(this.width, this.height);
    this.ball = new Ball(this.radius, this.width, this.height, 'red');



    this.numberOfPlayer = this.startGame.numberOfPlayer;
    this.position = this.startGame.position;
    this.difficalty = this.startGame.difficalty;

    if(this.startGame.numberOfPlayer===3){
      this.p1 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                this.boardGap, ((this.height - this.paddleHeight) / 2),
                KEYS.a, KEYS.z, this.p1Color /** blue */,
                this.width, this.difficalty, 'left');
      this.p2 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                this.width -this.paddleWidth-this.boardGap, 
                ((this.height - this.paddleHeight) / 2),
                KEYS.up, KEYS.down, this.p2Color/** purple */,
                this.width, this.difficalty, 'right');
    }else if(this.startGame.numberOfPlayer===2){
      this.p1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                            this.boardGap, ((this.height - this.paddleHeight) / 2),
                            KEYS.a, KEYS.z, this.p1Color /** blue */);
      this.p2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                            this.width -this.paddleWidth-this.boardGap, 
                            ((this.height - this.paddleHeight) / 2),
                            KEYS.up, KEYS.down, this.p2Color/** purple */ );
    }else if (this.startGame.numberOfPlayer===1 && this.startGame.position === 'left'){
      this.p1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                  this.boardGap, ((this.height - this.paddleHeight) / 2),
                  KEYS.a, KEYS.z, this.p1Color /** blue */);
      this.p2 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                  this.width -this.paddleWidth-this.boardGap, 
                  ((this.height - this.paddleHeight) / 2),
                  KEYS.up, KEYS.down, this.p2Color/** purple */,
                  this.width, this.difficalty, 'right');
    }else if(this.startGame.numberOfPlayer===1 && this.startGame.position === 'right'){
      this.p1 = new AIPaddle(this.height, this.paddleWidth, this.paddleHeight, 
                            this.width -this.paddleWidth-this.boardGap, 
                            ((this.height - this.paddleHeight) / 2),
                            KEYS.up, KEYS.down, this.p2Color/** purple */,
                            this.width, this.difficalty, 'right');
      this.p2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                  this.width -this.paddleWidth-this.boardGap, 
                  ((this.height - this.paddleHeight) / 2),
                  KEYS.up, KEYS.down, this.p2Color/** purple */ );
    }
    // Other code goes here...

    this.score1 = new Score(this.width/2-50, 30, 50, this.p1Color );
    this.score2 = new Score(this.width/2+25, 30, 50, this.p2Color );

    document.addEventListener('keydown', event=> {
      // console.log(event);
      switch(event.key){
        case KEYS.spaceBar:
          this.pause = !this.pause;
        break;
        case KEYS.g:
        this.startGame.restart = true;
        break;
        
      }
      // console.log(this.pause);
    });
    

    

    

  }

  start(){
    this.gameElement.innerHTML='';
    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
    this.board.render(svg);
    this.startGame.keyEvent();
    if(this.startGame.restart){
      if (this.startGame.page === 0) {
        this.startGame.startSecondPage(svg);
        return;
        }
      else if (this.startGame.page === 1) {
        this.startGame.startFirstPage(svg);
        return;
      }
      else if (this.startGame.page === 2) {
        this.startGame.startThirdPage(svg);
        return;
      }
    }

  }


  render() {

    // More code goes here....
    //pause
    if(this.pause){
      this.p1.pauseIndicator = 0;
      this.p2.pauseIndicator = 0;
      return;
    }
    this.p1.pauseIndicator = 1;
    this.p2.pauseIndicator = 1;

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
    this.ball.render(svg,this.p1,this.p2);

    this.score1.render(svg,this.p1.score);
    this.score2.render(svg,this.p2.score);

    this.p1.render(svg, this.ball);
    this.p2.render(svg, this.ball);

  }
}
