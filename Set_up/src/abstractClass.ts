

class Take_Photo{    // the moment we change it to abstract class we can no longer make objects out of it
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
}

const hc= new Take_Photo("test","Test")


abstract class A_Take_Photo{    // the moment we change it to abstract class we can no longer make objects out of it
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void // so all the classes inhereting this abstract class would implement sepia and they would have to definitely
    getReelTime(): number{
        
        return 8
    }
}

const abstract_obj= new Take_Photo("test","Test")  // can't do this so to make object using abstract class we can only make objects from class which are inhereting abstract classes

class Insta extends A_Take_Photo{
    constructor(public cameraMode: string,
        public filter :string){
            super (cameraMode,filter)
        }
        getSepia(): void {
            console.log("sepia")
        }
}

const new_obj= new Insta("test","T")
let ans=new_obj.getReelTime()  // even though we have not declared the getReelTime in new_obj but we can still access it using abtract class
console.log(ans) // 