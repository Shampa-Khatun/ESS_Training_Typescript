import { player} from "./player.js";

const player1 = new player("Messi", 36, "Argentina");
const player2 = new player("Ronaldo", 38, "Portugal");

const players: player[] = [];
players.push(player1);
players.push(player2);
console.log(players);

player1.play();
player2.play();

//public, private, protected
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
      
const person = new Person("Jane");

console.log(person.getName());

class Person2 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}
      
const person2 = new Person2("Jane");

console.log(person.getName());

//interface
interface Rectangle {
  width: number;
  height: number;
}
function calculateArea(rect: Rectangle) {
    let width = rect.width;
    let height = rect.height;
    return width * height;
}
const myRect = { width: 10, height: 20 };
console.log(calculateArea(myRect));




