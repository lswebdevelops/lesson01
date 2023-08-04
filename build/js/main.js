"use strict";
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     (this.age = age), (this.lang = lang);
//   }
// }
// less code
class Coder {
    // secondLang!: string >> could be used (not for beginners)
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        (this.age = age), (this.lang = lang);
    }
    getAge() {
        return `Hello , I am ${this.age} years old.`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave);
// console.log(Dave.age); > // we can't se because it was private: "private age: number,"
console.log(Dave.name); // Dave
// console.log(Dave.lang);// / we can't se because it was protected: " protected lang: string = 'Typescript' "
// by changing > //  "noEmitOnError": true,     to not commented it will log
// console.log(Dave.age)// 42
// console.log(Dave.lang);// Typescript
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}.`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang()); // I write Typescript.
