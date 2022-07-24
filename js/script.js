"use strict";

const padString = (string, length, symbol, sideRight = true ) => {

    // string DATA VALIDATION

    if (string === undefined) throw new Error("The argument string is undefined");
    if (typeof string !== "string") throw new Error("The argument string is not in type String");
    if (string.trim() === "") throw new Error("The argument string is empty");

    // length DATA VALIDATION

    if (length === undefined) throw new Error("The argument length is undefined");
    if (typeof length !== "number") throw new Error("The argument length is not in type Number");
    if (isNaN(length)) throw new Error("The argument length is not a valid number");

    // symbol DATA VALIDATION

    if (symbol === undefined) throw new Error("The argument symbol is undefined");
    if (typeof symbol !== "string") throw new Error("The argument symbol is not in type String");
    if (symbol.trim() === "") throw new Error("The argument symbol is empty");
    if (symbol.length > 1) throw new Error("The argument symbol is too long");

    // sideRight DATA VALIDATION

    if (typeof sideRight !== "boolean") throw new Error("The argument sideRight is not in type Boolean");

    //  PROCESSING

    if (string.length === length) {
        return string;
    }
    else if (string.length > length) {
        return string.substring(0, length);
    }
    else {
        let symbols = symbol.repeat(length - string.length);
        return sideRight ? string + symbols : symbols + string;
    }
}

console.log(padString("hello", 2, "*", false));
console.log(padString("hello", 5, "*" ));
console.log(padString("hello", 8, "*", false));
console.log(padString("hello", 9, "*"));