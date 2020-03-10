class Score{
    constructor(){
        this.reset();
    }
    update(){};
    render(){
        ctx.font = "35px Calibri";
        ctx.fillText(`Lives: ${player.numberOfLives}`,10,40);
        ctx.fillText(`Score: ${this.gemScore}`,330,40);
        if(player.numberOfLives ===0){
            player.gameOver()
            this.askForANewGame();
        }

    if(allGems.length ==0){
        player.gameWon();
        this.askForANewGame();}
    };

    askForANewGame(){
        ctx.font = "32px Calibri";
        ctx.fillText(`Press Enter to Start A New Game!`,36,605);

    }
    increase(){
        this.gemScore+=10;
    }
    reset(){
        this.gemScore = 0;
    }
}