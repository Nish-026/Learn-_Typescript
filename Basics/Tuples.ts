const user: (string|number)[]= [1,"hc"]

let Tuser: [string,number,boolean]

// Tuser= [true,5,"n"];   /// not allowed 

Tuser= ["n",6,true];  // tuple is about having order of the data


let rgb: [number,number,number] =[255,566,45566]


type USER= [number,string];
const newUser: USER= [112,"hh"];

newUser[1]="nish";
newUser.push(3); // pushes 3 into array but its violating the protocol
// newUser.push(true);  // throws error
export{}