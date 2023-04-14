
interface User{
    readonly  dbId: number,
    email: string,
    userID: number,
    googleID? : number,
    // start:()=> string  // can write like below also
    start():string  // start is a method that returns a string
    getcoupon(coupon: string):number
}

// interface is a loose form of class, this is what i expect

// can add more properties or methods to user (below)

interface User{       // called as reopening of interface
    githubtoken: string;
}


const nishtha: User={email:"ff",userID:121, dbId: 22,
start:()=>{
    return "Yay!!!"
},
getcoupon:(coupon:"yes_discount")=>{
    return 3
},
githubtoken: "hg"
}
// nishtha.dbId= 44; // throws error


//// i can extend all the properties and methods of User into Admin

interface Admin extends User{
    role:"Admin"|"ta"
}

const nish: Admin={email:"ff",userID:121, dbId: 22,
start:()=>{
    return "Yay!!!"
},
getcoupon:(coupon:"yes_discount")=>{
    return 3
},
githubtoken: "hg",
role:"Admin"
}

export{}