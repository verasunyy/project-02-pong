import { SVG_NS } from '../settings';
// Ball.js


export default class Ball {
    constructor(radius, boardWidth, boardHeight, ballcolor, difficalty) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = -1;

        this.strokeColor = ballcolor;
        
        //songs
        this.ping = new Audio('public/sounds/pong-01.wav');

        //acceleration
        if(this.difficalty==='easy'){
            this.ballAcceleration = 0.1;
            }
            else if(this.difficalty === 'medium'){
                this.ballAcceleration = 0.2;
            }
            else if(this.difficalty === 'hard'){
                this.ballAcceleration = 0.3;
            }
            else {
                this.ballAcceleration = 0.2;
            }

        this.reset();
        this.wallCollision();
    }//end of constructor

    // Ball.js
    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        this.vx = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
            // this.vx = Math.floor(Math.random() * 10 - 5);
            this.vx = Math.max(this.direction * (6 - Math.abs(this.vy),2.5));
        }
    }

    //wall collision
    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if (hitTop || hitBottom) {
            this.vy = -this.vy;
        }
        else if (hitLeft || hitRight) {
            this.vx = -this.vx;
        }
    }

    paddleCollision(p1, p2) {
        if (this.vx > 0) {
            //ball is moving the right and only check for player2
            let paddle = p2.coordinates(p2.x, p2.y, p2.width, p2.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if (
                (this.x + this.radius >= leftX) &&
                (this.x + this.radius <= rightX) &&
                (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx += this.vx*this.ballAcceleration;
                this.vx = -this.vx;
                this.ping.play();
            }
        }
        else {
            let paddle = p1.coordinates(p1.x, p1.y, p1.width, p1.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if (
                (this.x - this.radius <= rightX) &&
                (this.x - this.radius >= leftX) &&
                (this.y >= topY && this.y <= bottomY)
            ) {
                this.vx += this.vx*this.ballAcceleration;
                this.vx = -this.vx;
                this.ping.play();
            }
        }
    }

    goal(player){
        player.score++;
        this.reset();
        // console.log(player.score)
    }

    render(svg, p1, p2) {
        //update x position with vecotr direction 60 times a second
        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(p1, p2);
        // <circle cx="256" cy="128" r="8" fill="red"/>
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', 'rgba(0,0,0,0.5');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'stroke', this.strokeColor);
        circle.setAttributeNS(null, 'stroke-width', '2');
        // circle.setAttributeNS(null, 'x', this.x);
        // circle.setAttributeNS(null, 'y', this.y);

        svg.appendChild(circle);

        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;
        if(rightGoal){
            this.goal(p1);
            this.direction = 1;
        }
        else if (leftGoal){
            this.goal(p2);
            this.direction = -1;
        }
    }




}//end of the Ball clss