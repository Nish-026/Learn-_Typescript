
const User={
    name:"Nishtha",
    email:"nishtha@123",
    isHappy:true
}

function createUser({name:string,isHappy:boolean}){

}

createUser({name:"Nishtha",isHappy:true})  

    // | here if i want to pass more information then i can do like

let newUser= {name:"Nishtha",isHappy:true,email:"123"}
createUser(newUser)

// for functions having parameters as object type, we write like

function createCourse(name,boolean):{name:string,isHappy:boolean}{
    return {name:name,isHappy:boolean}
}

createCourse("NXM-301",true)


//// TYPE ALIASES

type User= {
    name: string;
    email:string;
    isHappy: boolean
}

function CreateUser(user:User):User{
    return {name:"",email:"",isHappy:true}
}

CreateUser({name:"",email:"",isHappy:true})

type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });


type USER ={
    readonly name: string;    // readonly is used when you don't want anyone to manipulate any property further
    email:string;
    isHappy: boolean
    creditCardDetail? :number  /// if present then type will be number only
}

let myUSER: USER={
    name:"123",
    email:"1@gmail.com",
    isHappy:true
}

// myUSER.name="Nishtha"  // gives error coz we have defined in the type that it's readonly



// with multiple types 
type cardNumber= {
    cardNumber: string
}

type cardDate= {
    cardDate: string
}

type cardDetails = cardNumber & cardDate &{
    cvv:number
}




export {}