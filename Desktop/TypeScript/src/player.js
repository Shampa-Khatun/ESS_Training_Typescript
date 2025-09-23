"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player = void 0;
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
exports.player = player;
