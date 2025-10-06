export class player {
    name;
    age;
    country;
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
//# sourceMappingURL=player.js.map