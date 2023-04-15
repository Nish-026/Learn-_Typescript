
// console.log("typerscript is awesome")
// console.log("typerscript is awesome 2")




//////////////////////////// NORMAL CLASS
// class User{
//     email:string
//     name:string
//     city: string="" // if i used readonly here then it cannot be modified further
//     constructor (email:string,name:string){
//         this.email=email;
//         this.name=name;

//     }
// }

// const Nishtha= new User("n@gamil.com","nish")
// Nishtha.city="Delhi"

//////////////////////// USING READONLY

// class User{
//     email:string
//     name:string
//     readonly city: string="" // if i used readonly here then it cannot be modified further
//     constructor (email:string,name:string){
//         this.email=email;
//         this.name=name;

//     }
// }

// const Nishtha= new User("n@gamil.com","nish")
// Nishtha.city="Delhi" // it gives me error i can onyl access it just that
// Nishtha.city // this is fine


/////////////////////// USING PRIVATE

// class User{
//     email:string
//     name:string
//     private city: string="" // if i used readonly here then it cannot be modified further
//     constructor (email:string,name:string){
//         this.email=email;
//         this.name=name;
//         this.city="delhi";   // though city is private but can be accessed within the class
//     }
// }

// const Nishtha= new User("n@gamil.com","nish")

// Nishtha.city // cannot access the city it can only be accessed in the class
 // anythink which you do not mark is called public


 ////////////////////// shortcut to write the class from above

// class User{

//     private city: string="Delhi" // if i used readonly here then it cannot be modified further
//     constructor (public email:string, public name:string){}

//     get getApplemail(): string{
//         return `apple${this.email}`
//     }
// }

// const Nishtha= new User("n@gamil.com","nish")


////////////////////// getter and setters


// class User{

//     private courseCount= 1;
//     private city: string="Delhi" // if i used readonly here then it cannot be modified further
//     constructor (public email:string, public name:string){}

//     get getApplemail(): string{
//         return `apple${this.email}`
//     }
    
//     //designing getters and setters for courseCount property

//     get course_Count(): number{
//         return this.courseCount
//     }

//     set course_Count(courseNum){    /// we cannot set setter to void
//               // in setter there should be nothing set as type
//         if(courseNum<=1){
//             throw new Error("course count should be more than 1")
//         }
//         this.courseCount= courseNum
//     }

//     private deleteToken(){
//         console.log("token deleted")
//     }
// }

// const Nishtha= new User("n@gamil.com","nish")
// Nishtha.deleteToken   // cannot access method deleteToken, can be accessed only through class


//////////////////////////// Inheritance using typescript


// class User{

//     protected courseCount= 1;
//     private city: string="Delhi"
//     constructor (public email:string, public name:string){}

//     get getApplemail(): string{
//         return `apple${this.email}`
//     }
//     get course_Count(): number{
//         return this.courseCount
//     }

//     set course_Count(courseNum){ 

//         if(courseNum<=1){
//             throw new Error("course count should be more than 1")
//         }
//         this.courseCount= courseNum
//     }

//     private deleteToken(){
//         console.log("token deleted")
//     }
// }

// class subUser extends User{
     
//     isFamily: boolean=true;
//     changeCourseCount(){
//         this.courseCount= 4;   // when i changed form private to protected then we can access it and modify it within classes and the subclasses but not outside the class
//     }
//     // so subUser cannot acquire properties that are private

// }

// const Nishtha= new User("n@gamil.com","nish")




////////////////////////// INTERFACES

interface TakePhoto{
    cameraMode: string
    filter:string           ///// interface defines the must have things for the classes
    burst: number
}

interface Story{
    createStory(): void
}

class instagram implements TakePhoto{

    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number

    ){}
}

class Youtube implements TakePhoto,Story{
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string        // we can add more things but not less than what is defined in interface

    ){}
    createStory(): void {
        console.log("Yesssssss!")
    }
}


///// what is the use of abstract classes if the interfaces are available


