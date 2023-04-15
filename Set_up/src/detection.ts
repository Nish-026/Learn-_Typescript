

function detectTypes(val: number | string){
    if(typeof val=="string"){
        return val.toLowerCase()
    }
    return val+3
}

function provideId(id:string | null){
    if(!id){
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

interface Admin{
    name:string,
    email:string,
    isAdmin: boolean
}

interface user{
    name:string,
    email:string
}

function isAdmin(account: user | Admin){
    // account.isAdmin  // gives error coz isAdmin is not present in user so what we can do is that

    if("isAdmin" in account){
        console.log(account.isAdmin)
    }
}