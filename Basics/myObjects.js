"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Nishtha",
    email: "nishtha@123",
    isHappy: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isHappy;
}
createUser({ name: "Nishtha", isHappy: true });
// | here if i want to pass more information then i can do like
var newUser = { name: "Nishtha", isHappy: true, email: "123" };
createUser(newUser);
// for functions having parameters as object type, we write like
function createCourse(name, boolean) {
    return { name: name, isHappy: boolean };
}
createCourse("NXM-301", true);
function CreateUser(user) {
    return { name: "", email: "", isHappy: true };
}
CreateUser({ name: "", email: "", isHappy: true });
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var myUSER = {
    name: "123",
    email: "1@gmail.com",
    isHappy: true
};
