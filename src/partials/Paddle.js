import { SVG_NS } from '../settings';
/* <rect id='paddal1' x='10' y='100' width='8' height='56'  
rx='3' ry='3' fill='yellow'/> */

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down, strokeColor) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 50;
        this.score = 0;
        this.strokeColor = strokeColor;
        this.pauseIndicator = 1;

        // document.addEventListener("keydown", event => {
        //     console.log(event);
        //   });

        document.addEventListener('keydown', event => {
            // console.log(event);
            // console.log(event.key);
            if (this.pauseIndicator !== 0){
            switch (event.key) {
                case up:
                    // console.log('up');
                    this.up();
                break;
                case down:
                    // console.log('down');
                    this.down();
                break;
            }
        }
        });
    }//end of constructor

    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', "yellow");
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'stroke', this.strokeColor);
        rect.setAttributeNS(null, 'stroke-width', '5');
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'rx', '3');
        rect.setAttributeNS(null, 'ry', '3');

        svg.appendChild(rect);
    }

    up(){
        if((this.y-this.speed)>0)
        {
            this.y = this.y - this.speed;
        }
        else{
            this.y=0;
        }
        // this.y = Math.max(this.y-this.speed);
    }

    down(){
        if((this.y+this.speed+this.height)<this.boardHeight)
        {
            this.y = this.y + this.speed;
        }
        else{
            this.y = this.boardHeight-this.height;
        }
        // this.y = Math.min(this.boardHeight-this.height, this.y+this.speed );
    }

    coordinates(x, y, width, height){
        let leftX = x;
        let rightX = x + width;
        let topY=y;
        let bottomY = y+height;
        return [leftX, rightX, topY, bottomY];
    }
    




}
