import Paddle from './Paddle';

export default class AIPaddle extends Paddle {
    //constructor, call super
    //create a AI paddle
    constructor(boardHeight, width, height,
        x, y, up, down, strokeColor, boardWidth, difficalty, position) {
        super(boardHeight, width, height,
            x, y, up, down, strokeColor);
        this.boardWidth = boardWidth;
        this.difficalty=difficalty;
        this.position = position;
        
        //set up the the difficaltyrate depends on the difficalty
        if(this.difficalty==='easy'){
        this.difficaltyRate = 1.5;
        this.difficaltyRange = 0;
        }
        else if(this.difficalty === 'medium'){
            this.difficaltyRate = 2;
            this.difficaltyRange = 10;
        }
        else if(this.difficalty === 'hard'){
            this.difficaltyRate = 3;
            this.difficaltyRange = 20;
        }
        else {
            this.difficaltyRate = 1.5;
            this.difficaltyRange = 0;
        }
    }
    //
    render(svg, ball) {
        super.render(svg);
        switch(this.position){
            case 'left':

        if (ball.x < this.boardWidth / 2 && ball.vx<0) {
            if ( this.y+this.difficaltyRange>ball.y || this.y+this.height-this.difficaltyRange<ball.y){
                if(this.y + this.height/2 - ball.y<0 ){
                    if(Math.abs(ball.vy)<Math.abs(ball.vx/2)){
                        this.y = Math.min(this.boardHeight-this.height, this.y + 10 + Math.abs(ball.vy)*this.difficaltyRate);
                    }
                    else{
                        this.y = Math.min(this.boardHeight-this.height, this.y + Math.abs(ball.vy)*this.difficaltyRate);
                    } 
                }
                else{
                    if(Math.abs(ball.vy)<Math.abs(ball.vx/2)){
                        this.y = Math.max(this.y-10 - Math.abs(ball.vy)*this.difficaltyRate, 0);
                    }
                    else{
                        this.y = Math.max(this.y - Math.abs(ball.vy)*this.difficaltyRate, 0);
                    }
                }
            }
        }
        break;

        case 'right':
        if (ball.x > this.boardWidth / 2 && ball.vx>0) {
            if (this.y+this.difficaltyRange>ball.y || this.y+this.height-this.difficaltyRange<ball.y) {

                if(this.y + this.height/2 - ball.y<0 ){
                    if(Math.abs(ball.vy)<Math.abs(ball.vx/2)){
                        this.y = Math.min(this.boardHeight-this.height, this.y+10 + Math.abs(ball.vy)*this.difficaltyRate);
                    }
                    else{
                        this.y = Math.min(this.boardHeight-this.height, this.y + Math.abs(ball.vy)*this.difficaltyRate);
                    }
                }
                else{
                    if(Math.abs(ball.vy)<Math.abs(ball.vx/2)){
                        this.y = Math.max(this.y-10 - Math.abs(ball.vy)*this.difficaltyRate, 0);
                    }
                    else{
                        this.y = Math.max(this.y - Math.abs(ball.vy)*this.difficaltyRate, 0);
                    }
                }
            }
        }
        

        }
    }
}