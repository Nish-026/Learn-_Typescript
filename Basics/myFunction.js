"use strict";
// how to create function in typescript
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"   // so if i return a string here, it's not problematic but i want number only in return so i declare using (num:number):number
}
addTwo(5);
function signUpUser(name, email, isHappy) { }
signUpUser("Nishtha", "1", true);
var login = function (name, email, isHappy) {
    if (isHappy === void 0) { isHappy = true; }
};
login("Nishtha", "hi"); // so if I pass 2 arguments it won't accept coz in login function it has 3 arguments so by using default we can set the value of isHappy.
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (S) {
    return "";
};
// const heros=["thor","spiderman","ironman"]
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
