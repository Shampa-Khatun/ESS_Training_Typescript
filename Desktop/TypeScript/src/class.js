"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_js_1 = require("./player.js");
var player1 = new player_js_1.player("Messi", 36, "Argentina");
var player2 = new player_js_1.player("Ronaldo", 38, "Portugal");
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
function calculateArea(rect) {
    var width = rect.width;
    var height = rect.height;
    return width * height;
}
var myRect = { width: 10, height: 20 };
console.log(calculateArea(myRect));
