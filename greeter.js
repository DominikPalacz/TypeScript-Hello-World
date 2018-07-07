// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = [1, 2, 3]; //"Dominik Palacz";
//
// //alert(greeter(user));
// document.body.innerHTML = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Dominik', 'M', 'Palacz'); //{firstName: 'Dominik', lastName: 'Palacz'};
document.body.innerHTML = greeter(user);
