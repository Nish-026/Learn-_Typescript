
const score:Array<number>=[]
const names:Array<number>=[]

function identityOne(val: boolean|number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type):Type{
    return val
}

interface Bottle{
    brand:string,
    type: number
}
// identityThree<Bottle>({})


function getSearchProducts<T>(products: T[]): T {
    const myIndex=3
    return products[myIndex]
}

// converting the above code into arrow function

const getSearchProducts_witharrowfunction =<T>(products: T[]): T=>{
    const myIndex=3
    return products[myIndex]
}

function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}
// anotherFunction(3,"4") // gives error coz U type should be a number but we are passing a string

////////////// CLASS types using generics

interface Quiz{
    name:string,
    type: string
}

interface Course{
    name:string,
    author: string,
    subject: string
}
class sellable<T>{  // this is a generic clas, generic class is with <T>
    public cart: T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}