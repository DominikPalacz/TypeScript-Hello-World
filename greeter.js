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
//document.body.innerHTML = greeter(user); OK ;)
var myName = "Dominik";
var myAge = 41;
var canVote = true;
var anything = 'dog';
anything = 2;
document.getElementById("tsStuff").innerHTML = "My name is " + myName;
// });
