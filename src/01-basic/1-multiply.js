/**
 *   Basic types types
 */

function multiply(a, b) {
    return a * b;
}
function countOccurrences(text, letter) {
    return text.split("").filter((l) => l === letter).length;
}

const a = 10;
const b = 20;
console.log(`${a} * ${b} = ${multiply(a, b)}`);
console.log(`|a| in abracadabra = ${countOccurrences("abracadabra", "a")}`);
