"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree<Bottle>({})
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
// converting the above code into arrow function
const getSearchProducts_witharrowfunction = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
