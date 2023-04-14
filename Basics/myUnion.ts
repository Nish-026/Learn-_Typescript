
// TypeScript can combine one or two different types of data (i.e., number, string, etc.) 
// in a single type, which is called a union type.


let score:number | string = 33
score= "five";


type User={
    name: string;
    id:number
}

type Admin={
    username: string;
    id:number
}

let Nishtha: User | Admin ={name:"Nishtha",id:26}

Nishtha= {username:"nish",id:78}

function getDbid(id:number | string){
    console.log(id)
    // id.toLowerCase() // gives error thus we need to do

    if( typeof id=== "string"){

    }

}

getDbid(3);
getDbid("3")



const data: (string | number)[]=[] // you can have both number and string values in array

