/*jshint -W067 */ // Why?
const uid = (id => key => `Symbol(${key || ""})_${(++id + Math.random()).toString(36)}`)(0);
/*jshint +W067 */

export default window.Symbol || function Symbol(description) {
    if (this instanceof Symbol) {
        throw new TypeError("Symbol is not a constructor");
    }
    return uid(description);
};