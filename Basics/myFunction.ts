

// how to create function in typescript

function addTwo(num:number):number{
    return num+2
    // return "hello"   // so if i return a string here, it's not problematic but i want number only in return so i declare using (num:number):number
}

addTwo(5)


function signUpUser(name:string,email:string,isHappy:boolean){}

signUpUser("Nishtha","1",true)


let login= (name:string,email:string,isHappy:boolean=true)=> {};

login("Nishtha","hi")  // so if I pass 2 arguments it won't accept coz in login function it has 3 arguments so by using default we can set the value of isHappy.

function getValue(myVal:number): boolean|string{
    if(myVal>5){
        return true
    }

    return "200 OK"
}

const getHello= (S:string):string=>{
    return ""
}

// const heros=["thor","spiderman","ironman"]
const heros=[1,2,3]

heros.map((hero):string =>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)  // added void coz it's not returning anything
}


function handleError(msg:string):never{
    throw new Error(msg)   // some function never returns a value
}

export{}