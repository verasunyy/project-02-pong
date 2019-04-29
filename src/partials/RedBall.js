import { SVG_NS } from '../settings';
import Ball from './Ball';

export default class RedBall extends Ball {
    //Redballs: paddle collion other player get 10 points
    constructor(radius, boardWidth, boardHeight, ballcolor, difficalty){
        super (radius, boardWidth, boardHeight, ballcolor, difficalty);

        super.ping = new Audio('public/sounds/pong-04.wav');
        this.ballAcceleration=0;

    }
    reset() {
        this.x = this.boardWidth / 2;
        this.y = Math.random()*400;

        this.vy = 0;
        this.vx = 0;
        while (this.vy ===0 || (this.vx <1.75&&this.vx>-1.75)) {
            this.vy = Math.random() * 5-2.5;
            // this.vx = Math.floor(Math.random() * 10 - 5);
            this.vx = Math.random() * 5-2.5;
        }
    }
    stop(){
        this.x=50;
        this.y=-50;

        this.vy=0;
        this.vx=0;
    }
    goal(player){
        console.log(player.score)
        player.score=player.score+10;
    }
    wallCollision() {
        super.wallCollision();
        const hitLeft = this.x - this.radius <= 22;
        const hitRight = this.x + this.radius >= this.boardWidth-22;

        if (hitLeft || hitRight) {
            this.vx = -this.vx;
        }
    }
    render(svg,p1,p2){
        //update x position with vecotr direction 60 times a second
        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision();
        super.paddleCollision(p1, p2);
        // <circle cx="256" cy="128" r="8" fill="red"/>
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', 'rgba(255,0,0,0.5');
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'stroke', this.strokeColor);
        circle.setAttributeNS(null, 'stroke-width', '2');
        // circle.setAttributeNS(null, 'x', this.x);
        // circle.setAttributeNS(null, 'y', this.y);

        svg.appendChild(circle);

        const rightGoal = ((this.x + this.radius >= p2.x )&& (this.y+this.radius > p2.y) && (this.y-this.radius < p2.y+p2.height));//p1 left player win
        const leftGoal = ((this.x - this.radius <= p1.x+p1.width) && (this.y+this.radius > p1.y )&& (this.y-this.radius < p1.y+p1.height));//p2 right player win 
        if(rightGoal){
            this.goal(p1);
        }
        else if (leftGoal){
            this.goal(p2);
        }
    }


}