"use strict";
let mySize = 2;
console.log(mySize);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.3;
    }
}
kgToLbs(10);
//# sourceMappingURL=index.js.map