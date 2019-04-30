import { SVG_NS } from '../settings';

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

        document.addEventListener('keydown', event => {
            if (this.pauseIndicator !== 0) {
                switch (event.key) {
                    case up:
                        this.up();
                        break;
                    case down:
                        this.down();
                        break;
                }
            }
        });
    }//end of constructor

    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'yellow');
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
    //key up and down controll the paddle
    up() {
        if ((this.y - this.speed) > 0) {
            this.y = this.y - this.speed;
        }
        else {
            this.y = 0;
        }
    }

    down() {
        if ((this.y + this.speed + this.height) < this.boardHeight) {
            this.y = this.y + this.speed;
        }
        else {
            this.y = this.boardHeight - this.height;
        }
    }

    coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
    }

}
