console.log("hello world");

let a = 1, b = 2;

/**
 * @name add
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @deprecated this method is just extra overhead.
 */
function add(a, b) {
    return a + b
}

console.log("%d + %d = %d", a, b, add(a, b));
