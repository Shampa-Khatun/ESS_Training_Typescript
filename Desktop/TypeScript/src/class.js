var player = /** @class */ (function () {
    function player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing"));
    };
    return player;
}());
var player1 = new player("Messi", 36, "Argentina");
var player2 = new player("Ronaldo", 38, "Portugal");
var players = [];
players.push(player1);
players.push(player2);
console.log(players);
player1.play();
player2.play();
//public, private, protected
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
var Person2 = /** @class */ (function () {
    // name is a private member variable
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("Jane");
console.log(person.getName());
