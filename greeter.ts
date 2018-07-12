// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = [1, 2, 3]; //"Dominik Palacz";
//
// //alert(greeter(user));
// document.body.innerHTML = greeter(user);
//
// document.addEventListener("DOMContentLoaded", function (event) {
//     console.log("DOM fully loaded and parsed");
//
//
// class Student {
//     fullName: string;
//
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = `${firstName} ${middleInitial} ${lastName}`
//     }
// }
//
// interface Person {
//     firstName: string;
//     lastName: string;
// }
//
// function greeter(person: Person) {
//     return `Hello, ${person.firstName} ${person.lastName}`;
// }
//
// let user = new Student('Dominik', 'M', 'Palacz'); //{firstName: 'Dominik', lastName: 'Palacz'};
//
// //document.body.innerHTML = greeter(user); OK ;)
//
// const myName: string = "Dominik";
// let myAge: number = 41;
// let canVote: boolean = true;
// let anything: any = 'dog';
// anything = 2;
//
// document.getElementById("tsStuff").innerHTML = `My name is ${myName}`;
// document.write('canVote is a ' + typeof (canVote) + '<br />');
// document.write('myName is a ' + typeof (myName) + '<br />');
// document.write('anything is a ' + typeof (anything) + '<br />');
//
//
// let strToNum:number = parseInt('5');
// let numToStr: number = 5;
//
// document.write('numToStr is a ' + typeof (numToStr.toString()) + '<br />');

// });

interface SuperHero {
    realName: string;
    superName: string;
}

let superman: SuperHero = {
    realName: 'Clark Kent',
    superName: 'Superman'
};

document.write(superman.realName + ' is ' + superman.superName + '<br/>');

let employees: string[] = ['Dominik', 'Igor', 'Peter'];

// employees.push(5); //err

document.write(employees.toString());

var supperheroes: SuperHero[] = [];

supperheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});

document.write('<br/>' + supperheroes[0].realName + 'is ' + supperheroes[0].superName + '<br/>');

document.write('5 + 4 = ' + (5 + 4) + '<br/>');
document.write('5 - 4 = ' + (5 - 4) + '<br/>');
document.write('5 * 4 = ' + (5 * 4) + '<br/>');
document.write('5 / 4 = ' + (5 / 4) + '<br/>');
document.write('5 % 4 = ' + (5 % 4) + '<br/>');

document.write('5 + String 2 = ' + (5 + '2') + '<br/>');

let randNum = 1;

document.write('randNum++ = ' + randNum++ + '<br/>');
document.write('++randNum = ' + ++randNum + '<br/>');
document.write('randNum-- = ' + randNum-- + '<br/>');
document.write('--randNum = ' + --randNum + '<br/>');

//todo 16:33

let sampleLet = 123;

if (true) {
    let sampleLet = 456;
}

document.write("sampleLet : " + sampleLet + "<br />");

var sampleVar = 133323;

if (true) {
    var sampleVar = 444456;
}

document.write("sampleVar : " + sampleVar + "<br />");

var randArry = [5, 6, 7, 8];

for (var val in randArry) {
    document.write(val + '<br/>')
}

var strArray = randArry.map(String);

for (var val of strArray) {
    document.write(val + '<br />')
}