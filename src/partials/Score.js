import { SVG_NS } from '../settings';

export default class Score {
    constructor(x, y, size, scoreBoardColor) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.scoreBoardColor = scoreBoardColor;
    }
    //...
    render(svg, score){
        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', this.scoreBoardColor);
        text.textContent=score;
        svg.appendChild(text);
    }

    winnerDeclare(svg){
      let text1 = document.createElementNS(SVG_NS, 'text');
      text1.setAttributeNS(null, 'x', this.x);
      text1.setAttributeNS(null, 'y', this.y);
      text1.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text1.setAttributeNS(null, 'font-size', this.size);
      text1.setAttributeNS(null, 'fill', this.scoreBoardColor);
      text1.textContent = 'Winner';
      svg.appendChild(text1);
    }

    losserDeclare(svg){
      let text2 = document.createElementNS(SVG_NS, 'text');
      text2.setAttributeNS(null, 'x', this.x);
      text2.setAttributeNS(null, 'y', this.y);
      text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
      text2.setAttributeNS(null, 'font-size', this.size);
      text2.setAttributeNS(null, 'fill', this.scoreBoardColor);
      text2.textContent = 'Losser';
      svg.appendChild(text2);
    }
  }