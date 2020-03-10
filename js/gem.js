class Gem{
    static sprites = ['Gem Blue.png','Gem Orange.png','Gem Green.png'];
    static yLocations = [160,240,335]; //GENERATE Random Gems in Enemy Locations
    constructor(){
        let index =  Math.floor(Math.random() * Math.floor(3));
        this.sprite = `images/${Gem.sprites[index]}`;
        let xLocation = Math.floor(Math.random() * 5);
        this.x = 100 * xLocation + 50;
        this.y = Gem.yLocations[index];
        this.angle = 0;
        this.angleSpeed = -2 + Math.floor(Math.random() * Math.floor(10))

    }

    update(delta){
        this.angle+=delta *3;
    }
    render(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(0.5,0.5);
        ctx.drawImage(Resources.get(this.sprite), -50, -100);
        ctx.restore();
    }
}