class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const player1 = new player("Messi", 36, "Argentina");
const player2 = new player("Ronaldo", 38, "Portugal");
const players = [];
players.push(player1);
players.push(player2);
console.log(players);
player1.play();
player2.play();
export {};
//# sourceMappingURL=class.js.map