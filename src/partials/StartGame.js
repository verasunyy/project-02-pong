import { SVG_NS, KEYS } from '../settings';

export default class StartGame {
    constructor(restart, page, numberOfPlayer, position, difficalty) {
        this.page = page;
        this.restart = restart;
        this.numberOfPlayer = numberOfPlayer;
        this.position = position;
        this.difficalty = difficalty;

    }
    keyEvent() {
        document.addEventListener('keydown', event => {
            switch (event.key) {
                case KEYS.e:
                    this.difficalty = 'easy';
                    this.page = 1;
                    break;
                case KEYS.m:
                    this.difficalty = 'medium';
                    this.page = 1;
                    break;
                case KEYS.h:
                    this.difficalty = 'hard';
                    this.page = 1;
                    break;
                case KEYS.s:
                    this.numberOfPlayer = 1;
                    this.page = 2;
                    break;
                case KEYS.t:
                    this.numberOfPlayer = 2;
                    this.page = 0;
                    this.restart = false;
                    break;
                case KEYS.d:
                    this.numberOfPlayer = 0;
                    this.page = 0;
                    this.restart = false;
                    break;
                case KEYS.l:
                    this.position = 'left';
                    this.restart = false;
                    this.page = 0;
                    
                    console.log(this.restart);
                    break;
                case KEYS.r:
                    this.position = 'right';
                    this.restart = false;
                    this.page = 0;
                    break;
            }
        });
    }


    startFirstPage(svg) {

        let text1 = document.createElementNS(SVG_NS, 'text');
        text1.setAttributeNS(null, 'x', '120');
        text1.setAttributeNS(null, 'y', '80');
        text1.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text1.setAttributeNS(null, 'font-size', 20);
        text1.setAttributeNS(null, 'fill', 'yellow');
        text1.textContent = 'Sigle Player Press s';
        svg.appendChild(text1);
        let text2 = document.createElementNS(SVG_NS, 'text');
        text2.setAttributeNS(null, 'x', '120');
        text2.setAttributeNS(null, 'y', '160');
        text2.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text2.setAttributeNS(null, 'font-size', 20);
        text2.setAttributeNS(null, 'fill', 'yellow');
        text2.textContent = 'Two Players Press t';
        svg.appendChild(text2);
        let text3 = document.createElementNS(SVG_NS, 'text');
        text3.setAttributeNS(null, 'x', '120');
        text3.setAttributeNS(null, 'y', '240');
        text3.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text3.setAttributeNS(null, 'font-size', 20);
        text3.setAttributeNS(null, 'fill', 'yellow');
        text3.textContent = 'Demo Press d';
        svg.appendChild(text3);
    }
    startSecondPage(svg) {
        let text6 = document.createElementNS(SVG_NS, 'text');
        text6.setAttributeNS(null, 'x', '120');
        text6.setAttributeNS(null, 'y', '80');
        text6.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text6.setAttributeNS(null, 'font-size', 20);
        text6.setAttributeNS(null, 'fill', 'yellow');
        text6.textContent = 'Beginner Press e';
        svg.appendChild(text6);
        let text7 = document.createElementNS(SVG_NS, 'text');
        text7.setAttributeNS(null, 'x', '120');
        text7.setAttributeNS(null, 'y', '160');
        text7.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text7.setAttributeNS(null, 'font-size', 20);
        text7.setAttributeNS(null, 'fill', 'yellow');
        text7.textContent = 'Intermediate Press m';
        svg.appendChild(text7);
        let text8 = document.createElementNS(SVG_NS, 'text');
        text8.setAttributeNS(null, 'x', '120');
        text8.setAttributeNS(null, 'y', '240');
        text8.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text8.setAttributeNS(null, 'font-size', 20);
        text8.setAttributeNS(null, 'fill', 'yellow');
        text8.textContent = 'Expert Press h';
        svg.appendChild(text8);


    }
    startThirdPage(svg) {
        let text4 = document.createElementNS(SVG_NS, 'text');
        text4.setAttributeNS(null, 'x', '140');
        text4.setAttributeNS(null, 'y', '170');
        text4.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text4.setAttributeNS(null, 'font-size', 20);
        text4.setAttributeNS(null, 'fill', 'yellow');
        text4.textContent = 'Play Left Press l';
        svg.appendChild(text4);
        let text5 = document.createElementNS(SVG_NS, 'text');
        text5.setAttributeNS(null, 'x', '140');
        text5.setAttributeNS(null, 'y', '210');
        text5.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text5.setAttributeNS(null, 'font-size', 20);
        text5.setAttributeNS(null, 'fill', 'yellow');
        text5.textContent = 'Play right Press r';
        svg.appendChild(text5);


    }
}
