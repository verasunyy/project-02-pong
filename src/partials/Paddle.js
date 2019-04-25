import { SVG_NS } from '../settings';
/* <rect id='paddal1' x='10' y='100' width='8' height='56'  
rx='3' ry='3' fill='yellow'/> */

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up,down) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;
    }

    //   document.addEventListener('keydown', event => {
    //     switch (event.key) {
    //       case up:
    //         console.log('up');
    //         break;
    //       case down:
    //         console.log('down');
    //         break;
    //     }
    // }
    render (svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
      rect.setAttributeNS(null, 'fill', 'yellow');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'stroke', 'black');
      rect.setAttributeNS(null, 'stroke-width','4');
      rect.setAttributeNS(null, 'x', this.x);
      rect.setAttributeNS(null, 'y',this.y);
      rect.setAttributeNS(null, 'rx', '3');
      rect.setAttributeNS(null, 'ry', '3');

      svg.appendChild(rect);
    }


}
