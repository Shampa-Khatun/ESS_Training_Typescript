var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// generic is a reusable block of code which can be used with different types
var addID = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = addID({
    name: "shampa",
    age: 25,
});
console.log("User Object:", user);
console.log("User ID:", user.id);
console.log("User Name:", user.name);
console.log("User Age:", user.age);
var user2 = "shahariar";
var response1 = {
    status: 200,
    type: "success",
    data: "This is a string"
};
console.log("API Response:", response1);
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
