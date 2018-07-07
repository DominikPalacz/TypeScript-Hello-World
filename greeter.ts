// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = [1, 2, 3]; //"Dominik Palacz";
//
// //alert(greeter(user));
// document.body.innerHTML = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = {firstName: 'Dominik', lastName: 'Palacz'};

document.body.innerHTML = greeter(user);