
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
