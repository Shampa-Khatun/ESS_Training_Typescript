"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player = void 0;
class player {
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
exports.player = player;
//# sourceMappingURL=player.js.map