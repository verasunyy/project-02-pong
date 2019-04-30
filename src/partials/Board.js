import { SVG_NS } from '../settings';

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  //drawing the game board
  render(svg) {
    //board
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'fill', '#353535');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    //middle line
    let line = document.createElementNS(SVG_NS, 'line');
    line.setAttributeNS(null, 'x1', this.width / 2);
    line.setAttributeNS(null, 'x2', this.width / 2);
    line.setAttributeNS(null, 'y2', this.height);
    line.setAttributeNS(null, 'stroke', 'black');
    line.setAttributeNS(null, 'stroke-dasharray', '20 10');
    line.setAttributeNS(null, 'stroke-width', '4');
    line.setAttributeNS(null, 'stroke-linecap', 'round');

    //bottom instruction
    let text1 = document.createElementNS(SVG_NS, 'text');
    text1.setAttributeNS(null, 'x', '80');
    text1.setAttributeNS(null, 'y', '380');
    text1.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    text1.setAttributeNS(null, 'font-size', '10');
    text1.setAttributeNS(null, 'fill', 'yellow');
    text1.textContent = 'PRESS g TO RESTART';
    let text2 = document.createElementNS(SVG_NS, 'text');
    text2.setAttributeNS(null, 'x', '420');
    text2.setAttributeNS(null, 'y', '380');
    text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
    text2.setAttributeNS(null, 'font-size', '10');
    text2.setAttributeNS(null, 'fill', 'yellow');
    text2.textContent = 'PRESS SpaceBar TO Pause';

    svg.appendChild(text1);
    svg.appendChild(text2);
    svg.appendChild(rect);
    svg.appendChild(line);
    svg.appendChild(text1);
    svg.appendChild(text2);


  }
}