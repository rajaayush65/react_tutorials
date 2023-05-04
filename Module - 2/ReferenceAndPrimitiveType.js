const number = 1;
//Value Copied
const num2 = number;

console.log(num2);

const person = {
  name: "Aayush",
};

//Referenced Copy on Objects and Arrays
const secondPerson = person;
person.name = "Akash";
console.log(secondPerson);

//To Create Copy
person.name="Sonny";
const thirdPerson = {
    ...person
}
console.log(thirdPerson);