"use strict";
// tipe data function dan return
Object.defineProperty(exports, "__esModule", { value: true });
function getNama(nama) {
    return "Nama saya adalah " + nama;
}
console.log(getNama("Ali Hanafiah"));
function age(umur) {
    return umur;
}
console.log("Umur saya adalah " + age(20));
function notReturn() {
    console.log("Tanpa Return");
}
notReturn();
let arrow = () => {
    return "aaa";
};
console.log(arrow());
//# sourceMappingURL=function.js.map