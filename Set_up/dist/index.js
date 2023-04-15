"use strict";
// console.log("typerscript is awesome")
// console.log("typerscript is awesome 2")
class instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short // we can add more things but not less than what is defined in interface
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Yesssssss!");
    }
}
///// what is the use of abstract classes if the interfaces are available
