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
////////////////////////////////// instanceof Narrowing
function logValue(x) {
    if (x instanceof Date) { // instanceof checks whether this object was instance of some or not
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "fish food";
    }
    else {
        return "bird food";
    }
}
function getTrueshape(shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side    // this is giving me error coz rectangle is not included in this function so
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const defaultforShape = shape; // this is called Exhaustiveness checking
            return defaultforShape;
    }
}
// Exhaustiveness checking
//The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.
//For example, adding a default to our getArea function which tries to assign the shape to never will raise when every possible case has not been handled.
