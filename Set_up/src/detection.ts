

function detectTypes(val: number | string) {
    if (typeof val == "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID ");
        return
    }
    id.toLowerCase()
}

function printAll_(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

function printAll(strs: string | string[] | null) {   //string[] means string array

    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

// Equality narrowing
// TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types. For example:

function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();

        y.toLowerCase();

    } else {
        console.log(x);

        console.log(y);

    }
}

// The in operator narrowing
// JavaScript has an operator for determining if an object has a property with a name: the in operator. TypeScript takes this into account as a way to narrow down potential types.

// For example, with the code: "value" in x. where "value" is a string literal and x is a union type. The “true” branch narrows x’s types which have either an optional or required property value, and the “false” branch narrows to types which have an optional or missing property value.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }

    return animal.fly();
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

interface user {
    name: string,
    email: string
}

function isAdmin(account: user | Admin) {
    // account.isAdmin  // gives error coz isAdmin is not present in user so what we can do is that

    if ("isAdmin" in account) {
        console.log(account.isAdmin)
    }
}

////////////////////////////////// instanceof Narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {   // instanceof checks whether this object was instance of some or not
        console.log(x.toUTCString());

    } else {
        console.log(x.toUpperCase());
    }
}

////////////////////////////// Using type predicates


type fish = { swim: () => void };
type bird = { fly: () => void };

function isFish(pet: fish | bird): pet is fish {   // here we have defined that pet is going to be fish so the functions
    return (pet as fish).swim !== undefined;
}

function getFood(pet: fish | Bird) {
    if (isFish(pet)) {
        return "fish food"
    } else {
        return "bird food"
    }
}

////////////////////////////// Discriminated unions

interface Circle {
    kind: "circle",
    radius: number
}
interface square {
    kind: "square"
    side: number
}
interface rectangle {
    kind: "rectangle"
    width: number,
    height: number
}

type Shape = Circle | square | rectangle

function getTrueshape(shape: Shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side    // this is giving me error coz rectangle is not included in this function so
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.width * shape.height
        
        default:
            const defaultforShape: never =shape   // this is called Exhaustiveness checking
            return defaultforShape

    }
}

// Exhaustiveness checking
//The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

//For example, adding a default to our getArea function which tries to assign the shape to never will raise when every possible case has not been handled.