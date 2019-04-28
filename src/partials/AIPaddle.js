import Paddle from './Paddle';

export default class AIPaddle extends Paddle {
    constructor(boardHeight, width, height,
        x, y, up, down, strokeColor, boardWidth, difficalty,position) {
        super(boardHeight, width, height,
            x, y, up, down, strokeColor);
        this.boardWidth = boardWidth;
        this.difficalty=difficalty;
        this.position = position;
        console.log(this.difficalty);
        console.log(this.difficalty === 'hard');

        if(this.difficalty==='easy'){
        this.difficaltyRate = 1.5;
        }
        else if(this.difficalty === 'medium'){
            this.difficaltyRate = 2;
        }
        else if(this.difficalty === 'hard'){
            this.difficaltyRate = 2.5;
        }
        else {
            this.difficaltyRate = 1.5;
        }
    }

    render(svg, ball) {
        super.render(svg);
        // console.log('paddleY: '+this.y);
        // console.log('BallY:' +ball.x);
        // console.log('BallX:' +ball.y);
        // console.log('Boardwidth' +this.boardWidth);
        switch(this.position){
            case 'left':

        if (ball.x < this.boardWidth / 2) {
            // console.log('BallY:' +ball.x);
            if (this.y + this.height/2 - ball.y !== 0) {
                if(this.y + this.height/2 - ball.y<0 && Math.abs(ball.vy)<Math.abs(ball.vx/2)){
                    this.y = Math.min(this.boardHeight-this.height, this.y+10 + Math.abs(ball.vy)*this.difficaltyRate); 
                }
                else if(this.y + this.height/2 - ball.y<0){
                    this.y = Math.min(this.boardHeight-this.height, this.y + Math.abs(ball.vy)*this.difficaltyRate);
                }
                else if(this.y + this.height/2 - ball.y<0 && Math.abs(ball.vy)<Math.abs(ball.vx/2)){
                    this.y = Math.max(this.y-10 - Math.abs(ball.vy)*this.difficaltyRate, 0);
                }
                else{
                    this.y = Math.max(this.y - Math.abs(ball.vy)*this.difficaltyRate, 0);
                }
                // console.log('paddleY: '+this.y);
                // console.log('BallY:' +ball.x);
                // console.log('BallX:' +ball.y);
            }
        }
        break;

        case 'right':
        if (ball.x > this.boardWidth / 2) {
            // console.log('BallY:' +ball.x);
            if (this.y + this.height/2 - ball.y !== 0) {
                if(this.y + this.height/2 - ball.y<0 && Math.abs(this.y + this.height/2 - ball.y)>this.boardHeight/2){
                    this.y = Math.min(this.boardHeight-this.height, this.y+10 + Math.abs(ball.vy)*this.difficaltyRate); 
                }
                else if(this.y + this.height/2 - ball.y<0){
                    this.y = Math.min(this.boardHeight-this.height, this.y + Math.abs(ball.vy)*this.difficaltyRate);
                }
                else if(this.y + this.height/2 - ball.y<0 && Math.abs(this.y + this.height/2 - ball.y)>this.boardHeight/2){
                    this.y = Math.max(this.y-10 - Math.abs(ball.vy)*this.difficaltyRate, 0);
                }
                else{
                    this.y = Math.max(this.y - Math.abs(ball.vy)*this.difficaltyRate, 0);
                }
                // console.log('paddleY: '+this.y);
                // console.log('BallY:' +ball.x);
                // console.log('BallX:' +ball.y);
            }
        }
        

        }
    }
}