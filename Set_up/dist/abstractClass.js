"use strict";
class Take_Photo {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
const hc = new Take_Photo("test", "Test");
class A_Take_Photo {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
const abstract_obj = new Take_Photo("test", "Test"); // can't do this so to make object using abstract class we can only make objects from class which are inhereting abstract classes
class Insta extends A_Take_Photo {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log("sepia");
    }
}
const new_obj = new Insta("test", "T");
let ans = new_obj.getReelTime(); // even though we have not declared the getReelTime in new_obj but we can still access it using abtract class
console.log(ans); // 
