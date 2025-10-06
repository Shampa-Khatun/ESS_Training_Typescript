import { player } from "./player.js";
const player1 = new player("Messi", 36, "Argentina");
const player2 = new player("Ronaldo", 38, "Portugal");
const players = [];
players.push(player1);
players.push(player2);
console.log(players);
player1.play();
player2.play();
//public, private, protected
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName());
class Person2 {
    name;
    // name is a private member variable
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person2 = new Person2("Jane");
console.log(person.getName());
function calculateArea(rect) {
    let width = rect.width;
    let height = rect.height;
    return width * height;
}
const myRect = { width: 10, height: 20 };
console.log(calculateArea(myRect));
//# sourceMappingURL=class.js.map