function Player (name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}
Player.prototype.gainXp = function (newPoints) {
    let newVal = this.points + newPoints;
    this.lvl += Math.floor(newVal / 10);
    this.points = newVal % 10;
}
Player.prototype.describe = function () {
    console.log(`${this.name} is level ${this.lvl} with ${this.points} experience points.`);
}

const player1 = new Player("bob");
console.log(player1)
player1.gainXp(32);
console.log(player1);
player1.gainXp(32);
console.log(player1);
player1.describe();