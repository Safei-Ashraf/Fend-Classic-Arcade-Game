// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
 constructor(){
    this.sprite = 'images/char-boy.png';
    this.startOver();
    this.numberOfLives = 5;
 }

    update(){}
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x-50, this.y-100 );

    }
    handleInput(direction){
        if(this.pauseGame){
            if(direction == 'enter'){
                if(this.won){
                    createGems();
                    score.reset();
                }

                this.numberOfLives = 5;
                this.startOver();
                createGems();
                score.reset();

            }else{
                return;
            }
            }
        switch(direction) {
            case "right":
                if(this.x<400) {
                    this.x += 100;
                }
                break;

            case "left":
                if(this.x>50) {
                    this.x -= 100;
                }
                break;

            case "up":
                if(this.y>100) {
                    this.y -= 82;
                 }
                    
                break;
            case "down":
                 if(this.y<500) {
                    this.y += 82;
                }

        }
    }

    gameOver(){
        this.pauseGame = true;
        this.won = false;
    }
    gameWon(){
        this.pauseGame = true;
        this.won = true;
    }
    startOver(){
        this.x = 250;
        this.y = 500;
        this.pauseGame = false;
    }
 
    collidedWithEnemey() {
        this.numberOfLives -=1;
        this.startOver();
            
    }
    collidedWithGem(){
        score.increase();
    }

}
