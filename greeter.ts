// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = [1, 2, 3]; //"Dominik Palacz";
//
// //alert(greeter(user));
// document.body.innerHTML = greeter(user);

class Student {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student('Dominik', 'M', 'Palacz'); //{firstName: 'Dominik', lastName: 'Palacz'};

document.body.innerHTML = greeter(user);