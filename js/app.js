// Place the player object in a variable called player
let player = new Player();
let score = new Score();
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
let allGems = []; 
function createEnemies(){
for(let y of [160,240,335])
{
    let x = Math.random() * 200;
    allEnemies.push(new Enemy(x,y));
}
};

function createGems() {
    allGems = [];
    for(let i=0; i<6; i++) {
        allGems.push(new Gem());
    }
};

//Check Collision:
function checkCollisions(){
    if(player.numberOfLives <1){return;}
    allEnemies.forEach(bug => {
        if(Math.abs(bug.x - player.x)< 50 && Math.abs(bug.y - player.y)< 50) {
            player.collidedWithEnemey();
        }
    });

    allGems.forEach((gem,index) =>{
        if(Math.abs(gem.x - player.x)< 50 && Math.abs(gem.y - player.y)< 50) {
            player.collidedWithGem();
            allGems.splice(index,1); //REMOVE Gem from Array on collision,
        }
    });
};



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        13: 'enter'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

createEnemies();