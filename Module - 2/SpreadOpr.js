const numbers = [1,2,3]
const newNumbers = [...numbers,4,5]
console.log(newNumbers);

const person = {
    name:'Aayush'
};
const newPerson = {
    ...person,
    age:22
}

console.log(newPerson);