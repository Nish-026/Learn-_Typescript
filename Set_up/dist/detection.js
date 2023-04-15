"use strict";
function detectTypes(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID ");
        return;
    }
    id.toLowerCase();
}
function printAll_(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// Equality narrowing
// TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types. For example:
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function isAdmin(account) {
    // account.isAdmin  // gives error coz isAdmin is not present in user so what we can do is that
    if ("isAdmin" in account) {
        console.log(account.isAdmin);
    }
}
