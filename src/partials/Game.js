import { SVG_NS, KEYS} from  '../settings';
import Board from './Board';
import Paddle from  './Paddle';


export default class Game {

  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2)
    )


    this.gameElement = document.getElementById(this.element)

    this.board = new Board(this.width, this.height);

    this.p1 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                          this.boardGap, ((this.height - this.paddleHeight) / 2));
    this.p2 = new Paddle(this.height, this.paddleWidth, this.paddleHeight, 
                          this.width -this.paddleWidth-this.boardGap, 
                          ((this.height - this.paddleHeight) / 2));
    // Other code goes here...
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
    this.p1.render(svg);
    this.p2.render(svg);
    // console.log(this.p1);


  }
}
