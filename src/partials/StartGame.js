import { SVG_NS, KEYS } from '../settings';
import Board from './Board';

export default class StartGame {
    constructor(element, width, height) {
        this.element = element;
        this.width = width;
        this.height = height;
        this.page = 0;
        this.restart = true;
        this.numberOfPlayer = 0;
        this.position = 'right';
        this.difficalty = 'easy';
        this.startGameElement = document.getElementById(this.element);
        this.board = new Board(this.width, this.height);

    }
    keyEvent(){
        let isCancelKeyDown=false;
        document.addEventListener('keydown', event => {
          if(isCancelKeyDown){
            event.preventDefault();
          }else{
          switch (event.key) {
              case KEYS.e:
                  this.difficalty = 'easy';
                  this.page = 1;
                  this.start();
                  break;
              case KEYS.m:
                  this.difficalty = 'medium';
                  this.page = 1;
                  this.start();
                  break;
              case KEYS.h:
                  this.difficalty = 'hard';
                  this.page = 1;
                  this.start();
                  break;
                  case KEYS.s:
                    this.numberOfPlayer = 1;
                    this.page = 2;
                    this.start();
                    break;
                case KEYS.t:
                    this.numberOfPlayer = 2;
                    this.page = 0;
                    this.restart = false;
                    this.initialStart();
                    isCancelKeyDown=true;
                    break;
                case KEYS.d:
                    this.numberOfPlayer = 0;
                    this.page = 0;
                    this.restart = false;
                    this.initialStart();
                    isCancelKeyDown=true;
                    break;
                case KEYS.l:
                    this.position = 'left';
                    this.restart = false;
                    this.page = 0;
                    this.initialStart();
                    isCancelKeyDown=true;
                    break;
                case KEYS.r:
                    this.position = 'right';
                    this.restart = false;
                    this.page = 0;
                    this.initialStart();
                    isCancelKeyDown=true;
                    break;
      
          }
        }
        });
      
        document.addEventListener('keydown', event => {
          if (event.key==KEYS.g){
            this.restart = true;
          }
        });
}
    initialStart(){
        let showStartButton= document.getElementById("start").classList.add("show-button");
        this.startGameElement.innerHTML='';
        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttributeNS(null, 'width', this.width);
        svg.setAttributeNS(null, 'height', this.height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
        this.startGameElement.appendChild(svg);
        this.board.render(svg);
        this.initialPage(svg);
        showStartButton;
    }
    //function that restart the start game
    start(){
        this.startGameElement.innerHTML='';
        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttributeNS(null, 'width', this.width);
        svg.setAttributeNS(null, 'height', this.height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
        this.startGameElement.appendChild(svg);
        this.board.render(svg);
        this.keyEvent();
        if(this.restart){
          if (this.page === 0) {
            this.startSecondPage(svg);
            return;
            }
          else if (this.page === 1) {
            this.startFirstPage(svg);
            return;
          }
          else if (this.page === 2) {
            this.startThirdPage(svg);
            return;
          }
        }
      }
    //drawing the text svg for starting page
    initialPage(svg) {  
        let text0 = document.createElementNS(SVG_NS, 'text');
        text0.setAttributeNS(null, 'x', '120');
        text0.setAttributeNS(null, 'y', '80');
        text0.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text0.setAttributeNS(null, 'font-size', 20);
        text0.setAttributeNS(null, 'fill', 'yellow');
        text0.textContent = 'Click Start Button to Start';
        svg.appendChild(text0);
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
